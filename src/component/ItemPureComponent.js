import React from "react"
class ItemPureComponent extends React.PureComponent {
    render() {
        console.log("Item Pure",this.props.item)
        return (
            <p 
                onClick={this.props.onClick}
            >
                {this.props.item.name}
            </p>
        )
    }
}
export default ItemPureComponent