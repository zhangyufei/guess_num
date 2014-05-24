describe("GuessResults", function () {

    beforeEach(function () {
        document.getElementById('guess').disabled = 'disabled';
        document.getElementById('num').disabled = 'disabled';
    });

    afterEach(function () {
        document.getElementById('results').innerHTML = '';
        document.getElementById('guess').disabled = 'disabled';
        document.getElementById('num').disabled = 'disabled';
        localStorage.clear();
    });

    it("should input box and start guess button can be used",function(){
        var start = document.getElementById("num").disabled;
        var guess_num = document.getElementById('guess').disabled;

        expect(start).toBe(true);
        expect(guess_num).toBe(true);
    });

    it("should start play game", function () {
        document.getElementById('start').onclick();
        var start = document.getElementById("num").disabled;
        var guess_num = document.getElementById('guess').disabled;

        expect(start).toBe(false);
        expect(guess_num).toBe(false);
    });
});

describe("GuessResults", function () {
    afterEach(function(){
        document.getElementById('num').value = '';
        document.getElementById('results').innerHTML = '';
    })

    it("should have six opportunities",function(){
        document.getElementById('start').onclick();
        var count = JSON.parse(localStorage.getItem("count"));

        expect(count).toBe(6);
    });

    it ("should reduce chance once again to guess number",function(){
        var count1= JSON.parse(localStorage.getItem("count"));
        document.getElementById('guess').onclick();
        var count2 = JSON.parse(localStorage.getItem("count"));

        expect(count1-count2).toBe(1);
    });



});