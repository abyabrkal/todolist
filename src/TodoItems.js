import React from 'react'

class TodoItems extends React.Component {

  

    listTasks(item) {
        return <li key={item.key}>{item.text}</li>
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