import constants from "../../constants";

export const addTable = (table) => {
    return {
        type : constants.ACTION.ADD_TABLE,
        payload : {
            tableNum : table.tableNum,
            tableStatus : table.tableStatus,
        }
    }
}
export const deleteTable = (id) => ({
    type : constants.ACTION.DELETE_TABLE,
    payload: id
})

