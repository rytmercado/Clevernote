import React from 'react';

class NewTagForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            user_id: this.props.currentUser.id
        }
    }

    makeNewTag(){
        console.log(this.props)
        this.props.postTag(this.state).then(() => this.setState({name:''}))
        this.props.handleClose()
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
      }

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

                        placeholder="Tag name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInput('name')}
                    />
                </form>
                <div className='flex-bottom-right'>
                    <button 
                    onClick={() => this.props.handleClose()}
                    >
                        Cancel
                    </button>
                    <button 
                    onClick={() => this.makeNewTag()}
                    >
                        Create
                    </button>
                </div>
              </>
          )
      }


}

export default NewTagForm