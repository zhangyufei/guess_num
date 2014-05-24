function GuessResults() {

}

GuessResults.start_play = function () {
    var number = Number.create();
    localStorage.setItem("number", number);
    localStorage.setItem("count", 6);
    document.getElementById('guess').disabled = false;
    document.getElementById('num').disabled = false;
    document.getElementById('results').innerHTML = '';
}

GuessResults.start_guess_number = function () {
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
        document.getElementById('results').innerHTML = results + "恭喜，游戏成功！";
        document.getElementById('guess').disabled = true;
        document.getElementById('num').disabled = true;
    }
    if (count == 0 && results != '4A0B') {
        document.getElementById('results').innerHTML = results + "很遗憾，游戏失败！";
        document.getElementById('guess').disabled = true;
        document.getElementById('num').disabled = true;
    }
    if (results != '4A0B' && count > 0) {
        document.getElementById('results').innerHTML = results;
    }
}

