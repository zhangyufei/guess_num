describe("GuessResults", function () {

    beforeEach(function () {
        document.getElementById('guess').disabled = true;
        document.getElementById('num').disabled = true;
    });

    afterEach(function () {
        localStorage.clear();
    })

    it("should start play game", function () {
        document.getElementById('start').click();
        var start = document.getElementById("num").disabled;
        var guess_num = document.getElementById('guess').disabled;

        expect(start).toBe(false);
        expect(guess_num).toBe(false);
    });
})

describe("GuessResults", function () {

});