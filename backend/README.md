# backend

## ローカル

### 環境構築

DockerでGoの環境を整える (Dockerfile参照)
`backend/` をVSCodeで開いて 「Reopen in Container」で構築されるはず。

環境変数を設定するために `.env` backend/配下用意する。
※ git commit しないこと！

```.env
API_DOMAIN=localhost
FE_URL=http://localhost:3000
PORT=8080
MYSQL_USER=
MYSQL_PW=
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DB=

```

データベースは本番環境のをいじることにする。ので、MySQLの設定はrailwayのConnectタブを参照する。

### 開発

[gqlgen](https://github.com/99designs/gqlgen)はスキーマファーストなのでまず `graph/schema.graphqls` にスキーマを定義する。

generateコマンドを実行して型やリゾルバを生成する。

```bash
$ gqlgen
```

（もしこれで実行できないときは）

```bash
$ go get -u github.com/99designs/gqlgen && go run github.com/99designs/gqlgen generate
```

あとはドメインロジックを実装してDIしたServiceをリゾルバ内で呼び出すように実装していく。

- [ ] ドメインロジックとデータベース操作を切り分けるようアーキテクチャを整理したい

### 実行
ローカルでは開発環境と指定して立ち上げる。
```bash
$ GO_ENV=dev go run server.go
```

マイグレーションを走らせるときは、

```bash
$ GO_ENV=dev go run migrate/migrate.go
```

バッチ処理を走らせるときは、
 `batch/batch.go#main` で関数を呼び出すように実装して、

```bash
$ GO_ENV=dev go run batch/batch.go
```

## デプロイ

いずれもrailwayにデプロイする。

### 1. データベース

- https://railway.app/project/78d04cc8-00b7-4d7d-93ff-812de8062dc1

### 2. サーバー


- https://railway.app/project/18933570-dc6c-4741-afc7-0fa0d22ef03c

masterにmergeしたら自動でデプロイが走る。
デプロイが完了したら立ち上がるようにコマンドをDockerfileに定義しておく。

```Docker
COPY . .

RUN go build -o server
CMD ["./server"]
```


Variablesに環境変数を設定する（上記 `.env` ）。
`API_DOMAIN` および `FE_URL` はデプロイしたクライアントのを使う。

その他設定はデフォルトのまま。

デプロイが完了したら以下のURLでプレイグラウンドできる。

- https://student-laboratory-matching-app-production.up.railway.app/
