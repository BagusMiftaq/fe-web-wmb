import constants from "../../constants";

export const addMenu = (menu) => {
    return {
        type : constants.ACTION.ADD_MENU,
        payload : {
            menuId : Math.random().toString(36).substring(2,7),
            title : menu.title,
            price : menu.price,
        }
    }
}

export const editMenu = (menu) =>({
    type : constants.ACTION.EDIT_MENU,
    payload : menu

})

export const deleteMenu = (id) => ({
    type : constants.ACTION.DELETE_MENU,
    payload: id
})

