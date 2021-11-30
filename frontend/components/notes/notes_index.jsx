import React from "react";
import { Link } from "react-router-dom";
import Notes from "./notes";
// import Notes from "./notes";


export default class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getNotes()
        .then((res) => {this.setState(this.props.note)});
    }

    render() {
        return(
            <div className="note-index">

                <div className="notes-index">
                    <header className="notes-header">
                        <h1>Notes</h1>
                    </header>
                    <ul>
                        {this.props.notes.map(note => {
                            let url = `/notes/${note.id}`
                            return(
                                <Link to={url} key={note.id} >
                                    <li className="note-index-item" >{note.title}</li>
                                </Link>
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
            
        )
    }
}