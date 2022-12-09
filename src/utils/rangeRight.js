function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

function range(start, end, step, isRight) {
    let arr = []

    if (end == undefined){
        end = start
        arr = [...Array(Math.abs(end)).keys()]
        if (end < 0) {
            let neg = []
            arr.forEach((item) => neg.push(-item))
            return !isRight ? neg : neg.reverse()
        }
        return !isRight ? arr : arr.reverse()
    } if (step != 0 ) {
        arr = Array(Math.ceil((end - start) / step)).fill(start)
            .map((x, y) => x + y * step)
        return !isRight ? arr : arr.reverse()
    } if (start == 0 && end == undefined){
        return arr
    } if (step == 0){
        arr = Array(Math.ceil((end - start))).fill(start)
            .map((x, y) => x)}
    return !isRight ? arr : arr.reverse()

}

