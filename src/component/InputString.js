import { useState } from "react"

const InputString = (props) => {
    const [ state, setState ] = useState("")
    const handleAction = () => {
        props.handleSubmitTask(state)
        setState("")
    }
    function handleChangeState(e) {
        const value= e.target.value
        setState(value)
    }
    return (
        <div>
            <input type="text" onChange={handleChangeState} value={state} />
            <button onClick={handleAction}>
                add
            </button>
        </div>
    )
}
export default InputString