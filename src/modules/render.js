const main = document.querySelector('.main');

const render = (data) => {
  main.innerHTML = '';
  data.forEach((el) => {
    main.innerHTML += (
      `<div class="card">
<img src="${el.strMealThumb}" alt="" class="card__img" />
<div class="card__top">
<p class="card__top--name">${el.strMeal}</p>
<div class="card__top--like"><i class="fa-regular fa-heart"></i> likes</div>
</div>
<div class="card__bottom">
<a href="" class="btn">Comment</a>
<a href="" class="btn">Resevation</a>
</div>
</div>`);
  });
};

export default render;