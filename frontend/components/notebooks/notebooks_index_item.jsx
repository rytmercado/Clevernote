import React from 'react'
import { Link } from 'react-router-dom'
import timeSince from '../../util/time_since_util';
import Modal from '../modal/modal';
import RenameNotebookForm from './rename_notebook_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'

export default class NotebookIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'expanded': true,
            'showRenameModal': false
        }
        // this.handleNoteDelete = this.handleNoteDelete.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.showRenameModal = this.showRenameModal.bind(this)
    }

    componentDidMount(){
        // this.props.getNotebooks();

    }

    handleExpand() {
            this.setState({'expanded': !this.state.expanded })

    }

    // handleNoteDelete(noteId){
    //     this.props.deleteNote(noteId);
    //     this.props.getNotebooks();

    // }
    handleClose(){
        this.setState({showRenameModal:false})
        }
      
    showRenameModal(){
        this.setState({showRenameModal:true})
      }

    render() {
        const notebook = this.props.notebook;
        const userEmail = this.props.currentUser.email
        let notebookUrl = `/notebooks/${notebook.id}`
        return (
            <>
                <tr>
                    <td style={{width: '30px'}} onClick={() => this.handleExpand()}>{this.state.expanded ? '⮟' : '⮞'}
                    </td>
                    <td><Link className='hover-underline' to={notebookUrl}>{notebook.subject}

                    </Link><a>{` (${notebook.notes.length})`}</a>
                    </td>
                    <td>{userEmail}</td>
                    <td>{timeSince(notebook.updated_at) + ' ago'}</td>
                    <td className='hover-underline' onClick={() => this.showRenameModal()}>Rename</td>
                    <td className='hover-underline' onClick={() => this.props.deleteNotebook(notebook.id)}>Delete</td>
                </tr>
                {notebook.notes.map((note) => {
                    let url = `/notebooks/${note.notebook_id}/${note.id}`
                    return(


                        <tr key={note.id} className={this.state.expanded ? 'notebook-item' : 'notebook-item hidden'}>
                            <td></td>

                            <td
                            >
                                <Link className='hover-underline padding10pxleft' to={url}> 
                                {/* <FontAwesomeIcon id="note-fai-large" icon={faNoteSticky} /> */}
                                {note.title}
                                </Link>
                            </td>
                            <td>{userEmail}</td>
                            <td>{timeSince(note.updated_at) + ' ago'}</td>
                            <td></td>
                            <td className='hover-underline' color='red' onClick={() => this.props.deleteNote(note.id).then(() => this.props.getNotebooks())}>Delete</td>
                        </tr>

                    )
                })}
                <Modal show={this.state.showRenameModal} children={<RenameNotebookForm notebook={notebook} handleClose={this.handleClose}/>} />
            </>


        )
    }
}