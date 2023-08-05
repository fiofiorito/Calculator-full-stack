
function Screen(props) {
    return <div className="screen-div">
        <div className="inner-screen-div">
            <h1>{props.expression}</h1>
        </div>
    </div>
}

export default Screen;