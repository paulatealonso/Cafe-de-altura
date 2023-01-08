productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
pricesStorage = localStorage.getItem('pricesStr') ? JSON.parse(localStorage.getItem('pricesStr')) : []

const sectionCart = document.getElementById('sectionCart')
const free = document.getElementById("free")
const paid = document.getElementById("paid")


function cart(text) {

    sectionCart.innerText = ``



    box2 = document.createElement("div")
    box2.setAttribute('id', 'box2')


    let totalPrice = 0

    productStorage.forEach(ele => {
        totalPrice += ele.quantity * ele.price
    })

    if (pricesStorage[pricesStorage.length -1] == totalPrice) {
        text = "GRATIS"
    } else {
        text = "9,00€"
    }

    
    box2.innerHTML = `
    <h4>Total del carrito</h4>

    <div class="fi">
    <p class="sub">SUBTOTAL</p>
    <p class ="pr">${totalPrice}€</p>
    </div>

    <div class="fi">
    <p class="sub">ENVÍO</p>
    <p class ="pr">${text}</p>
    </div>

    <div class="fi" id="fi1">
    <p class ="pr">TOTAL</p>
    <p class ="pr">${pricesStorage[pricesStorage.length -1]}</p>
    </div>

    <div class="fi">
    <button id="checkout">Ir al checkout</button>
    <button id="contin">Seguir comprando</button>
    </div>


    `

    sectionCart.appendChild(box2)
    localStorage.setItem('pricesStr', JSON.stringify(pricesStorage))
}


window.addEventListener("load", cart)

