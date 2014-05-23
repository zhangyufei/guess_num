function GuessResults() {

}

GuessResults.start_play = function () {
    var number = Number.create();
    localStorage.setItem("number", number);
    localStorage.setItem("count", 6);
    document.getElementById('results').disabled = false;
    document.getElementById('num').value = '';
}

GuessResults.start_guess_number = function () {
    var number = localStorage.getItem('number');
    if (!number) {
        document.getElementById('results').disabled = true;
    }
    var count = localStorage.getItem('count');
    count -= 1;
    localStorage.setItem("count", count);
    GuessResults.compare_two_numbers();
    document.getElementById('num').value = '';

}

GuessResults.compare_two_numbers = function () {
    var num2 = document.getElementById('num').value;
    var num1 = localStorage.getItem("number");
    var count = localStorage.getItem('count');
    var results = SimilarityIsWhatType.is_what_type(num1, num2);
    console.log(num1, num2, "num")
    if (results == '4A0B') {
        console.log('游戏成功');
        localStorage.removeItem("number");
    }
    if (count == 0) {
        console.log('游戏失败')
        document.getElementById('results').disabled = true;
        localStorage.removeItem("number");
    }
}
