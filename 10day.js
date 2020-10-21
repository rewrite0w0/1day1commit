function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    return console.log(s);
  }
}