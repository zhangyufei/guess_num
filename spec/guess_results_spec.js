describe("GuessResults", function () {

    beforeEach(function () {
        document.getElementById('guess').disabled = 'disabled';
        document.getElementById('num').disabled = 'disabled';
    });

    afterEach(function () {
        document.getElementById('results').innerHTML = '';
        localStorage.clear();
    });

    it("should input box and start guess button can be used", function () {
        var start = document.getElementById("num").disabled;
        var guess_num = document.getElementById('guess').disabled;

        expect(start).toBe(true);
        expect(guess_num).toBe(true);
    });

    it("should start play game", function () {
        document.getElementById('start').click();
        var start = document.getElementById("num").disabled;
        var guess_num = document.getElementById('guess').disabled;

        expect(start).toBe(false);
        expect(guess_num).toBe(false);
    });
});

describe("GuessResults", function () {

    beforeEach(function () {
        init();
    })

    afterEach(function () {
        document.getElementById('num').value = '';
        document.getElementById('results').innerHTML = '';
    })

    it("should have six opportunities", function () {
        var count = JSON.parse(localStorage.getItem("count"));

        expect(count).toBe(6);
    });

    it("should reduce chance once again to guess number", function () {
        var count1 = JSON.parse(localStorage.getItem("count"));
        document.getElementById('guess').click();
        var count2 = JSON.parse(localStorage.getItem("count"));

        expect(count1 - count2).toBe(1);
    });

    it("should first time to 4A0B恭喜，游戏成功！", function () {
        var number = JSON.parse(localStorage.getItem("number"));
        document.getElementById('num').value = number;
        document.getElementById('guess').click();
        var show = document.getElementById('results').innerHTML;

        expect(show).toBe("4A0B恭喜，游戏成功！");
    });

    it("should first time to 1A0B and second time to 4A0B恭喜，游戏成功！", function () {
        var number = JSON.parse(localStorage.getItem("number"));
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        var show1 = document.getElementById('results').innerHTML;
        document.getElementById('num').value = number;
        document.getElementById('guess').click();
        var show2 = document.getElementById('results').innerHTML;

        expect(show1).toBe("1A0B");
        expect(show2).toBe("4A0B恭喜，游戏成功！");
    });

    it("should first time to 1A0B and six time to 4A0B恭喜，游戏成功！", function () {
        var number = JSON.parse(localStorage.getItem("number"));
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        var show1 = document.getElementById('results').innerHTML;
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = number;
        document.getElementById('guess').click();
        var show2 = document.getElementById('results').innerHTML;

        expect(show1).toBe("1A0B");
        expect(show2).toBe("4A0B恭喜，游戏成功！");
    });

    it("should ran out of the chances and the results is  1A0B很遗憾，游戏失败！", function () {
        var number = JSON.parse(localStorage.getItem("number"));
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        document.getElementById('num').value = change_number(number);
        document.getElementById('guess').click();
        var show1 = document.getElementById('results').innerHTML;

        expect(show1).toBe("1A0B很遗憾，游戏失败！");
    });


});