import React, { Component } from 'react';
import Item from './item'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: ""
    }
  }

  render() {
    return (
      <div style={{marginTop: "100px"}}>
        <div style={{marginLeft: "auto", marginRight: "auto", width: "fit-content"}}>        
        <input type="text" onChange={(e) => { this.setState({name: e.target.value})}} value={this.state.name}/>
        <button style={{cursor: "pointer"}} onClick={this.addItem}>Add Item</button>
        <span style={{marginLeft: "10px"}}>{"count: " + this.state.items.length}</span>
        <ul style={{listStyle: "none", paddingLeft: "0px"}}>
        {this.state.items}
        </ul>
        </div>
      </div>
    );
  }  

  addItem = () => {
    if(this.state.name) {
      const key = this.state.items.length + "-" + this.state.name;
      this.setState({
        name: "",
        items: [...this.state.items, <Item key={key} id={key} name={this.state.name} onRemoveItem={this.removeItem}/>]
      })
    }
  }

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter((item) => {
        return item.props.id !== id;
      })
    })
  }
}

export default App;
