import React from 'react'

class TodoItems extends React.Component {

    listTasks(item) {
        return (
            <div>
                <p className="ptask" key={item.key}>{item.text}</p>
                <button className="del" type="submit">X</button>
            </div>
        )
    }

    render() {
        let todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.listTasks);

        return (
            <div className="theList">
                {listItems}
            </div>
        )    
    }
}

export default TodoItems;