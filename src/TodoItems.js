import React from 'react'

class TodoItems extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            {
                this.props.entries.map(entry => {
                    <p>{entry}</p>
                })
            }
        )    
    }
}

export default TodoItems;