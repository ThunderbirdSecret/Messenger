export function isEmpty(obj: any = {}) {
    if(Array.isArray(obj)){
       for(let i = 0; i < obj.length; i++){
       if(obj[i] !== ""){
         return false
       }
    }
    return true
    } else {
    
    for (var key in obj) {
        if (obj[key] === undefined || obj[key] === "" || obj[key] === null)
            return false;
    }
    return true;}
}
