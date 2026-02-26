export const categoryAddAction = ({ id, title}) => ({
    type: "CREATE_CATEGORY",
    category: {
        id,
        title

    }
});

export const categoryEdit =(id,update)=>({
    type: "EDIT_CATEGORY",
    id,update
});

export const categoryDelete = (id) => ({
    type: "DELETE_CATEGORY",
    id
});