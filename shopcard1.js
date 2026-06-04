let cartTotal = () => {
    const cart = [
        { name: "Laptop", price: 35000 },
        { name: "Mouse", price: 300 },
        { name: "Keyboard", price: 200 },
        { name: "Smartwatch", price: 5000 }
    ];

    return cart.reduce((total, product) => total + product.price, 0);
};

module.exports = cartTotal;