import { useState } from 'react'
import TodoItem from './components/TodoItem';

export default function App() {
    let [ items, setItems ] = useState([
        {title: 'Турник', max: 5, value: 0 },
        {title: 'Поесть',  max: 3, value: 0 },
        {title: 'Ещё что-нибудь', max: 10, value: 0 }        
    ])

    let [ inps, setInps ] = useState([]);

    function setItemValue(i, newValue){
        let newItems = [ ...items ];
        newItems[i] = { ...items[i], value: newValue};
        setItems(newItems);
    }

    function setInpValue(attr, newValue){
        let newInps = [ ...inps ];
        newInps[0] = { ...inps[0], [attr]: newValue};
        setInps(newInps);
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

    function changeInput(e) {
        setInpValue(e.target.id, (e.target.id=="max" ? (isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)) : e.target.value));
        // console.log(inps)
    }

    function addtask() {
        setItems(prevItems => [
            ...prevItems,
            {
                title: inps[0]?.title || '',
                max: inps[0]?.max || 0,
                value: 0
            }
        ]);
    }
    

    return <div className="container">
        <div className='alert alert-dismissible alert-light fade show' role="alert">
    <div className='row g-3'>    
        <div className="col-sm-7">
            <input type="text" className="form-control" id="title" placeholder="Title" aria-label="Title" onChange={changeInput}/>
        </div>
        <div className="col-sm-3">
            <input type="text" className="form-control" id="max" placeholder="Maximum steps" aria-label="Maximum steps" onChange={changeInput}/>
        </div>
        <div className="col-sm-auto">
        <button type="button" className="btn btn-success" onClick={addtask}>Add task</button>
        </div>        
    </div> 
    </div>
    {itemsElems} 
    </div> 
        
 
}

