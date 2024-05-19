import { useState } from 'react'
import LazyInput from './components/LazyInput'

export default function App() {
  let [login, setLogin] = useState('');

  function applyLogin(newLogin){
    setLogin(newLogin.replace(/[^A-Za-z0-9-]/g, ''))
  }



  return <div className='container'>
    <LazyInput 
    value={login} 
    onChange={applyLogin} 
    placeholder="Lazy login" 
    type="text"
    
    />
    <hr/>
    <h3>{ login }</h3>
    <hr/>
    <button onClick={() => setLogin('admin')}>admin</button>
  </div>
}


