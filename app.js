/* დღევანდელი დავალება ჯს- 

🆘 შევქმნათ ფუნქცია რომელიც პარამეტრად მიიღებს სტრინგს, ფუნქციამ უნდა დავიბრუნოს უკუღმად ეს სტრინგი.
 თუ ეს სტრინგი პალინფრომია ანუ როგორც წინიდან ისე უკნიდან ერთნაირად იკითხება,
  უნდა დაგვიბრუნდეს ესე: ეს სტრინგი პალინფრომია და თუ არ არის შესაბამისად, ეს სტრინგი არ არის პალინდრომი */

// I option:

function isPalindrom(string) {
  const letterArr = [];
  const reverseArrOfString = [];

  // Step 1:------ სტრინგის მასივად გადაკეთება ------
  for (let letter of string) {
    letterArr.push(letter);
  }
  // Step 2: ----- მიღებული ასოების მასივის შეტრიალება ----------
  while (letterArr.length > 0) {
    const eachtLetter = letterArr.pop();
    reverseArrOfString.push(eachtLetter);
  }
  // Step 3: ---- შეტრიალებული მასივის სტრინგად გადაქცევა -------
  let reverseString = "";
  for (let letter of reverseArrOfString) {
    reverseString += letter;
  }
  // --------- შემოწმება --------------
  if (reverseString === string) {
    return `${string} is palindrom!`;
  }
  return `${string} in not palindrom!`;
}

console.log(isPalindrom("madam"));
console.log(isPalindrom("house"));
console.log(isPalindrom("radar"));

// II option:

// function isPalindrom(string) {
//   let result = string.split("").reverse().join("");
//   if (result === string) {
//     return `${string} is palindrome!`;
//   }
//   return `${string} is not palindrome!`;
// }
// console.log(isPalindrom("madam"));
// console.log(isPalindrom("house"));
// console.log(isPalindrom("radar"));
