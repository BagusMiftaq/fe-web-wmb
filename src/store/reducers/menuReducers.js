import constants from "../../constants";
import menuList from "../../fixtures/menuList.json";

const initialState = {
    menuList:[
        ...menuList.data
    ],
    pagination : {
        count :menuList.count, totalPage:menuList.totalPage, page: menuList.page, size: menuList.size
    }

}

const menuReducers = (state = initialState, action) => {
    switch (action.type){
        case constants.ACTION.ADD_MENU:
            return{
                ...state,
                menuList : [...state.menuList, action.payload]
            }

        case constants.ACTION.EDIT_MENU:
            const newList = state?.menuList?.map((menu) => {
                if (menu.menuId === action?.payload?.menuId) {
                    return {
                        ...menu, ...action?.payload
                    }
                }
                return menu;
            })
            return {
                ...state,
                menuList: newList
            }
        case constants.ACTION.DELETE_MENU:
            const menuListCopy = [...state?.menuList];
            const menuWithIdIndex = menuListCopy?.findIndex((menu) => {
                return menu.menuId === action.payload
            })
            menuListCopy.splice(menuWithIdIndex, 1);
            return {
                ...state,
                menuList: menuListCopy
            }
        default:
            return {
                ...initialState
            };
    }
}

export default menuReducers;