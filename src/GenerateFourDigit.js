function Number() {
}

Number.create = function () {
    var a = parseInt(Math.random() * 9 + 1);
    var b = parseInt(Math.random() * 10);
    var c = parseInt(Math.random() * 10);
    var d = parseInt(Math.random() * 10);
    var no_repeat = Number.is_not_repeat(a, b, c, d);
    if (no_repeat) {
        return a * 1000 + b * 100 + c * 10 + d;
    }
    return Number.create();
}

Number.is_not_repeat = function (a, b, c, d) {
    return a != b && a != c && a != d && b != c && b != d && c != d;
}