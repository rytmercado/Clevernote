import React from 'react';

class NewNotebookForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            subject: '',
            user_id: this.props.currentUser.id
        }
        // this.makeNewNotebook = this.makeNewNotebook.bind(this)
    }

    makeNewNotebook(){
        console.log(this.state)
        this.props.postNotebook(this.state)
        this.props.handleClose()
    }

    handleInput(type) {
        // e.preventDefault();
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
      }

      render(){
          return(
              <>

                <form>
                    <input
                        // className="title-field"
                        type="text"
                        value={this.state.subject}
                        onChange={this.handleInput('subject')}
                    />
                </form>
                <button onClick={() => this.makeNewNotebook()}>
                    Make Notebook
                </button>
              </>
          )
      }


}

export default NewNotebookForm