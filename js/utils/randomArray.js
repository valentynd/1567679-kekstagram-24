const COUNT = 25;

function randomArray(count, min, max) {
  if (count > (max - min)) {return;}
  const ARR = [];

  while (count) {
    const TEMP = Math.floor(Math.random() * (max - min) + min);
    if (ARR.indexOf(TEMP) === -1) {
      ARR.push(TEMP);
      count--;
    }
  }

  return ARR;
}

const ID_ARRAY = randomArray(COUNT, 1, COUNT+1);
const IMAGES_ARRAY = randomArray(COUNT, 1, COUNT+1);

export {COUNT, ID_ARRAY, IMAGES_ARRAY};
