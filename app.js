
const url = 'https://course-api.com/javascript-store-products';

const produtcsDOM = document.querySelector('.products-center')

const fetchProducts = async () => {
    produtcsDOM.innerHTML = '<div class ="loading"></div>';
    try {
        const resp = await fetch (url);
        const data = await resp.json()
        console.log(data);
    } catch (error) {
        produtcsDOM.innerHTML = '<p class="error">there was an error</p>';
    }
};

fetchProducts();