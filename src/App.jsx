import React, { useState } from 'react'
import './App.css'
import InputArea from './components/InputArea'
import ListItem from './components/ListItem';

const App = () => {

  const [items,setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((previtems) => {
      return [...previtems, inputText]
    })
  }
  // console.log(items);
  
  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item,index) => {
        return index !== id
      })
    })
  }

  return (
    <div className='container'>
      <div className="heading">
        <h1>ToDoList</h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
          {items.map((item,index) => {
            return (
              <ListItem key={index} text={item} deleteItem={deleteItem} id={index} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
