import PropTypes from 'prop-types'
import { useState } from 'react'

TodoForm.propTypes = {
    setItems: PropTypes.func.isRequired,
}

function TodoForm({setItems}) {
    const [fields, setFields] = useState([
        {label: 'Title', value: '', name: 'title', type: 'text'},
        {label: 'Maximum steps', value: '', name: 'max', type: 'number'},
    ])

    function changeInput(e) {
        let {name, value} = e.target;
        setFields(fields.map(field => field.name !== name ? field : {
            ...field, value: value
        }))
    }

    function addtask() {
        for (const {value} of fields) {
            if (value === '') return;            
          }
        setItems(prevItems => [
            ...prevItems,
            {
                ...Object.fromEntries(fields.map(({ name, value }) => [name, value])),
                value: 0
            }
        ]);
        setFields(fields.map(field => ({...field, value: ''})))
    }

    return <form>
        <div className='alert alert-dismissible alert-light fade show' role="alert">
            <div className='row g-3'>
                {fields.map(field =>
                    <div className={field.name === "title" ? "col-sm-7" : "col-sm-3"} key={field.name}>
                        <div className='form-group' >

                            <label>{field.label}</label>
                            <input onChange={changeInput} type={field.type} name={field.name} value={field.value} placeholder={field.label} className="form-control" aria-label={field.label} />
                        </div>
                    </div>)}
                <div className="col-sm-auto d-flex align-items-end">
                    <div className='form-group ' >
                        
                        <button type="button" className="btn btn-success " onClick={addtask} >Add task</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
}
export default TodoForm;