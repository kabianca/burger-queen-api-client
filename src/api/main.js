export function filterMenu(products, type) {
    const menu = products.filter((product) => product.type === type && product.complement === null);
    return menu;
};