import api from "../config/api";

export const getMenuById = (id) => {
    return api.get("/menu/"+id);
}

export const getMenu=(page)=> api.get("/menu",{
    params:{
        page
    }
})

export const addMenu = (data) =>{
    return api.post("/menu", data,{
        headers : {
            "Content-type" : "application/json"
        }
    })
}

export const deleteMenu = (id) =>{
    return api.delete("/menu/"+id);
}