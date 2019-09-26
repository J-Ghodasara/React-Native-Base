import constant from '../config/constant'

export const getMeal = (timestamp) => {
    var hours = new Date(timestamp).getHours(); //Current Hours
    if (hours >= 6 && hours < 12) {
        return "Breakfast"
    } else if (hours >= 12 && hours < 18) {
        return "Lunch"
    } else if (hours >= 18 && hours < 24) {
        return "Dinner"
    }

}



export const getTownCountry = (town, country) => {
    if (town != undefined && country != undefined && town != "" && country != "") {
        return town + "," + country
    } else if (town != undefined && town != "") {
        return town
    } else if (country != undefined && country != "") {
        return country
    } else {
        return ""
    }
}

export const getImageUri = (uri) => {
    if (uri == undefined || uri == "") {
        return constant.completeProfile.userPlaceHolder
    } else {
        return { uri: uri }
    }
}

export const getImage =(obj , key) =>{
    let placeHolderUri =PLACEHOLDER_IMAGES[key]
    if(obj.hasOwnProperty("postThumbImage") && (obj.postThumbImage != null && obj.postThumbImage !== "")){
    // if(obj.hasOwnProperty("postThumbImage") && obj.postThumbImage !== ""){
        return {uri :obj.postThumbImage}
    }
    else{
        if(obj.hasOwnProperty("postImage") && (obj.postImage != null && obj.postImage !== "")){
        // if(obj.hasOwnProperty("postImage") && obj.postImage !== ""){
            return {uri :obj.postImage}
        }
        else{
             return placeHolderUri
        }
    }
} 

const PLACEHOLDER_IMAGES ={
    'postPlaceHolder' : require('../assets/image/post_placeholder.png'),
    'userPlaceHolder' :require('../assets/image/user_place.png')
}