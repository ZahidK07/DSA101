function equalVowelsandConsonants(str) {
  let vowels = 0;
  let consnonants = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "a" && char <= "z") {
      if ("aeiou".includes(char)) {
        vowels++;
      } else {
        consnonants++;
      }
    }
  }
  return vowels === consnonants;
};
console.log(equalVowelsandConsonants("india"));
