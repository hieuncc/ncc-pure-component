import React from "react"
import ItemPureComponent from "./ItemPureComponent"
import WarpItem from "./WarpItem"
const ListPureComponent = (props) => {
    return (
        props.listTask.map((item,index) => 
            <WarpItem
                key={item.id}
                function= {() =>props.handleDeleteTask(index)}
            > 
                <ItemPureComponent 
                    item={item} 
                />
            </WarpItem>
        )
    )
}
export default ListPureComponent