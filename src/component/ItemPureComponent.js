import React from "react"
class ItemPureComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }
    render() {
        console.log("InputString/re-render",this.state.name)
        return (
            <p>{this.state.name}</p>
        )
    }
}
export default ItemPureComponent