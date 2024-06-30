const products = [

    {
        id: 1,
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000",

    },
    {
        id: 1,
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000"
    },
    {
        id: 1,
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000"
    },
    {
        id: 1,
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000"
    },
    {
        id: 1,
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000"
    },
    {
        id: 1,
        name: "RTX",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b967c8e2d3c9f60d902905f154934478/Product/30760/png/300",
        price: "Rp.15.000.000"
    },
]



products.forEach((products) => {
    document.write(`
        <figure>
            <img src="${products.image}" alt="">
            <figcaption>
                <h1>${products.name}</h1>
                <h2>${products.price}</h2>
                <button onClick="confirm('Anda yakin membeli produk ini?')">Beli Sekarang</button>
                <button onClick="alert('Kamu Beli Ini')">Like</button>
                <button onClick="prompt('Ulasan')">Komen</button>
            </figcaption>
        </figure>
    `);
})