const WarpItem = (props) => {
    console.log("render warp")
    return (
        <div onClick={props.function}>
            {props.children}
        </div>
    )
}
export default WarpItem