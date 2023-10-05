console.log("Hello Web Bro")
let n = 20
let url = 'https://dummyjson.com/products'

let productsId = document.querySelector("#products")
let laptopId = document.querySelector("#flaptops")
let smartphoneId = document.querySelector("#fsmartphone")
let skincareId = document.querySelector("#fskincare")
let fragrancesId = document.querySelector("#ffragrances")


let fragment = new DocumentFragment();
let products;

// Fetch products
async function getProducts(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
}

getProducts(url)
    .then((data) => { 
        products = data.products.slice(0, n)
        products.forEach((product) => {
        let div = document.createElement('div');
        div.setAttribute("class", 'card p-1')
        div.innerHTML = `
            <img src="${product.thumbnail}" alt="">
            <h3 class="fs-4 title">${product.title}</p>
            <p class="description">description: ${product.description}</p>
            <p class="brand">brand: ${product.brand}</p>
            <p class="rating">rating: ${product.rating}</p>
            <p class="category"> category: ${product.category}</p>
            <p class="stock">stock: ${product.stock}</p>
            <div class="d-flex justify-content-between">
                <div class="price">
                    price: $${product.price}
                </div>
                <div class="add-card">
                    <button class="btn btn-success add">add</button>
                </div>
            </div>
        `
        fragment.appendChild(div);
        })
        productsId.appendChild(fragment)
    })
    .catch((err) => console.log(err))


// FILTER  category

laptopId.addEventListener('click', function() {
    url = 'https://dummyjson.com/products/category/laptops'
    console.log(url)
    skincareId.removeAttribute('class', 'fw-bold')
    fragrancesId.removeAttribute('class', 'fw-bold')
    laptopId.setAttribute('class', 'fw-bold')
    smartphoneId.removeAttribute('class', 'fw-bold')
    document.querySelector('#products').innerHTML = '';
    getProducts(url)
    .then((data) => { 
        products = data.products.slice(0, n)
        products.forEach((product) => {
        let div = document.createElement('div');
        div.setAttribute("class", 'card p-1')
        div.innerHTML = `
            <img src="${product.thumbnail}" alt="">
            <h3 class="fs-4 title">${product.title}</p>
            <p class="description">description: ${product.description}</p>
            <p class="brand">brand: ${product.brand}</p>
            <p class="rating">rating: ${product.rating}</p>
            <p class="category"> category: ${product.category}</p>
            <p class="stock">stock: ${product.stock}</p>
            <div class="d-flex justify-content-between">
                <div class="price">
                    price: $${product.price}
                </div>
                <div class="add-card">
                    <button class="btn btn-success add">add</button>
                </div>
            </div>
        `
        fragment.appendChild(div);
        })
        productsId.appendChild(fragment)
    })
    .catch((err) => console.log(err))

})

smartphoneId.addEventListener('click', function() {
    url = 'https://dummyjson.com/products/category/smartphones'
    console.log(url)
    skincareId.removeAttribute('class', 'fw-bold')
    fragrancesId.removeAttribute('class', 'fw-bold')
    laptopId.removeAttribute('class', 'fw-bold')
    smartphoneId.setAttribute('class', 'fw-bold')

    document.querySelector('#products').innerHTML = '';
    getProducts(url)
    .then((data) => { 
        products = data.products.slice(0, n)
        products.forEach((product) => {
        let div = document.createElement('div');
        div.setAttribute("class", 'card p-1')
        div.innerHTML = `
            <img src="${product.thumbnail}" alt="">
            <h3 class="fs-4 title">${product.title}</p>
            <p class="description">description: ${product.description}</p>
            <p class="brand">brand: ${product.brand}</p>
            <p class="rating">rating: ${product.rating}</p>
            <p class="category"> category: ${product.category}</p>
            <p class="stock">stock: ${product.stock}</p>
            <div class="d-flex justify-content-between">
                <div class="price">
                    price: $${product.price}
                </div>
                <div class="add-card">
                    <button class="btn btn-success add">add</button>
                </div>
            </div>
        `
        fragment.appendChild(div);
        })
        productsId.appendChild(fragment)
    })
    .catch((err) => console.log(err))

})

skincareId.addEventListener('click', function() {
    url = 'https://dummyjson.com/products/category/skincare'
    console.log(url)
    skincareId.setAttribute('class', 'fw-bold')
    fragrancesId.removeAttribute('class', 'fw-bold')
    laptopId.removeAttribute('class', 'fw-bold')
    smartphoneId.removeAttribute('class', 'fw-bold')

    document.querySelector('#products').innerHTML = '';
    getProducts(url)
    .then((data) => { 
        products = data.products.slice(0, n)
        products.forEach((product) => {
        let div = document.createElement('div');
        div.setAttribute("class", 'card p-1')
        div.innerHTML = `
            <img src="${product.thumbnail}" alt="">
            <h3 class="fs-4 title">${product.title}</p>
            <p class="description">description: ${product.description}</p>
            <p class="brand">brand: ${product.brand}</p>
            <p class="rating">rating: ${product.rating}</p>
            <p class="category"> category: ${product.category}</p>
            <p class="stock">stock: ${product.stock}</p>
            <div class="d-flex justify-content-between">
                <div class="price">
                    price: $${product.price}
                </div>
                <div class="add-card">
                    <button class="btn btn-success add">add</button>
                </div>
            </div>
        `
        fragment.appendChild(div);
        })
        productsId.appendChild(fragment)
    })
    .catch((err) => console.log(err))

})

fragrancesId.addEventListener('click', function() {
    url = 'https://dummyjson.com/products/category/fragrances'
    console.log(url)
    skincareId.removeAttribute('class', 'fw-bold')
    fragrancesId.setAttribute('class', 'fw-bold')
    laptopId.removeAttribute('class', 'fw-bold')
    smartphoneId.removeAttribute('class', 'fw-bold')
    document.querySelector('#products').innerHTML = '';
    getProducts(url)
    .then((data) => { 
        products = data.products.slice(0, n)
        products.forEach((product) => {
        let div = document.createElement('div');
        div.setAttribute("class", 'card p-1')
        div.innerHTML = `
            <img src="${product.thumbnail}" alt="">
            <h3 class="fs-4 title">${product.title}</p>
            <p class="description">description: ${product.description}</p>
            <p class="brand">brand: ${product.brand}</p>
            <p class="rating">rating: ${product.rating}</p>
            <p class="category"> category: ${product.category}</p>
            <p class="stock">stock: ${product.stock}</p>
            <div class="d-flex justify-content-between">
                <div class="price">
                    price: $${product.price}
                </div>
                <div class="add-card">
                    <button class="btn btn-success add">add</button>
                </div>
            </div>
        `
        fragment.appendChild(div);
        })
        productsId.appendChild(fragment)
    })
    .catch((err) => console.log(err))

})


// Add card
let addCard = document.querySelector("button")
addCard.addEventListener('click', function(e) {
        console.log(e)
    })