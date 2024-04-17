const productDOM = document.querySelector('.product');
console.log(productDOM);

const url = 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';

const fetchProduct = async() =>{
    return 'product'
}

const displayProducts = (product) =>{
    console.log(product);
}

const start = async() =>{
    const data = await fetchProduct();
    displayProducts(data);
}

start();