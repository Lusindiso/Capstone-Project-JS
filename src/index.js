import './styles/main.scss';
import 'regenerator-runtime/runtime.js';
import render from './modules/render.js';
import changeHandler from './modules/changeHandler.js';
import getLikes from './modules/getLikes.js';
import eventHandler from './modules/eventHandler.js';

const getData = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef',
  );
  const data = await res.json();
  const likes = await getLikes();
  render(data.meals, likes);
};

getData();
changeHandler();
eventHandler();