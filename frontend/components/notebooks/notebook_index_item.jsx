import React from 'react'
import { Link } from 'react-router-dom'

export default class NotebookIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'expanded': false
        }
    }

    handleExpand() {
            this.setState({'expanded': !this.state.expanded })

    }

    render() {
        const notebook = this.props.notebook;
        return (
            <>
                <tr>
                    <td onClick={() => this.handleExpand()}>{this.state.expanded ? '⮟' : '⮞'}
                    </td>
                    <td>{notebook.subject}</td>
                    <td>{notebook.user_id}</td>
                    <td>{notebook.updated_at}</td>
                    <td>Delete</td>
                </tr>
                {notebook.notes.map((note) => {
                    return(

                    <tr key={note.id} className={this.state.expanded ? 'notebook-expanded' : 'notebook-hidden'}>
                        <td></td>
                        <td>{note.title}</td>
                    </tr>
                    )
                })}
            </>


        )
    }
}