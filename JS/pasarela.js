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
    <button id="checkout">Pagar y realizar pedido</button>
    </div>
    `

    sectionCart.appendChild(box2)
    localStorage.setItem('pricesStr', JSON.stringify(pricesStorage))
}


window.addEventListener("load", cart)



// //CHECKBOX

const titular = document.getElementById("titular")
const target = document.getElementById("target")
const cvc = document.getElementById("cvc")
const date = document.getElementById("date")
const cvc2 = document.getElementById("cvc2")

const inputRadio = document.getElementById("inputRadio")

// ADDRESS


const name = document.getElementById("name")
const lastNames = document.getElementById("lastNames")
const phone = document.getElementById("phone2")
const email = document.getElementById("email")
const country = document.getElementById("country")
const cp = document.getElementById("cp")
const population = document.getElementById("population")
const street = document.getElementById("street")
const numbers = document.getElementById("numbers")
const door = document.getElementById("door")
const apartment = document.getElementById("apartment")

const checkout = document.getElementById("checkout")


