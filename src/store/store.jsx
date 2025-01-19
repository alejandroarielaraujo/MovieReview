import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {},
    deleteItem: (id) => {} // Nueva función
});

export default function Store({children}){

    const [items, setItems] = useState([]);

    function createItem(item){
        const temp = [...items];
        temp.push(item);

        setItems(temp);
    }

    function getItem(id){
        const item = items.find((item) => item.id === id);
        return item;
    }

    function updateItem(updatedItem) {
        const updatedItems = items.map(item =>
            item.id === updatedItem.id ? { ...updatedItem } : item
        );
        setItems(updatedItems);
    }

    // Función para eliminar un libro
    function deleteItem(id) {
        const filteredItems = items.filter((item) => item.id !== id); // Filtrar el libro por ID
        setItems(filteredItems); // Actualizar el estado con los libros restantes
    }

    // return <div>{children}</div>
    return (
        <AppContext.Provider
            value={{
                items,
                createItem,
                getItem,
                updateItem,
                deleteItem, // Exponer la función deleteItem
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext(){
    return useContext(AppContext);
}