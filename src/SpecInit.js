function init() {
    document.getElementById('start').click();
}

function change_number(number) {
    var a = parseInt(number / 1000);
    var b = parseInt((number - a * 1000) / 100);
    var c = parseInt((number - a * 1000 - b * 100) / 10);
    var d = number % 10;
    for (var i = 0; i < 9; i += 1) {
        if (i != a && i != b && i != c && i != d) {
            return a * 1000 + i * 100 + i * 10 + i;
        }
    }
}
