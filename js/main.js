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

const COUNT = 25;

function generate(size) {
  let last = getRandomIntInclusive(1, COUNT)
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(last)
    last += getRandomIntInclusive(0, 1) ? 1 : - 1
  }
  return array
}

increment=0;
randomId = generate(COUNT);
randomUrl = generate(COUNT);

// let randomNoRepeat = function(){
//   var random_start = 1; // От какого генерировать
//   var random_end = COUNT; // До какого генерировать

//   allСycles = 1;

//   var array= []

//   for(i=random_start;i<=random_end;i++){
//     array.push(i)
//   }

//   for(countCycles=1;countCycles<=allСycles;countCycles++){
//       return array.splice(Math.random()*array.length,1)[0];
//   }
// }

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Andrey',
  'Ivan',
  'Don',
  'Entony',
  'Sergey',
  'Yaroslav',
];

const createKekstagram = () => {
  return {
    id: randomId[randomId++],
    url: 'photos/' + randomUrl[randomId++] + '.jpg',
    description: 'Красивая фотография',
    likes: getRandomIntInclusive(15, 200),
    comments: MESSAGE[getRandomIntInclusive(0, MESSAGE.length-1)],
    name: NAMES[getRandomIntInclusive(0, NAMES.length-1)]
  };
};

const kekstagram = Array.from({length: COUNT}, createKekstagram);

// Как избежать повторения без библиотек?