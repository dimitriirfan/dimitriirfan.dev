const Tag = (props) => {
    let color
    if (props.color === "green" ) {
        color = "bg-green-100 text-green-500"
    }
    else if (props.color === 'red') {
        color = "bg-red-100 text-red-500"
    }
    else if (props.color === "yellow") {
        color = "bg-yellow-100 text-yellow-500"
    }
    else {
        color = "bg-green-100 text-green-500"
    }
    return (
        <div className={`${color} ${props.className} text-xs py-1 px-2 font-bold rounded`}>{props.children}</div>
    )
}

export default Tag