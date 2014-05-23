describe("Number", function () {


    beforeEach(function () {

    });

    it("should be number", function () {
        var num = Number.create();

        expect(isNaN(num)).toBe(false);
    });

    it("should be four-digit", function () {
        var num = Number.create();

        expect(num >= 1000 && num <= 9999).toBe(true)
    });

    it("shouldn't be repeated ", function () {
        var num = Number.create();
        var a = parseInt(num / 1000);
        var b = parseInt((num - a * 1000) / 100);
        var c = parseInt((num - a * 1000 - b * 100) / 10);
        var d = num % 10;

        expect(a != b && a != c && a != d && b != c && b != d && c != d).toBe(true);
    });

    it("should be randomly generated", function () {
        var nums = [];
        for (var i = 0; i < 1000; i += 1) {
            var num = Number.create();
            nums.push(num);
        }
        var repeat = _.filter(nums, function (num) {
            return num == nums[0];
        });
        var probability = repeat.length / 1000;

        expect(probability >= 0.001 && probability < 0.007).toBe(true);
    });

});