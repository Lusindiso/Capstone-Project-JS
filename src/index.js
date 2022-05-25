import './styles/main.scss';
import 'regenerator-runtime/runtime.js';
import render from './modules/render.js';
import changeHandler from './modules/changeHandler.js';

const getData = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef',
  );
  const data = await res.json();
  render(data.meals);
};

getData();
changeHandler()
