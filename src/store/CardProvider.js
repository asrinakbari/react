import CardConext  from "./card-context";

const CardProvider = (props) =>{
    const addItemToCardHandler = () =>{};

    const removeItemFromCardHandler =(id) =>{}

    const cardContext ={
        items:[],
        totalAmount:0,
        addItem:addItemToCardHandler,
        removeItem:removeItemFromCardHandler
    }

    return <CardConext.Provider value={cardContext}>
        {props.children}
    </CardConext.Provider>
}

export default CardProvider;