export const productAddAction = ({ id, title,image, price, category, oldPrice }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id, 
        title,
        image,
        price,
        category,
        oldPrice
    }
});



export const productDelete = (id) => ({
    type: "DELETE_PRODUCT",
    id
});