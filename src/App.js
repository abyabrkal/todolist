import React from 'react';
import './App.css';
import TodoItems from './TodoItems'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [],
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    
    
    if(this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }

      this.setState({
        items: this.state.items.concat(newItem)
      })

      /* 
      this.setState((prevState) => {
        items: prevState.items.concat(newItem)
      })
      */

      this._inputElement.value = "";
    }
    
    // By default, when you submit a form, the page reloads
    // and clears everything out. We definitely don't want 
    // that. By calling preventDefault, 
    // we block the default behavior.
    e.preventDefault()
      

  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    })

    this.setState({
      items: filteredItems
    })
  }



  render() {
    return (
      <div className="todoListMain">
       <div className="header">
          <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} placeholder="enter task" ></input>
          <button type="submit">Add</button>
        </form>
       </div>
       <TodoItems entries={this.state.items}
                  delete={this.deleteItem} />
      </div>
    );
  }
  
}

export default App;
