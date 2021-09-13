import { useState } from "react"

const InputString = (props) => {
    const [ state, setState ] = useState("")
    function handleAction() {
        props.handleSubmitTask(state)
        setState("")
    }
    console.log("InputString/re-render")
    return (
        <div>
            <input type="text" onChange={e => setState(e)} />
            <button onClick={() => handleAction(state)}>
                add
            </button>
        </div>
    )
}
export default InputString