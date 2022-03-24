import React from "react";
import ReactQuill, { Quill } from "react-quill";
import NotebookDropdown from "../notebooks/notebook_dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faNoteSticky, faTag, faBook } from '@fortawesome/free-solid-svg-icons'
// import 'react-quill/dist/quill.snow.css';


export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: "",
            body: "",
            updated_at: "",
            notebook_id: null,
            tagName: '',
        }

        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.handleCreateTag = this.handleCreateTag.bind(this)
        this.handleNotebookStateChange = this.handleNotebookStateChange.bind(this)
        this.handleNotebookMove = this.handleNotebookMove.bind(this)
    }

    handleInput(type) {
        
        return e => {
            this.setState({[type]: e.currentTarget.value}
                , () => {
                    this.props.patchNote(this.state)
                    if(type === 'notebook_id') {
                        this.props.history.push(`/notebooks/${this.state.notebook_id}/${this.state.id}`)
                    }

                })
        }
      }

    handleNotebookStateChange(){
        return e => {
            this.setState({notebook_id: e.currentTarget.value})
        }
    }

    handleNotebookMove() {
        this.props.patchNote(this.state)
        this.props.history.push(`/notebooks/${this.state.notebook_id}`)
    }
      
    componentDidMount(){
        this.props.getNotebooks()
        this.props.getNotes()
            .then((res) => {this.setState(this.props.note)});
        this.props.getTags()
        this.props.getNoteTags()
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId)) {
            this.setState(this.props.note);
        }
    }

    handleQuillUpdate(text) {
        this.setState({body: text}, () => this.props.patchNote(this.state))
    }

    handleCreateTag() {
        let tag = this.props.tags.find((tag) => {
            return tag.name === this.state.tagName;
        })

        if(tag) {
            this.props.postNoteTag({note_id: this.props.note.id, tag_id: tag.id})
            .then(() => {
                this.props.getNotes()
                this.props.getTags()
            })

        } else {
            this.props.postTag({name: this.state.tagName, user_id: this.props.currentUser.id})
                .then((res) => this.props.postNoteTag({note_id: this.props.note.id, tag_id: res.tag.id}))
                .then(res => {
                    this.props.getNotes()
                    this.props.getTags()
                })
            
        }
    }

    render(){
        if(!this.props.note || !this.state.notebook_id) {
            return null;
        } 
        return(
            <div className="note-body">
                <form>
                    <NotebookDropdown notebook_id={this.state.notebook_id} notebooks={this.props.notebooks} handleNotebookMove={this.handleNotebookMove} handleNotebookStateChange={this.handleNotebookStateChange} />
                    <input
                        className="title-field"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                    />
                    <ReactQuill
                        className='body-field'
                        theme="snow" 
                        placeholder="Start writing here..." 
                        value={this.state.body} 
                        onChange={this.handleQuillUpdate} 
                        modules={quillModules} 
                        formats={quillFormats}
                    />
                </form>
                    <div className='tag-footer'>
                    <FontAwesomeIcon className='tag-delete-icon' icon={faTag} />
                        { 
                            this.props.note.tags.map(tag => {
                                let noteTag = this.props.noteTags.find(nt => (nt.note_id === this.props.note.id && nt.tag_id === tag.id))
                                return(
                                    <div key={tag.id} className='tag-item'>

                                        <a 
                                            onClick={() => this.props.history.push(`/tags/${tag.id}/${this.props.note.id}`)} 
                                             
                                            >
                                            {tag.name}
                                        </a>
                                        <a onClick={() => this.props.deleteNoteTag(noteTag.id).then(() => this.props.getNotes())}
                                        >X</a>
                                    </div>
                                )
                            }
                            )
                        }
                        <input
                            className='new-tag-input-field'
                            onChange={this.handleInput('tagName')}
                            placeholder='add a tag'
                        ></input>
                        <a onClick={this.handleCreateTag} className={this.state.tagName.length > 0 ? 'create-tag' : 'hidden'}>Create new tag
                            
                        </a>

                    </div>
            </div>
        )
    }
}

const quillModules = {
    toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3,4,5,6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{'color':['#000000', '#FFFFFF', '#FF0000', '#00FF00',
                    '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF',
                    '#C0C0C0', '#808080', '#800000', '#808000', 
                    '#008000', '#800080', '#008080', '	#000080']}],
        [{list: "ordered"}, {list: "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ]
};

const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "list",
    "image",
    "video",
    "code-block",
];