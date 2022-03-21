import React from 'react';

class RenameNotebookForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            subject: '',
            user_id: this.props.currentUser.id
        }
        this.renameNotebook = this.renameNotebook.bind(this);
    }

    renameNotebook(){
        console.log(this.state)
        this.props.patchNotebook(this.state).then(() => this.setState({subject:''}))
        this.props.handleClose()
    }

    handleInput(type) {
        // e.preventDefault();
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }


    componentDidMount(){
        this.props.getNotebooks()
        this.props.getNotes()
            .then((res) => {this.setState(this.props.notebook)});
    }
      render(){

          return(
              <>
              <h1>
                  Rename Notebook
              </h1>
                <form>
                <label>Name</label>
                    <br/>
                    <input
                        // className="title-field"
                        placeholder="Notebook name"
                        type="text"
                        value={this.state.subject}
                        onChange={this.handleInput('subject')}
                    />
                </form>
                <div className='flex-bottom-right'>
                    <button onClick={() => this.props.handleClose()}>
                        Cancel
                    </button>
                    <button onClick={() => this.renameNotebook()}>
                        Rename
                    </button>
                </div>
              </>
          )
      }


}

export default RenameNotebookForm