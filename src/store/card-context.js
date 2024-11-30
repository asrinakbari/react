import React from "react";

const CardConext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) =>{},
    removeItem: (id) =>{}
});

export default CardConext;