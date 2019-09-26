
export const isEmailValid = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
        return false
    }else{
        return true
    }
}

export const isFullNameValid = (email) => {
    let reg = /^[a-zA-Z]*[a-zA-Z ]+$/;
    if (reg.test(email.trim()) === false) {
        return false
    }else{
        return true
    }
}

export const isPasswordValid  = (password) => {
var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
return regex.test(password);

    // if (password.length < 8) {
    //     return false;
    //   } else {
    //     return true;
    //   }
}