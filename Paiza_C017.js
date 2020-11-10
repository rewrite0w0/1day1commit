// https://paiza.jp/career/challenges/60/page/result
// ハイアンドロー・ カードゲーム 再チャレンジ採点結果
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const split = lines[0].split(" ");
  const slice = lines.slice(2);
  const count = parseInt(lines[1]);
  const x = parseInt(split[0]);
  const y = parseInt(split[1]);
  const result = [];

  const test = slice.forEach(e => {
    const ss = e.split(" ");
    const t = ss[0].split(" ");
    const tt = ss[1].split(" ");
    // console.log(t,tt);

    if (parseInt(t) === x) {
      if (parseInt(tt) > y) {
        result.push("High")
      } else if (parseInt(tt) < y) {
        result.push("Low");
      }
      // console.log(parseInt(t));
    } else if (parseInt(t) > x) {
      // console.log(parseInt(t));
      result.push("Low");
    } else if (parseInt(t) < x) {
      // console.log(parseInt(t));
      result.push("High")
    }

  });
  //  test;

  const answer = result.join("\n");


  console.log(answer);





});