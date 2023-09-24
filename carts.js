const data = localStorage.getItem('cartItem');
const cartArry = JSON.parse(data);
console.log(cartArry);

const div = document.querySelector('#addcart');


function renderCart() {
    for (let i = 0; i < cartArry.length; i++) {
        div.innerHTML += `
        <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl mt-5">
                <p><span class="font-bold text-lg">brand:</span> ${cartArry[i].brand}</p>
                <p><span class="font-bold text-lg">Model:</span> ${cartArry[i].model}</p>
                <p><span class="font-bold text-lg">Quantity:</span> ${cartArry[i].quantity}</p>
                <p><span class="font-bold text-lg">Price:</span> ${cartArry[i].price}</p>
                <p><span class="font-bold text-lg">Total Price:</span> ${cartArry[i].price * cartArry[i].quantity}</p>
                <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="increaseQuantity(${i})">+</button>
                <span>${cartArry[i].quantity}</span>
                <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="decreaseQuantity(${i})">-</button> <br/>
                <button  class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="deleteItem(${i})">Delete</button>
        </div>
        `
    }
}

renderCart()

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
        cartArr.splice(index , 1)
        renderCart()
    }
}


function deleteItem(index){
    div.innerHTML = '';
    cartArry.splice(index , 1);
    renderCart()
}