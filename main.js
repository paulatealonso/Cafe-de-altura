const buttonBag = document.querySelector("#bagLogo")
const btnAdd1 = document.querySelector("#btnAdd1")
const btnAdd2 = document.querySelector("#btnAdd2")
const btnAdd3 = document.querySelector("#btnAdd3")
const btnAdd4 = document.querySelector("#btnAdd4")
const shopCart = document.querySelector("#shopCart")
let divisa = "€";

const productStr = [{
    name: "Costa Rica Tarrazú",
    price: 9.00,
},
{
    name: "Colombia Los Naranjos",
    price: 9.00,
},
{
    name: "Los Amanecer",
    price: 9.00,
},
{
    name: "Etiopía Yrgacheff",
    price: 9.00,
}
]

let productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []


const selectProduct = (button) => {

    const coffe = document.createElement("li")
    const price = 9.00;

    if (button == "btnAdd1") {
        console.log("PIRAÑA1");
        coffe.innerHTML = `<h5>Costa Rica Tarrazú</h5> ${price}`
        productStorage.push(productStr[0])
        localStorage.setItem('productStr'), JSON.stringify(productStorage)
    }
    if (button == "btnAdd2") {
        console.log("PIRAÑA2");
        coffe.innerHTML = `<h5>Colombia Los Naranjos</h5> ${price}`
        productStorage.push(productStr[1])
        localStorage.setItem('productStr'), JSON.stringify(productStorage)
    }
    if (button == "btnAdd3") {
        console.log("PIRAÑA3");
        coffe.innerHTML = `<h5>Los Amanecer</h5> ${price}`
        productStorage.push(productStr[2])
        localStorage.setItem('productStr'), JSON.stringify(productStorage)
    }
    if (button == "btnAdd4") {
        console.log("PIRAÑA4");
        coffe.innerHTML = `<h5>Etiopía Yrgacheff</h5> ${price}`
        productStorage.push(productStr[3])
        localStorage.setItem('productStr'), JSON.stringify(productStorage)
    }
    shopCart.appendChild(coffe)
    console.log(coffe, shop);
}