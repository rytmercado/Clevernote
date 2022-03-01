import React from 'react'
import { Link } from 'react-router-dom'

export default class NotebookIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'expanded': false
        }
        // this.handleNoteDelete = this.handleNoteDelete.bind(this)
    }

    componentDidMount(){
        this.props.getNotebooks();

    }

    handleExpand() {
            this.setState({'expanded': !this.state.expanded })

    }

    // handleNoteDelete(noteId){
    //     this.props.deleteNote(noteId);
    //     this.props.getNotebooks();

    // }

    render() {
        const notebook = this.props.notebook;
        const userEmail = this.props.currentUser.email
        return (
            <>
                <tr>
                    <td onClick={() => this.handleExpand()}>{this.state.expanded ? '⮟' : '⮞'}
                    </td>
                    <td>{notebook.subject}</td>
                    <td>{userEmail}</td>
                    <td>{notebook.updated_at}</td>
                    <td onClick={() => this.props.deleteNotebook(notebook.id)}>Delete</td>
                </tr>
                {notebook.notes.map((note) => {
                    let url = `/notes/${note.id}`
                    {/* console.log(this.props.currentUser) */}
                    return(


                        <tr key={note.id} className={this.state.expanded ? 'notebook-exposed' : 'notebook-hidden'}>
                            <td></td>

                            <td>
                                <Link to={url}>
                                {note.title}
                                </Link>
                            </td>
                            <td>{userEmail}</td>
                            <td>{note.updated_at}</td>
                            <td onClick={() => this.props.deleteNote(note.id).then(() => this.props.getNotebooks()).then(() => console.log('success'))}>Delete</td>
                        </tr>

                    )
                })}
            </>


        )
    }
}