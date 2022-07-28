const P = (props) => {
    return (
        <p className={`${props.className} sm:text-lg`}>{props.children}</p>
    )
}

export default P