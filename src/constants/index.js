const constants = {
    ACTION : {
        ADD_MENU : "ADD_MENU",
        EDIT_MENU : "EDIT_MENU",
        DELETE_MENU : "DELETE_MENU",

        ADD_TABLE : "ADD_TABLE",
        EDIT_TABLE : "EDIT_TABLE",
        DELETE_TABLE : "DELETE_TABLE",

        ADD_TRANSACTION : "ADD_TRANSACTION",

    },
    ROUTES : {
        AUTH : "/auth",
        LOGIN : "/auth/login",
        DASHBOARD : "/",

        LIST_MENU :"/menu",
        ADD_MENU : "/menu/add",
        EDIT_MENU : "/menu/edit",

        LIST_TABLE : "/table",
        ADD_TABLE : "/table/add",
        EDIT_TABLE : "/table/edit",

        TRANSACTION_LIST : "/order",
        ADD_TRANSACTION: "/order/add"
    }
}

export default constants;