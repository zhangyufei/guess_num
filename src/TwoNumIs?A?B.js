function SimilarityIsWhatType() {

}

SimilarityIsWhatType.is_what_type = function (num1, num2) {
    var four_num1 = SimilarityIsWhatType.get_a_single_num(num1);
    var four_num2 = SimilarityIsWhatType.get_a_single_num(num2);
}

SimilarityIsWhatType.get_a_single_num = function (num) {
    var a = parseInt(num / 1000);
    var b = parseInt((num - a * 1000) / 100);
    var c = parseInt((num - a * 1000 - b * 100) / 10);
    var d = num % 10;
    var four_number = {1: a, 2: b, 3: c, 4: d};

    return four_number;
}