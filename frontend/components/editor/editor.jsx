import React from "react";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // this.props.getNote(this.props.noteId)

        console.log('here')
    }

    componentDidUpdate(){
        console.log('update')
    }

    render(){
        if(!this.props.note) {
            return null;
        } 

        console.log(this.props.note)

        return(
            <div className="note-body">
                <p>

                    {this.props.note.body}
                </p>
            </div>
        )
    }
}