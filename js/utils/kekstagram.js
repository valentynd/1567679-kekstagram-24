import getRandomIntInclusive from 'getRandomIntInclusive.js';
import {COUNT, ID_ARRAY, IMAGES_ARRAY} from 'randomArray.js';
import {MESSAGE, NAMES} from 'arrays.js';

const createKekstagram = () => ({
  id: ID_ARRAY.shift(),
  url: `photos/${  IMAGES_ARRAY.shift()  }.jpg`,
  description: 'Красивая фотография',
  likes: getRandomIntInclusive(15, 200),
  comments: MESSAGE[getRandomIntInclusive(0, MESSAGE.length-1)],
  name: NAMES[getRandomIntInclusive(0, NAMES.length-1)],
});

const KEKSTAGRAM = Array.from({length: COUNT}, createKekstagram);

export {KEKSTAGRAM};
