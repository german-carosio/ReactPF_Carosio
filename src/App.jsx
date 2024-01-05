import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <NavBar/>
        <ItemListContainer title={'Bienvenidos'}/>
        <ItemCount initial={1} stock={10} onAdd={(quantity)=>{console.log('Cntidad agregada', quantity)}}/>
      </div>
      
      
    </>
  )
}

export default App
