export function filterMenu(products, search) {
    return search === "breakfast" || search === "all-day" ?
    products.filter((product) => product.type === search && product.complement === null) :
    products.filter((product) => product.name=== search)
};