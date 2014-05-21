describe("SimilarityIsWhatType", function () {
    beforeEach(function () {

    });

    it("should be compare 1234 and 5678 to 0A0B ", function () {
        var Type = SimilarityIsWhatType.is_what_type(1234, 5678);

        expect(Type).toBe("0A4B");
    });

    it("should be compare 1234 and 1234 to 4A0B ", function () {
        var Type = SimilarityIsWhatType.is_what_type(1234, 1234);

        expect(Type).toBe("4A0B");
    });

    it("should be compare 1234 and 4321 to 0A4B ", function () {
        var Type = SimilarityIsWhatType.is_what_type(1234, 5678);

        expect(Type).toBe("0A4B");
    });

    it("should be compare 1234 and 1243 to 2A2B ", function () {
        var Type = SimilarityIsWhatType.is_what_type(1234, 5678);

        expect(Type).toBe("2A2B");
    });

});