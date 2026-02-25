export const categoryAddAction = ({ id, title}) => ({
    type: "CREATE_CATEGORY",
    category: {
        id,
        title

    }
});



export const categoryDelete = (id) => ({
    type: "DELETE_CATEGORY",
    id
});