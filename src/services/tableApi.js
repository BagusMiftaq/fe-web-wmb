import api from "../config/api"

export const getTableById = (id) => {
    return api.get("/table/"+id);
}

export const getTable=(page)=> api.get("/table",{
    params:{
        page
    }
})

export const addTable = (data) =>{
    return api.post("/table", data,{
        headers : {
            "Content-type" : "application/json"
        }
    })
}

export const deleteTable = (id) =>{
    return api.delete("/table/"+id);
}