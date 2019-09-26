import Permissions from 'react-native-permissions'


export const _checkPermission = (permissionName) => {
    return Permissions.check(permissionName).then(response => {
        if (response === 'denied') {
            return false
        } else if (response === 'authorized') {
            return true
        } else if (response === 'restricted') {
            return false
        } else if (response === 'undetermined') {
            return false
        }
    })


}

_requestPermission = (permissionName) => {
    return Permissions.request(permissionName).then(response => {
        return response
    })
}


export const _alertForPermission = (permissionName) => {
   return _requestPermission(permissionName)

}