export function isEmpty(obj: any = {}) {
    for (var key in obj) {
        if (obj[key] === undefined || obj[key] === "")
            return false;
    }
    return true;
}