const TechStack = (props) => {
    return (
        <div key={props.key} className="py-1 px-2 border rounded text-gray-500">{props.children}</div>
    )
}

export default TechStack