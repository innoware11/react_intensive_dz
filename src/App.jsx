import { useState } from 'react'
import TodoItem from './components/TodoItem';
import TodoForm from './components/todoForm';

export default function App() {
    let [ items, setItems ] = useState([
        {title: 'Турник', max: 5, value: 0 },
        {title: 'Поесть',  max: 3, value: 0 },
        {title: 'Ещё что-нибудь', max: 10, value: 0 }        
    ])


    function setItemValue(i, newValue){
        let newItems = [ ...items ];
        newItems[i] = { ...items[i], value: newValue};
        setItems(newItems);
    }


    function removeItem(index) {
        setItems(prevItems => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            return newItems;
        });
    }

    let itemsElems = items.map((item, i) => <TodoItem 
        item={item} 
        changed={newVal => setItemValue(i, newVal)}
        removed={() => removeItem(i)} 
        key={i} 
        />)    

    return <div className="container">
        <TodoForm setItems={setItems} />
        {itemsElems}
    </div> 
        
 
}

