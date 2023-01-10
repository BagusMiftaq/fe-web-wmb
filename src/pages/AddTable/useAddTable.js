import {useEffect, useState} from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddTable =()=>{
    const [tableNum, setTableNum] = useState("");
    const [tableStatus, setTableStatus] = useState("AVAILABLE");
    const [isDisable, setDisable] = useState(true);

    const getter = {tableNum, tableStatus, isDisable};
    const setter = {
        tableNum: onChangeText(setTableNum),
        tableStatus : onChangeText(setTableStatus),
    }

    useEffect(()=>{
        if(tableNum){
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [tableNum])

    return {
        getter, setter
    }
}

export default useAddTable;