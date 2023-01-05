productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
console.log(productStorage);
const shopCart = document.querySelector("#shopCart")
const cart2 = document.querySelector("#cart2")

function noDuplicate() {
    let priceTotal = 0
    let totalProducts = 0

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
        // <div class="wrapper">

        // <div class = "borderPrd">
        // ${element.img} 
        // <h6>${element.name}</h6>
        // </div>

        // <div class= "itemPrce">

        // <p class= "textJs">Unidad: ${element.quantity}</p>
        // <p>Precio total: ${element.quantity * element.price}${divisa}</p>

        // </div>

        // <div>
        // ${element.idProduct} <button onclick ="plus(this)">+</button>${element.quantity}<button onclick = "lessProduct(this)">-</button>
        // <button id= "removStyle" class = "btnStyle" onclick="deleteItem(this)">X</button>
        // </div>


        // </div>

        // priceTotal += (element.quantity * element.price)
        // totalProducts += element.quantity
    })
    localStorage.setItem('productStr', JSON.stringify(productStorage))

}

noDuplicate()
// // EVITAR PRODUCTOS DUPLICADOS

// function duplicatedNone1() {
//     shopCart.innerHTML = ""

//     let duplicatedNone = productStorage.filter((item, index) => {
//         return productStorage.indexOf(item) === index;
//     })

//     duplicatedNone.forEach(e => {
//         if (e.quantity === 0) {
//             duplicatedNone.splice(duplicatedNone.indexOf(e), 1)
//         }
//     })

//     let priceTotal = 0;
//     let totalProducts = 0;

//     duplicatedNone.forEach(element => {
//         shopCart.innerHTML += `<div class="wrapper">

//         <div class = "borderPrd">
//         ${element.img} 
//         <h6>${element.name}</h6>
//         </div>

//         <div class= "itemPrce">

//         <p class= "textJs">Unidad: ${element.quantity}</p>
//         <p>Precio total: ${element.quantity * element.price}${divisa}</p>

//         </div>

//         <div>
//         ${element.idProduct} <button onclick ="plus(this)">+</button>${element.quantity}<button onclick = "lessProduct(this)">-</button>
//         <button id= "removStyle" class = "btnStyle" onclick="deleteItem(this)">X</button>
//         </div>


//         </div>`
//         priceTotal += (element.quantity * element.price)
//         totalProducts += element.quantity
//     })
//     /*shopCart.innerHTML += `<p>Mi cesta, ${totalProducts} artículos</p>`
//      shopCart.innerHTML += `<p>Total productos: ${priceTotal} ${divisa}</p>`

//     if (shopCart.length < 0) {
//         shopCart.innerHTML = ""
//         productStorage = []
//     }*/
//     if (duplicatedNone.length == 0) {
//         btnDeletes.style.display = "none"
//         shopCart.innerHTML = "<p>Su cesta está vacía</p>"
//     }

//     productStorage = duplicatedNone
//     localStorage.setItem('productStr', JSON.stringify(productStorage))
// }



// const btnAdd1 = document.querySelector("#btnAdd1")
// const btnAdd2 = document.querySelector("#btnAdd2")
// const btnAdd3 = document.querySelector("#btnAdd3")
// const btnAdd4 = document.querySelector("#btnAdd4")

// const btnDeletes = document.querySelector("#btnDeletes")


// let divisa = "€";

// let productStorage = []

// localStorage.clear()


// product = [
//     {
//         idProduct: 1,
//         name: "Costa Rica Tarrazú",
//         price: 9.00,
//         quantity: 0,
//         img: `<img src="./assets/saquito1.png" alt="Saco">`
//     },
//     {
//         idProduct: 2,
//         name: "Colombia Los Naranjos",
//         price: 9.00,
//         quantity: 0,
//         img: `<img src="./assets/saquito2.png" alt="Icon Transporter">`
//     },
//     {
//         idProduct: 3,
//         name: "Los Amanecer",
//         price: 9.00,
//         quantity: 0,
//         img: `<img src="./assets/saquito3.png" alt="Present Icon">`
//     },
//     {
//         idProduct: 4,
//         name: "Etiopía Yrgacheff",
//         price: 9.00,
//         quantity: 0,
//         img: `<img src="./assets/saquito4.png" alt="List Icon">`
//     }
// ]








// // AGREGAR PRODUCTOS A LA CESTA

// const selectProduct = (button) => {

//     if (button == "btnAdd1") {
//         product[0].quantity++
//         productStorage.push(product[0])
//         localStorage.setItem('productStr', JSON.stringify(productStorage))
//         btnDeletes.style.display = "block"

//     }
//     if (button == "btnAdd2") {
//         product[1].quantity++
//         productStorage.push(product[1])
//         localStorage.setItem('productStr', JSON.stringify(productStorage))
//         btnDeletes.style.display = "block"
//     }
//     if (button == "btnAdd3") {
//         product[2].quantity++
//         productStorage.push(product[2])
//         localStorage.setItem('productStr', JSON.stringify(productStorage))
//         btnDeletes.style.display = "block"
//     }
//     if (button == "btnAdd4") {
//         product[3].quantity++
//         productStorage.push(product[3])
//         localStorage.setItem('productStr', JSON.stringify(productStorage))
//         btnDeletes.style.display = "block"
//     }
//     duplicatedNone1()
// }



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



// // // BOTÓN VACIAR

// btnDeletes.onclick = (e) => {
//     e.preventDefault()

//     productStorage.forEach(e => {
//         e.quantity = 0
//     })

//     duplicatedNone1()
//     btnDeletes.style.display = "none"
//     shopCart.innerHTML = "<p>Su cesta está vacía</p>"
// }



// // // RETIRAR PRODUCTO 

// const deleteItem = (btn) => {
//     let removeBtn = btn.parentNode.textContent
//     let resDel = removeBtn
//     resDel = [...resDel]


//     productStorage.forEach(e => {

//         if (resDel[9] == e.idProduct) {
//             productStorage.splice(productStorage.indexOf(e), 1)
//             e.quantity = 0
//         }
//     })

//     resDel = []
//     duplicatedNone1()
// }



// //BTN RESTAR

// const lessProduct = (button) => {

//     let btnLess = button.parentNode.textContent
//     let result = btnLess
//     result = [...result]

//     if (result[9] == '1') {
//         if (product[0].quantity === 0) {
//             return
//         }
//         product[0].quantity--
//     }
//     if (result[9] == '2') {
//         if (product[1].quantity === 0) {
//             return
//         }
//         product[1].quantity--
//     }
//     if (result[9] == '3') {
//         if (product[2].quantity === 0) {
//             return
//         }
//         product[2].quantity--
//     }
//     if (result[9] == '4') {
//         if (product[3].quantity === 0) {
//             return
//         }
//         product[3].quantity--
//     }

//     duplicatedNone1()
// }

// const plus = (button) => {

//     let plusBtn = button.parentNode.textContent
//     let plusIndex = plusBtn
//     plusIndex = [...plusIndex]

//     if (plusIndex[9] == '1') {
//         product[0].quantity++
//     }
//     if (plusIndex[9] == '2') {
//         product[1].quantity++
//     }
//     if (plusIndex[9] == '3') {
//         product[2].quantity++
//     }
//     if (plusIndex[9] == '4') {
//         product[3].quantity++
//     }
//     duplicatedNone1()
// }


























