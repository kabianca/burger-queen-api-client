export function filterMenu(products, search) {
    // search === "breakfast" || search === "all-day" ?
    return products.filter((product) => product.type === search && product.complement === null);
    // products.filter((product) => product.flavor=== search)
};