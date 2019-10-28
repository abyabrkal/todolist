import React from 'react'

class TodoItems extends React.Component {
    constructor(props){
        super(props)

        this.delete = this.delete.bind(this);
    }
  

    delete(key) {
        this.props.delete(key);
    }

    
    listTasks(item) {
        return <li onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</li>
    }

   

    render() {
        let todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.listTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        )    
    }
}

export default TodoItems;