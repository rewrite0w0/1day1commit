// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// function getCount(str) {
//     // var vowelsCount = 0;
//     const vowels = ["a","i","u","e","o"];
//     const count = []

//     const array = str.toLowerCase().split("").push(str);

//     let counter = str.match(/[aeiou]/gi).length;
//     // enter your majic here
//     console.log(counter)
//     // return vowelsCount;
//   }

// string->array->검출->개수세기로 하여 하였으나
// string 자체에서 찾을 수 있는 match가 있음.
// 그러나 'my pyx'에서 검출이 안되므로 다시 생각하자.
// match하면 string이 array가 된다!

function getCount(str) {
  
  
  // enter your majic here
  let array = str.match(/[aeiou]/gi);
  let result = array==null?array=0:array.length;


  
  return result;
}

//const로 하면 안되는데 let으로 하면 된다.
//let과 const에 대해 공부를 더 해야한다.
