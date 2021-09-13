import { useState } from "react"
import InputString from "./InputString"
import ItemPureComponent from "./ItemPureComponent"
const ListItem = () => {
    const [ listTask, setListTask ] = useState([])
    const [ theme, setTheme ] = useState(0)
    // when this action run will re-render whole component
    function handleChangeTheme() {
        setTheme(theme+1)
    }
    function handleSubmitTask(e) {
        console.log(e.target.value)
        const newState = [...listTask, {name: e.target.value}]
        setListTask(newState)
    }
    return (
        <>
            <button onClick={() => handleChangeTheme()}>Change Theme</button>
            <InputString handleSubmitTask={handleSubmitTask}/>
            {
                listTask.map((item,index) => 
                    // component will not re-render when props is not change
                    <ItemPureComponent key={index} name={item.name}/>
                )
            }
        </>
    )
}
export default ListItem