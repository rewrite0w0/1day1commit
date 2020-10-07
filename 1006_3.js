//https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
    const st = [...s];
    const vowel = [];
    const other = [];
    
    st.forEach(words=>{
        if(words=='a'||words=='i'||words=='u'||words=='e'||words=='o'){
            vowel.push(words);
        } else {
            other.push(words);
        }

    })

    const answer = [...vowel,...other];
    answer.map(finalAnswer=>{
        console.log(finalAnswer);
    })


}
