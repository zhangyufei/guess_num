function SimilarityIsWhatType() {

}

SimilarityIsWhatType.is_what_type = function (num1, num2) {
    var four_num1 = SimilarityIsWhatType.get_a_single_num(num1);
    var four_num2 = SimilarityIsWhatType.get_a_single_num(num2);
    var a=0;
    var b=0;
    for(var i=0;i<4;i+=1){
       for(var j=0;j<4;j+=1){
           if(four_num1[i] == four_num2[j] && i==j){
                a+=1;

           }
           if(four_num1[i]==four_num2[j]&&i!=j){
                b+=1;
           }
       }
    }
    return a+'A'+b+'B';

}

SimilarityIsWhatType.get_a_single_num = function (num) {
    var a = parseInt(num / 1000);
    var b = parseInt((num - a * 1000) / 100);
    var c = parseInt((num - a * 1000 - b * 100) / 10);
    var d = num % 10;
    var four_number = [];
    four_number.push(a,b,c,d);
    return four_number;
}

