import {useEffect, useState} from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddMenu =()=>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [isDisable, setDisable] = useState(true);

    const getter = {title, price, description, isDisable};
    const setter = {
        title : onChangeText(setTitle),
        price : onChangeText(setPrice),
        category : onChangeText(setCategory),
        description : onChangeText(setDescription)
    }

    useEffect(()=>{
        if(title && price && category && description){
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [title, price, category, description])

    return {
        getter, setter
    }
}

export default useAddMenu;