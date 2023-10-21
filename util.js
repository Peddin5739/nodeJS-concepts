function addNumbers(a, b) {
  return a + b;
}

module.exports.a = 100;
module.exports.b = "hello world";
module.exports.addition = () => {
  console.log("addition");
};
module.exports.addnums = addNumbers;
