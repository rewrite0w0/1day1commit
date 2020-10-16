// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript


function DNAStrand(dna) {
    //your code here
    //A->T T->A G->C C->G
    let array = [];
    const split = dna.split("");
    for (let i = 0; i <= split.length; i++) {
        if (split[i] == "A") {
            array.push("T")
        } else if (split[i] == "T") {
            array.push("A")
        } else if (split[i] == "G") {
            array.push("C")
        } else if (split[i] == "C") {
            array.push("G")
        }
    }
    const change = array.toString()
    const result = change.replace(/\,/g, '');
    return result
}
