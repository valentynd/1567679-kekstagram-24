// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(9, 101);

function checkLenghtString(strFirst, maxLenght){
  const stringLength=strFirst.length;
  return stringLength<=maxLenght;
}
checkLenghtString('Hellow', 10);
