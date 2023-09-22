package auth

import (
	"context"
	"net/http"
	"os"
	"time"
)

const cookieNameUserId = "UserId"

type cookieAccessKey struct{}

// これを通してUserId(StudentId or LaboratoryId)をCookieに読み書きする
type CookieAccess struct {
	Writer     http.ResponseWriter
	UserId     string
	IsLoggedIn bool
}

func (ca *CookieAccess) Login(userId string) {
	ca.UserId = userId
	ca.IsLoggedIn = true

	cookie := &http.Cookie{
		Name:     cookieNameUserId,
		Value:    userId,
		Path:     "/",
		Expires:  time.Now().Add(7 * 24 * time.Hour),
		Domain:   os.Getenv("API_DOMAIN"),
		Secure:   false,
		HttpOnly: false,
		SameSite: http.SameSiteNoneMode,
	}
	http.SetCookie(ca.Writer, cookie)
}

func (ca *CookieAccess) Logout() {
	ca.UserId = ""
	ca.IsLoggedIn = false

	cookie := &http.Cookie{
		Name:     cookieNameUserId,
		Value:    "",
		Path:     "/",
		Expires:  time.Now(),
		Domain:   os.Getenv("API_DOMAIN"),
		Secure:   false,
		HttpOnly: false,
		SameSite: http.SameSiteNoneMode,
	}
	http.SetCookie(ca.Writer, cookie)
}

func GetCookieAccess(ctx context.Context) *CookieAccess {
	return ctx.Value(cookieAccessKey{}).(*CookieAccess)
}

func UserIdMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ca := CookieAccess{Writer: w}

		ctx := context.WithValue(r.Context(), cookieAccessKey{}, &ca)
		r = r.WithContext(ctx)

		userId, err := r.Cookie(cookieNameUserId)
		if err != nil {
			ca.IsLoggedIn = false
			next.ServeHTTP(w, r)
			return
		}
		ca.UserId = userId.Value
		ca.IsLoggedIn = true
		next.ServeHTTP(w, r)
	})
}
