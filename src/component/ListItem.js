import { useState } from "react"
import InputString from "./InputString"
import ListPureComponent from "./ListPureComponent"
const ListItem = () => {
    const [ listTask, setListTask ] = useState([])
    const [ theme, setTheme ] = useState(0)
    // when this action run will re-render whole component
    function handleChangeTheme() {
        setTheme(theme+1)
    }
    function handleSubmitTask(value) {
        const newState= [...listTask, {name: value, id: listTask.length +1}]
        setListTask(newState)
    }
    const handleDelete = (index) => {
        const newState= 
            [
                ...listTask.slice(0,index),
                ...listTask.slice(index +1)
            ] 
            setListTask(newState)
    }
    return (
        <>
            <button onClick={() => handleChangeTheme()}>Change Theme</button>
            <InputString handleSubmitTask={handleSubmitTask}/>
            <ListPureComponent 
                listTask={listTask} 
                handleDeleteTask={handleDelete}
            />
        </>
    )
}
export default ListItem