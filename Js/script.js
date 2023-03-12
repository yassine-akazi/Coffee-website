const navbar = document.getElementsByClassName("navbar");
const searchform = document.querySelector("search-form");
const cartItem = document. querySelector ('cart-items-container');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');



}

document.querySelector("#search-btn").onclick = () => {
    searchform.classList.toggle('active');

}

document.querySelector ('#cart-btn').onclick = () =>{
cartItem.classList.toggle('active');
}
  

