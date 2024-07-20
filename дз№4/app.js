function hideLastTwoDigits() {
  const phoneNumber = prompt("Введите номер телефона:");

  if (typeof phoneNumber !== 'string') {
    console.error("Неправильный номер");
    return;
  }

  if (phoneNumber.length < 13) {
    console.error('Номер телефона должен содержать код страны и 9 чисел');
    return;
  }

  const maskedPhoneNumber = phoneNumber.substring(0, phoneNumber.length - 2) + '*';
  console.log(maskedPhoneNumber);
}

hideLastTwoDigits();


function myReverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(myReverse("123456789"));
