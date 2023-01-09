import menuList from "../../fixtures/menuList.json";
import constants from "../../constants";

const initialState = {
    menuList:[
        ...menuList.data
    ],
    pagination : {
        count :menuList.count, totalPage:menuList.totalPage, page: menuList.page, size: menuList.size
    }

}

const orderReducers = (state = initialState, action) => {
    switch (action.type){
        default:
            return {
                ...initialState
            };
    }
}

export default orderReducers;