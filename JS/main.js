const btnAdd1 = document.querySelector("#btnAdd1")
const btnAdd2 = document.querySelector("#btnAdd2")
const btnAdd3 = document.querySelector("#btnAdd3")
const btnAdd4 = document.querySelector("#btnAdd4")
const shopCart = document.querySelector("#shopCart")
const cart2 = document.querySelector("#cart2")
const btnDeletes = document.querySelector("#btnDeletes")


let divisa = "€";

let productStorage = []

localStorage.clear()

productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []


product = [
    {
        idProduct: 1,
        name: "Costa Rica Tarrazú",
        price: 9.00,
        quantity: 0,
        img: `<img src="./assets/saquito1.png" alt="Saco">`
    },
    {
        idProduct: 2,
        name: "Colombia Los Naranjos",
        price: 9.00,
        quantity: 0,
        img: `<img src="./assets/saquito2.png" alt="Icon Transporter">`
    },
    {
        idProduct: 3,
        name: "Los Amanecer",
        price: 9.00,
        quantity: 0,
        img: `<img src="./assets/saquito3.png" alt="Present Icon">`
    },
    {
        idProduct: 4,
        name: "Etiopía Yrgacheff",
        price: 9.00,
        quantity: 0,
        img: `<img src="./assets/saquito4.png" alt="List Icon">`
    }
]



// EVITAR PRODUCTOS DUPLICADOS

function duplicatedNone1() {
    shopCart.innerHTML = ""

    let duplicatedNone = productStorage.filter((item, index) => {
        return productStorage.indexOf(item) === index;
    })

    duplicatedNone.forEach(e => {
        if (e.quantity === 0) {
            duplicatedNone.splice(duplicatedNone.indexOf(e), 1)
        }
    })

    let priceTotal = 0;
    let totalProducts = 0;

    duplicatedNone.forEach(element => {
        shopCart.innerHTML += `<div class="wrapper">
        
        <div class = "borderPrd">
        ${element.img} 
        <h6>${element.name}</h6>
        </div>
        
        <div class= "itemPrce">
         
        <p class= "textJs">Unidad: ${element.quantity}</p>
        <p>Precio total: ${element.quantity * element.price}${divisa}</p>
        
        </div>

        <div>
        ${element.idProduct} <button>+</button>${element.quantity}<button>-</button>
        </div>

        <button id= "removStyle" class = "btnStyle" onclick="deleteItem(this)">X</button>

        </div>`
        priceTotal += (element.quantity * element.price)
        totalProducts += element.quantity
    })
    /*shopCart.innerHTML += `<p>Mi cesta, ${totalProducts} artículos</p>`
     shopCart.innerHTML += `<p>Total productos: ${priceTotal} ${divisa}</p>`
    
    if (shopCart.length < 0) {
        shopCart.innerHTML = ""
        productStorage = []
    }*/


    productStorage = duplicatedNone
    localStorage.setItem('productStr', JSON.stringify(productStorage))
}




// AGREGAR PRODUCTOS A LA CESTA

const selectProduct = (button) => {

    if (button == "btnAdd1") {
        product[0].quantity++
        productStorage.push(product[0])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
        btnDeletes.style.display = "block"

    }
    if (button == "btnAdd2") {
        product[1].quantity++
        productStorage.push(product[1])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
        btnDeletes.style.display = "block"
    }
    if (button == "btnAdd3") {
        product[2].quantity++
        productStorage.push(product[2])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
        btnDeletes.style.display = "block"
    }
    if (button == "btnAdd4") {
        product[3].quantity++
        productStorage.push(product[3])
        localStorage.setItem('productStr', JSON.stringify(productStorage))
        btnDeletes.style.display = "block"
    }
    duplicatedNone1()
}



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
        e.quantity = 0
    })

    duplicatedNone1()
    btnDeletes.style.display = "none"
    shopCart.innerHTML = "<p>Su cesta está vacía</p>"
}



// // RETIRAR PRODUCTO 

const deleteItem = (btn) => {
    let removeBtn = btn.parentNode
    const index = productStorage.indexOf(removeBtn)
    productStorage.splice(index, 1)
    localStorage.setItem('productStr', JSON.stringify(productStorage))
    duplicatedNone1()
}















//ACORDEON

const buttonDropDown1 = document.querySelector(".dropDownone")
const text1 = document.querySelector(".textFirst")

buttonDropDown1.onclick = () => {

    if (text1.style.display === "block") {
        text1.style.display = "none "
    } else {
        text1.style.display = "block"
    }

}

const buttonDropDown2 = document.querySelector(".dropDownsecond")
const text2 = document.querySelector(".textSecond")

buttonDropDown2.onclick = () => {

    if (text2.style.display === "none") {
        text2.style.display = "block"
    } else {
        text2.style.display = "none"
    }

}

const buttonDropDown3 = document.querySelector(".dropDownThird")
const text3 = document.querySelector(".textthird")

buttonDropDown3.onclick = () => {

    if (text3.style.display === "none") {
        text3.style.display = "block"
    } else {
        text3.style.display = "none"
    }

}



















