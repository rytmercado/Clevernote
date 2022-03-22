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

  componentDidMount() {
    this.props.getTags();
    // console.log(this.props)
  }

  handleClose() {
    this.setState({ showModal: false })
  }

  showModal() {
    this.setState({ showModal: true })
  }

  render() {
    console.log(this.props.tags)
    return (
      <div className='tag-index'>
        <header className="tags-header">
          <div className='notes-header-top'>

            <div id='new-tag' >
              <h1>Tags</h1>
              <button onClick={this.showModal} className='heavy-green-text'>New Tag</button>
            </div>

          </div>
        </header>
        <ul>
          {this.props.tags.map(tag => {
            return(

            <li className='tag-index-item' key={tag.id}>{tag.name}</li>
            )
          })}
        </ul>
        <Modal show={this.state.showModal} children={<NewTagForm handleClose={this.handleClose} currentUser={this.props.currentUser} postTag={this.props.postTag} />} />
      </div>
    )
  }
}
