import getLikes from './getLikes.js';
import render from './render.js';

const category = document.getElementById('category');

const changeHandler = () => {
  category.onchange = async (e) => {
    const cat = e.target.value;
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`,
    );
    const data = await res.json();
    const likes = await getLikes();
    render(data.meals, likes);
  };
};

export default changeHandler;
