import React from 'react';

class NewTagForm extends React.Component {
    constructor(props) {
        super(props)

    //     this.state = {
    //         subject: '',
    //         user_id: this.props.currentUser.id
    //     }
    //     // this.makeNewNotebook = this.makeNewNotebook.bind(this)
    }

    // makeNewNotebook(){
    //     // console.log(this.state)
    //     this.props.postNotebook(this.state).then(() => this.setState({subject:''}))
    //     this.props.handleClose()
    // }

    // handleInput(type) {
    //     // e.preventDefault();
    //     return e => {
    //         this.setState({[type]: e.currentTarget.value})
    //     }
    //   }

      render(){
          return(
              <>
              <h1>
                  Create new tag
              </h1>
              <br/>
              <p>Tags let you add keywords to notes, making them easier to find and browse.</p>
              <br/>

                <form>
                <label>Name</label>
                    <br/>
                    <input
                        // className="title-field"
                        placeholder="Tag name"
                        type="text"
                        // value={this.state.subject}
                        // onChange={this.handleInput('subject')}
                    />
                </form>
                <div className='flex-bottom-right'>
                    <button 
                    onClick={() => this.props.handleClose()}
                    >
                        Cancel
                    </button>
                    <button 
                    // onClick={() => this.makeNewNotebook()}
                    >
                        Create
                    </button>
                </div>
              </>
          )
      }


}

export default NewTagForm