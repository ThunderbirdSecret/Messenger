function isEmpty(value) {
    if (value == null) return true;

    if (value.length > 0)    return false;
    if (value.length === 0)  return true;

    if (typeof(value) === "object") return false;

    for (let key in value) {
        let hasOwnProperty = Object.prototype.hasOwnProperty;
        if (hasOwnProperty.call(value, key)) return false;
    }

    return true;
}

console.log(isEmpty(new Map([["1", "str1"], [1, "num1"], [true, "bool1"]])))