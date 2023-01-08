productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
console.log(productStorage);
const shopCart = document.querySelector("#shopCart")
const cart2 = document.querySelector("#cart2")
const goBag = document.getElementById("goBag")

function noDuplicate() {

    shopCart.innerHTML = ``

    productStorage.forEach(element => {

        let wrapper = document.createElement(`div`)
        wrapper.setAttribute(`class`, `wrapper`)

        console.log(element);
        wrapper.innerHTML = `
        <div class = "borderPrd">
        <img src="${element.img_url}" alt="">
        <h6>${element.brand}</h6>
        </div>
        
        <div class= "itemPrce">
         
        <p class= "textJs">Unidad: ${element.quantity}</p>
        <p>Precio total: ${element.quantity * element.price}</p>
        
        </div>

        <div>
        <button onclick ="plus(this)">+</button>${element.quantity}<button onclick = "lessProduct(this)">-</button>
        <button id= "removStyle" class = "btnStyle" onclick="deleteItem(this)">X</button>
        </div>
        `
        shopCart.appendChild(wrapper)

    })

    localStorage.setItem('productStr', JSON.stringify(productStorage))

}

noDuplicate()




// ABRIR Y CERRAR CESTA

const buttonBag = document.querySelector("#bagLogo")

buttonBag.onclick = (e) => {
    e.preventDefault()

    if (cart2.style.display === "none") {
        cart2.style.display = "block"
    } else {
        cart2.style.display = "none"
    }
}



// // BOTÓN VACIAR

btnDeletes.onclick = (e) => {
    e.preventDefault()
    

    productStorage.forEach(e => {
        productStorage = []
    })

    noDuplicate()
    btnDeletes.style.display = "none"
    goBag.style.display = "none"
    shopCart.innerHTML = "<p>Su cesta está vacía</p>"
}



// // RETIRAR PRODUCTO 

const deleteItem = (btn) => {
    
    btn = btn.parentNode.parentNode.firstElementChild.textContent
    console.log(btn);


    productStorage.forEach(e => {

        if (btn.includes(e.brand)) {
            productStorage.splice(productStorage.indexOf(e), 1)
            e.quantity = 1
        }
    })

    noDuplicate()
}



//BTN RESTAR

const lessProduct = (btn) => {

    btn = btn.parentNode.parentNode.firstElementChild.textContent
    
    productStorage.forEach (e => {
        if (btn.includes(e.brand)) {
            productStorage[productStorage.indexOf(e)].quantity -= 1
        }
        if (e.quantity === 0) {
            productStorage.splice(productStorage.indexOf(e), 1)
        }
    })

    noDuplicate()

}

const plus = (button) => {

    button = button.parentNode.parentNode.firstElementChild.textContent

    productStorage.forEach (e => {
        if (button.includes(e.brand)) {
            productStorage[productStorage.indexOf(e)].quantity += 1
        }
    })


    noDuplicate()
}


























