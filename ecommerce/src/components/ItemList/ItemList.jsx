import "./itemListStyle.css"

const ItemList = ({greeting}) => {
    return(
        <div className="itemList">
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemList