export const uploadedFileToComment = (file: File) =>{
    if(!(file.type == "image/jpeg" || file.type == "image/png")) {
        return "このファイルタイプはサポートしていません。"
    }

    if (file.size > 2*(1024**2)) {
        return "ファイルサイズが大きすぎます。"
    }
    
    return "正常にアップロードされました。"
}