
const createLiItem = (id, symbol, priceUsd) => {
    const list = document.getElementById('crypto-list');
    let liItem = document.createElement('li');
    liItem.innerHTML = `${id} (${symbol}): ${priceUsd}`
    list.appendChild(liItem);
}

const catchCryptoCurrency = async () => {
    const apiCrypto = 'https://api.coincap.io/v2/assets'

    const response = await fetch(apiCrypto);
    const { data } = await response.json();
    console.log(data);
    data.forEach((element, i) => {
        const {id, symbol, priceUsd} = element;
        (i <= 10) ? createLiItem(id, symbol, priceUsd) : null;
    });
}

window.onload = () => catchCryptoCurrency();