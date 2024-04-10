
const url = 'https://course-api.com/javascript-store-products';

const produtcsDOM = document.querySelector('.products-center')

const fetchProducts = async () => {
    produtcsDOM.innerHTML = 
    try {
        const resp = await fetch (url);
        const data = await resp.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchProducts();