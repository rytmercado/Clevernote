import React, { Component } from 'react'
import Modal from '../modal/modal';
import NewTagForm from './new_tag_form';

export default class TagIndex extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
          showModal: false
        }
        
        this.handleClose = this.handleClose.bind(this)
        this.showModal = this.showModal.bind(this)
      }

  handleClose(){
    this.setState({showModal:false})
  }
  
  showModal(){
    this.setState({showModal:true})
  }

  render() {
    return (
      <div className='tag-index'>
          <header className="tags-header">
            <div className='notes-header-top'>

                <h1>Tags</h1>
                <div id='new-tag' >
                  <button onClick={this.showModal} className='heavy-green-text'>New Tag</button>
                </div>

            </div>
          </header>
          <ul>
                    <li className='note-index-item'>tag1</li>
                    <li className='note-index-item'>tag2</li>
                    <li className='note-index-item'>tag3</li>
          </ul>
          <Modal show={this.state.showModal} children={<NewTagForm handleClose={this.handleClose} />} />
      </div>
    )
  }
}
