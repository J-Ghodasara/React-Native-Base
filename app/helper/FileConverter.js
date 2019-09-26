
export const convertToFile = (fileName,uri) => {
    var photo = {
        uri: uri,
        type: "image/*",
        name: fileName
    };
    var formData = new FormData();
    formData.append("image", photo);
    // formData.append(photo);
    return formData;

}
export const convertToObject = (fileName,uri) => {
    var photo = {
        uri: uri,
        type: "image/*",
        name: fileName
    };

    return photo;

}