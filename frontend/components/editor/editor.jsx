import React from "react";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: "",
            body: "",
            updated_at: "",
        }
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
                    <textarea
                        className="body-field"
                        type="text"
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                        />
                </form>
            </div>
        )
    }
}