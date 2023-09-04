function Square(props) {
    const { color } = props;
    const colorClass = color === "white" ? "bg-white" : "bg-black";
    const classes = `h-12 w-12 ${colorClass}`;
    return <div className={classes}></div>;
}

export default Square;