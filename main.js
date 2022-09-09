const cart = document.querySelector(".cart");
const cardProducts = document.querySelector(".products");
const colorFilter = document.querySelectorAll(".filter")
const cartCont = document.getElementById("cart-cont")
const cartMenu = document.querySelector(".cart-menu")
const categories = document.querySelector(".categorias__cards__container")
const categoriesList = document.querySelectorAll('.categorias__cards');

// let productos = JSON.parse(localStorage.getItem('productos')) || [];
// const saveLocalStorageProductos = Products => {
//     localStorage.setItem('productos',JSON.stringify(Products));
// };

const renderProducto =  producto => {
    const {
        id,
        name,
        description,
        price,
        category,
        cardImg,
    } = producto;
    return `
    <div class="card-product">
    <img src= "${cardImg}"class="product-image"alt="product-image"/>
        <div class="info-product">
            <h4>${name}</h4>
            <p>${description}</p>
        </div>
        <div class="add-product">
            <p class="product-price">$${price}</p>
            <button class="btn-product">Agregar</button>
        </div>
    </div>
    `;
};

const changeState = (e) => {
    let stateColor = e.target.querySelector(".filter")
    if(filterProducts){
        stateColor.classList.add("show") 
        return; 
    }
   stateColor.classList.remove("show")
}
const filterProducts  = (e)=> {
    const categorySelected = e.target.dataset.category;
    const categoryArray = [];
    productsInfo.forEach(product =>{
        if(categorySelected===product.category){ 
            changeState(e);
           categoryArray.push(product)
           return; 
        }
    })
    cardProducts.innerHTML="";
    renderProductos(categoryArray);
}
const renderProductos = (productsInfo) => {
    cardProducts.innerHTML = productsInfo.map(renderProducto).join('');
};
function init() {
    categories.addEventListener("click",filterProducts)
    // saveLocalStorageProductos(productsInfo);
    renderProductos(productsInfo);
}
init();