import {useEffect, useState} from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddMenu =()=>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [category, setCategory] = useState("");
    const [isDisable, setDisable] = useState(true);

    const getter = {title, price, category, isDisable};
    const setter = {
        title : onChangeText(setTitle),
        price : onChangeText(setPrice),
        category : onChangeText(setCategory),
    }

    useEffect(()=>{
        if(title && price && category){
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [title, price, category])

    return {
        getter, setter
    }
}

export default useAddMenu;