export function feladat01(szinek) {
    var combinations = [];
    var tmp= "";
    var allPossibleCombinations = Math.pow(2, szinek.length);

    for (var i = 0; i < allPossibleCombinations ; i++){
        tmp= "";
        for (var j = 0; j < szinek.length; j++) {
            if ((i & Math.pow(2,j))){ 
                tmp += szinek[j];
            }
        }
        if (tmp !== "") {
            combinations.push(tmp);
        }
    }

    console.log("válasz: " + combinations.length);
    console.log(combinations.join("\n"));
}
