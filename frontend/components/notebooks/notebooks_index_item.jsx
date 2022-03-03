import React from 'react'
import { Link } from 'react-router-dom'
import timeSince from '../../util/time_since_util';

export default class NotebookIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'expanded': true
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
        let notebookUrl = `/notebooks/${notebook.id}`
        return (
            <>
                <tr>
                    <td onClick={() => this.handleExpand()}>{this.state.expanded ? '⮟' : '⮞'}
                    </td>
                    <td><Link to={notebookUrl}>{notebook.subject}

                    </Link>
                    </td>
                    <td>{userEmail}</td>
                    <td>{timeSince(notebook.updated_at) + ' ago'}</td>
                    <td onClick={() => this.props.deleteNotebook(notebook.id)}>Delete</td>
                </tr>
                {notebook.notes.map((note) => {
                    let url = `/notes/${note.id}`
                    {/* console.log(this.props.currentUser) */}
                    return(


                        <tr key={note.id} className={this.state.expanded ? 'notebook-exposed' : 'notebook-hidden'}>
                            <td></td>

                            <td style={{'paddingLeft': '20px'}}>
                                <Link to={url}>
                                {note.title}
                                </Link>
                            </td>
                            <td>{userEmail}</td>
                            <td>{timeSince(note.updated_at) + ' ago'}</td>
                            <td onClick={() => this.props.deleteNote(note.id).then(() => this.props.getNotebooks())}>Delete</td>
                        </tr>

                    )
                })}
            </>


        )
    }
}