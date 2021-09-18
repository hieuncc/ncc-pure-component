import React from "react"
class ItemPureComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
        }
    }
    render() {
        console.log("Item Pure",this.state.item)
        return (
            <p>
                {this.state.item.name}
            </p>
        )
    }
}
export default ItemPureComponent