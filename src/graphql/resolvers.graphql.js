const products = [
    {
        id: 1,
        name: "Iphone",
        price: 500,
        stock: 20,
    },
];

export function getProducts() {
    return products;
}

export function getProductById({ id }) {
    const product = products.find((p) => p.id === +id);
    return product;
}

export function createProduct({ input }) {
    const id = products.length ? products[products.length -1].id + 1 : 1;
    const newProduct = { id, ...input };
    products.push(newProduct);
    return newProduct;
}

export function updateProduct({ id, input }) {
    const index = products.findIndex((p) => p.id === +id);
    products[index] = { id, ...input };
    return products[index];
}

export function deleteProduct({ id }) {
    const index = products.findIndex((p) => p.id === +id);
    const deletedProduct = products.splice(index, 1);
    return deletedProduct;
}

