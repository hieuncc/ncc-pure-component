import React from "react"
import InputString from "./InputString"
import ItemPureComponent from "./ItemPureComponent"
class ListItem extends React.Component {
  state = {
    counter: 0,
    listTask: []
  }
  handleChangeTheme() {
    this.setState(prevState => ({
      ...prevState, counter: prevState.counter +1
    }))
  }
  handleSubmitTask(value) {
    this.setState(
      prevState => ({
        ...prevState, 
        listTask: [...prevState.listTask, { name: value, id: prevState.listTask.length + 1 }]
      })
    )
  }
  handleDelete = () => {
    console.log(1)
    // const newState = [
    //   ...listTask.slice(0, 1),
    //   ...listTask.slice(2),
    // ]
    // setListTask(newState) 
  }
  render () {
    return (
      <>  
        <p>{this.state.counter}</p>
        <button onClick={() => this.handleChangeTheme()}>Change Theme</button>
        <InputString handleSubmitTask={(value) =>this.handleSubmitTask(value)} />
        {
          this.state.listTask.map((item,index) => 
            <ItemPureComponent 
                key={item.id}
                item={item} 
                onClick={this.handleDelete}
            />
          )
        }
      </>
    )
  }
}
export default ListItem
