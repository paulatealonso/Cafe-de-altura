const btnAdd1 = document.querySelector("#btnAdd1")
const btnAdd2 = document.querySelector("#btnAdd2")
const btnAdd3 = document.querySelector("#btnAdd3")
const btnAdd4 = document.querySelector("#btnAdd4")
const shopCart = document.querySelector("#shopCart")

let productStorage = []

localStorage.clear()

productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []


product = [
    {
        idProduct: 1,
        name: "Costa Rica Tarrazú",
        price: 9.00,
        quantity: 0
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        quantity: 0
    },
    {
        idProduct: 3,
        name: "Los Amanecer",
        price: 9.00,
        quantity: 0
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        quantity: 0
    }
]

const selectProduct = (button) => {

    const coffe = document.createElement("li")
    shopCart.appendChild(coffe)

    if (button == "btnAdd1") {
        if (productStorage.includes(product[0])) {
            product[0].quantity++
            coffe.innerHTML = `${product[0].quantity}`
            productStorage.push(product[0])
            localStorage.setItem('productStr', JSON.stringify(productStorage))
        } else {
            product[0].quantity++

            coffe.innerHTML = `<h6>${product[0].name}</h6> ${product[0].price}€ <button>+</button>${product[0].quantity}<button>-</button> `
            productStorage.push(product[0])
            localStorage.setItem('productStr', JSON.stringify(productStorage))
        }
    }
    if (button == "btnAdd2") {
        product[1].quantity++
        coffe.innerHTML = `<h6>${product[1].name}</h6> ${product[1].price}€ <button>+</button>${product[1].quantity}<button>-</button> `
        productStorage.push(product[1])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
    }
    if (button == "btnAdd3") {
        product[2].quantity++
        coffe.innerHTML = `<h6>${product[2].name}</h6> ${product[2].price}€ <button>+</button>${product[2].quantity}<button>-</button> `
        productStorage.push(product[2])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
    }
    if (button == "btnAdd4") {
        product[3].quantity++
        coffe.innerHTML = `<h6>${product[3].name}</h6> ${product[3].price}€ <button>+</button>${product[3].quantity}<button>-</button> `
        productStorage.push(product[3])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
    }
}


const buttonBag = document.querySelector("#bagLogo")

buttonBag.onclick = (e) => {
    e.preventDefault()

    if (shopCart.style.display === "none") {
        shopCart.style.display = "block"
    } else {
        shopCart.style.display = "none"
    }
}


