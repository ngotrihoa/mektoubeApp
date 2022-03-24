const strongPassword = (
  password: string,
  minLength = 8,
  numUppercase = 1,
  numLowercase = 1,
  numDigits = 1,
  numSpecial = 1,
  passLength = 16,
) => {
  const ruleMinLength = new RegExp(`^.{${minLength},}$`);
  const ruleUppercaseLetters = new RegExp(
    `^(?=(.*[A-Z]){${numUppercase},}).+$`,
  );
  const ruleLowercaseLetters = new RegExp(
    `^(?=(.*[a-z]){${numLowercase},}).+$`,
  );
  const ruleSpecialLetter = new RegExp(`^(?=(.*[!@#$&*]){${numSpecial},}).+$`);
  const ruleDigits = new RegExp(`^(?=(.*[0-9]){${numDigits},}).+$`);

  let numStrong = 0;
  if (password.match(ruleMinLength)) {
    numStrong = numStrong + 1;
  }
  if (password.match(ruleUppercaseLetters)) {
    numStrong = numStrong + 2;
  }
  if (password.match(ruleLowercaseLetters)) {
    numStrong = numStrong + 1;
  }
  if (password.match(ruleSpecialLetter)) {
    numStrong = numStrong + 3;
  }
  if (password.match(ruleDigits)) {
    numStrong = numStrong + 2;
  }
  if (password.length >= passLength) {
    numStrong = numStrong + 4;
  }

  return {
    numStrong,
    status: numStrong > 7 ? 'Fort' : numStrong > 3 ? 'Mayen' : 'Faible',
  };
};

export {strongPassword};
