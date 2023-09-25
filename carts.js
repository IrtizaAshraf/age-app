const div = document.querySelector('#add-Cart');
const data = localStorage.getItem('cartItem');
const cartArry = JSON.parse(data);
console.log(cartArry);





renderCart()
function renderCart() {
      div.innerHTML='';
    for (let i = 0; i < cartArry.length; i++) {
        div.innerHTML += `<div class="main-mob"><h3>${cartArry[i].brand}</h3>
        <img src="${cartArry[i].img}" class="image">
        <h4>Model:${cartArry[i].model}</h4>
        <h4>Ram:${cartArry[i].ram} Gb</h4>
        <h4>Rom:${cartArry[i].rom}Gb</h4>
        <h4>Camra:${cartArry[i].camera}</h4>
        <h4>Price: ${cartArry[i].price}</h4>
        <h4>TotlePrice: ${cartArry[i].price *cartArry[i].quantity}</h4>
        <button class="increase" onclick="increaseQuantity(${i})">+</button>
        <span class="quntity">${cartArry[i].quantity}</span>
        <button class="decrease" onclick="decreaseQuantity(${i})">-</button> <br/>
        <button  class="delete" onclick="deleteItem(${i})">Delete<i class="fa-solid fa-trash-can fa-fade"></i></button>
        <button class="order">Order Now<i class="fa-brands fa-opencart fa-beat-fade"></i></button>
        </div>`
    }
}



function increaseQuantity (index){
    div.innerHTML = ''
    console.log(cartArry[index])
    cartArry[index].quantity += 1
    renderCart()
}
function decreaseQuantity (index){
    div.innerHTML = ''
    console.log(cartArry[index])
    cartArry[index].quantity -= 1
    renderCart()
    if(cartArry[index].quantity === 0){
        div.innerHTML = ''
        cartArry.splice(index , 1)
        renderCart()
    }
}


function deleteItem(index){
    div.innerHTML = '';
    cartArry.splice(index , 1);
    renderCart()
}