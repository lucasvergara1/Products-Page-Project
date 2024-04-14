
const url = 'https://course-api.com/javascript-store-products';

const produtcsDOM = document.querySelector('.products-center')

const fetchProducts = async () => {
    produtcsDOM.innerHTML = '<div class ="loading"></div>';
    try {
        const resp = await fetch (url);
        const data = await resp.json();
        return data
    } catch (error) {
        produtcsDOM.innerHTML = '<p class="error">there was an error</p>';
    }
};


const displayProducts = (list) =>{
    const productList = list.map((product) => {
       const{id} = product;
       const {name: title, price} = product.fields;
       const {url: img} = product.fields.image[0];
       const formatPrice = price / 100;
        //id, name, price, img
        return `<a class="single-product" href="product.html">
            <img src="${img}" class="single-product-img 
            img" alt="${title}"/>
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${formatPrice}</span>
            </footer>
          </a>`;
    }).join('');
    produtcsDOM.innerHTML = `<div class="products-container">
        ${productList}
        </div>`;
};

const start = async() =>{
    const data = await fetchProducts()
    displayProducts(data);
};

start();

