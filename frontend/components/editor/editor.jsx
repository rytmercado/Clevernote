import React from "react";
import ReactQuill, { Quill } from "react-quill";
// import 'react-quill/dist/quill.snow.css';


export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: "",
            body: "",
            updated_at: "",
            notebook_id: 3,
        }

        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value}
                , () => {this.props.patchNote(this.state)})
        }
      }
      
    componentDidMount(){
        this.props.getNotes()
            .then((res) => {this.setState(this.props.note)});
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId)) {
            this.setState(this.props.note);
        }
    }

    handleQuillUpdate(text) {
        this.setState({body: text}, () => this.props.patchNote(this.state))
    }

    render(){
        if(!this.props.note) {
            return null;
        } 

        return(
            <div className="note-body">
                <form>
                    <input
                        className="title-field"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                        />
                        <ReactQuill theme="snow" placeholder="Start writing here..." value={this.state.body} onChange={this.handleQuillUpdate} modules={quillModules} formats={quillFormats} />

                    {/* <div
                        className="body-field"
                        type="text"
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                        ></div> */}

                </form>
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