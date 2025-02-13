const drink = document.querySelector('.food-drink');
const eat = document.querySelector('.food-eat');
console.log(drink)
const optionEat = document.querySelector('.option-eat');
const optionDrink = document.querySelector('.option-drink');
 console.log(optionEat)
optionDrink.addEventListener('click', () => {
  drink.style = 'display : block';
  eat.style = 'display : none';
  
  optionDrink.classList.add('active');
  optionEat.classList.remove('active');
});

optionEat.addEventListener('click', () => {
  eat.style = 'display : block';
  drink.style = 'display : none';
  optionEat.classList.add('active');
  optionDrink.classList.remove('active');
});

