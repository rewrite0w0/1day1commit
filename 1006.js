//https://paiza.jp/challenges/68/show

function divn(n) {
    let div = [];
    for (i = 1; i < n; i++) {
        if (n % i == 0) {
            div.push(i);
        }
    }
    console.log(div);
    let sum = div.reduce((total, current) => total + current);
    console.log(sum);
    if (sum == n) {
        console.log("perfect");
    } else if (sum == n - 1 || sum == n + 1) {
        console.log("nearly");
    } else {
        console.log("neither");
    }
};