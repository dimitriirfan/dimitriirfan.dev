const Quote = (props) => {
    return (
        <p className={`${props.className} font-light text-lg italic p-4 pl-8 bg-gray-50 border-l border-l-gray-200`}>{props.children}</p>
    )
}

export default Quote