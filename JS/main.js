productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
const cardBox = document.getElementById('apProd')

axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {

        let cafe = response.data.products


        cafe = cafe.slice(0, 4)

        

        cafe.forEach(prod => {

            let cafeBox = document.createElement('div')
            cafeBox.setAttribute('class', 'col-3 newsBox')
            cardBox.appendChild(cafeBox)

            let news = document.createElement('div')
            cafeBox.setAttribute('class', 'news')
            cafeBox.appendChild(news)

            let imgCard = document.createElement('img')
            imgCard.setAttribute('src', `${prod.img_url}`)
            news.appendChild(imgCard)

            let brand = document.createElement('p')
            brand.innerText = `${prod.brand}`
            news.appendChild(brand)

            let price = document.createElement('p')
            price.innerText = `${prod.price},00€`
            news.appendChild(price)




            // cafeBox.innerHTML = `
            // <div class="news">
            // <img src="${prod.img_url}" alt="">
            // <p>${prod.brand}</p>
            // <p>${prod.price},00€</p>
            // </div>
            // `

            let btn1 = document.createElement('button')
            btn1.innerText = `Añadir`
            cafeBox.appendChild(btn1)

            

            btn1.onclick = () => {
                prod.quantity = 1

                const real = productStorage.some(product => product._id === prod._id)

                if (real) {
                    productStorage.forEach(product => {
                        if (product._id === prod._id) {
                            product.quantity += 1
                        }
                    })
                } else {
                    productStorage.push(prod)
                }


                noDuplicate()
            }

        })
    






    })


