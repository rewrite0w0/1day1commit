// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
//배열에 배열을 넣어서 길이가1
//배열에 배열

// function likes(names) {
//     // const names = [];
//     const mans = names;
//     // const name = mans.push(names);
//     const name = () => mans.push(names);  
//     name();

//     if (mans.length == 0) {
//         console.log(`no one like this`);
//     } else if (mans.length == 1) {
//         console.log(`${mans[0]} likes this`);
//     } else if (mans.length == 2) {
//         console.log(`${mans[0]} and ${mans[1]} like this`);
//     } else if (mans.length >= 3) {
//         console.log(`${mans[0]}, ${mans[1]} and ${mans.length-2} others like this`);
//     }
//     console.log(mans.length);

// }


// function likes(names) {
//     // const names = [];
//     const mans = names;
//     // const name = mans.push(names);
//     const name = () => mans.push(names);  
// //     mans.reduce((acc, val) => acc.concat(val), []);
//     // name();
//     if (names.length == 0) {
//         console.log(`no one like this`);
// //         console.log(mans);
// //         console.log(mans.length);
// //         console.log(name);
// //         console.log(name.length);
// //         console.log(names);
// //         console.log(names.length);
//     } else if (names.length == 1) {
//         console.log(`${mans[0]} likes this`);
// //         console.log(mans);
// //         console.log(mans.length);
// //         console.log(name);
// //         console.log(name.length);
// //         console.log(names);
// //         console.log(names.length);
//     } else if (names.length == 2) {
//         console.log(`${mans[0]} and ${mans[1]} like this`);
// //         console.log(mans);
// //         console.log(mans.length);
// //         console.log(name);
// //         console.log(name.length);
// //         console.log(names);
// //         console.log(names.length);
//     } else if (names.length >= 3) {
//         console.log(`${mans[0]}, ${mans[1]} and ${mans.length-2} others like this`);
// //         console.log(mans);
// //         console.log(mans.length);
// //         console.log(name);
// //         console.log(name.length);
// //         console.log(names);
// //         console.log(names.length);
//     }
// //     console.log(mans.length);

// }
//함수에는 왜 undefined가 나오나요?




function likes(names) {
    // const mans = names;

    if (names.length == 0) {
        console.log(`no one likes this`);

    } else if (names.length == 1) {
        console.log(`${mans[0]} likes this`);

    } else if (names.length == 2) {
        console.log(`${mans[0]} and ${mans[1]} like this`);

    } else if (names.length >= 3) {
        console.log(`${mans[0]}, ${mans[1]} and ${mans.length-2} others like this`);

    }
    // console.log(mans.length);
    // console.log(typeof mans)
    // console.log(mans);
}