
export const CheckPlaceData = (item) => {
    var data = ''

    if (item.address != '') {
        data = item.address;
    }else if(item.city != ''){
        data = `${data} ${item.city}`;
    }else if(item.country != ''){
        data = `${data} ${item.country}`;
    }
    return data;
}