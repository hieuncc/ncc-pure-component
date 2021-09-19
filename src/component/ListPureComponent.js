import React from "react"
import ItemPureComponent from "./ItemPureComponent"
const ListPureComponent = (props) => {
    return (
        props.listTask.map((item,index) => 
            <ItemPureComponent 
                key={item.id}
                item={item} 
                action={props.handleDeleteTask}
            />
        )
    )
}
export default ListPureComponent