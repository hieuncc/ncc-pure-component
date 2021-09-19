import { useRef } from "react"

const WarpItem = (props) => {
    console.log("render warp")
    const ref = useRef({function: props.function})
    return (
        <div onClick={ref.current.function}>
            {props.children}
        </div>
    )
}
export default WarpItem