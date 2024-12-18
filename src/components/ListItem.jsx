import React from 'react'

const ListItem = (props) => {
  return (
    <div onClick={() => props.deleteItem(props.id)} >
      <li>{props.text}</li>
    </div>
  )
}

export default ListItem
