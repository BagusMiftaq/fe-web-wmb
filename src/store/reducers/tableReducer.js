import constants from "../../constants";
import tableList from "../../fixtures/tableList.json";

const initialState = {
    tableList:[
        ...tableList.data
    ],
    pagination : {
        count :tableList.count, totalPage:tableList.totalPage, page: tableList.page, size: tableList.size
    }

}

const tableReducers = (state = initialState, action) => {
    switch (action.type){
        case constants.ACTION.ADD_TABLE:
            return{
                ...state,
                tableList : [...state.tableList, action.payload]
            }

        case constants.ACTION.EDIT_TABLE:
            const newList = state?.tableList?.map((table) => {
                if (table.tableNum === action?.payload?.tableNum) {
                    return {
                        ...table, ...action?.payload
                    }
                }
                return table;
            })
            return {
                ...state,
                tableList: newList
            }
        case constants.ACTION.DELETE_TABLE:
            const tableListCopy = [...state?.tableList];
            const tableWithIdIndex = tableListCopy?.findIndex((table) => {
                return table.tableNum === action.payload
            })
            tableListCopy.splice(tableWithIdIndex, 1);
            return {
                ...state,
                tableList: tableListCopy
            }
        default:
            return {
                ...initialState
            };
    }
}

export default tableReducers;