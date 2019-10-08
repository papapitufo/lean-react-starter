import React from 'react'

const Item = (props) => {
  return (
      <div>
        <li>
          <span style={{minWidth: "200px", maxWidth: "300px", overflow: "hidden", display: "inline-block"}}>{props.name}</span>
          <span style={{fontWeight: "bold", cursor: "pointer"}} onClick={() => {props.onRemoveItem(props.id)}}>X</span>
        </li>
      </div>      
  )
}
export default Item;