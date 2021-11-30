import React from "react";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
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