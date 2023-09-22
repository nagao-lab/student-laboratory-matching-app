export const checkUploadable = (file: File) =>{
    if(!(file.type == "image/jpeg" || file.type == "image/png")) {
        return 0
    }

    if (file.size > 2*(1024**2)) {
        return 1
    }
    
    return 2
}