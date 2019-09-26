import ImagePicker from "react-native-image-picker";
import constant from "../config/constant";
import { Platform } from 'react-native';
import { getAsyncData, saveAsyncData } from "./AsyncStorageUtil";
import { OpenOkDialog } from "../components/AlertDialog";
import string from "../config/string";
import { displayConsole } from "./ConsoleUtil";

export function showImagePickerDialog() {
    return new Promise((resolve,_) => {
        const options = {
            title: constant.keyAllConstant.choosePhoto,
            storageOptions: {
                skipBackup: true,
                path: "images"
            },
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 1000,
            maxHeight: 1000,
            allowsEditing: false,
            noData: true,
        };
        ImagePicker.showImagePicker(options, response => {
            if (Platform.OS === "ios" && response.error === "Camera permissions not granted") {
                getAsyncData(constant.keyAllConstant.keyCameraPermissionAsked).then(res => {
                    if (res === 'true') {
                        OpenOkDialog(string.alert.cameraEnable, string.alert.buttonOk, () => { })
                    } else {
                        saveAsyncData(constant.keyAllConstant.keyCameraPermissionAsked, 'true');
                    }
                }).catch(error => {
                    displayConsole(error);
                })
            } else if (Platform.OS === "ios" && response.error === "Photo library permissions not granted") {
                getAsyncData(constant.keyAllConstant.keyGalleryPermissionAsked).then(res => {
                    if (res === 'true') {
                        OpenOkDialog(string.alert.galleryEnable, string.alert.buttonOk, () => { })
                    } else {
                        saveAsyncData(constant.keyAllConstant.keyGalleryPermissionAsked, 'true');
                    }
                }).catch(error => {
                    displayConsole(error);
                })
            }
            if (response.didCancel || response.error || response.customButton) {
                resolve(false);
            } else {
                resolve(response);
            }
        })
    })
}