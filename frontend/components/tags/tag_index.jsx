import React, { Component } from 'react'
import Modal from '../modal/modal';
import NewTagForm from './new_tag_form';
import { Link } from 'react-router-dom';

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
    let url
    let tagName
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
            let numNotes = 0;

            url = `/tags/${tag.id}`
            if(tag.notes) {

            numNotes = tag.notes.length
            }
            tagName = `${tag.name} (${numNotes})`
            return(
              <div key={tag.id} className='tag-index-container'>
                <div>

                  <Link  to={url}>
                      <li className='tag-index-item'>{tagName}</li>
                  </Link>
                </div>

                  <button onClick={() => this.props.deleteTag(tag.id)}>X</button>
              </div>

            )
          })}
        </ul>
        <Modal show={this.state.showModal} children={<NewTagForm handleClose={this.handleClose} currentUser={this.props.currentUser} postTag={this.props.postTag} />} />
      </div>
    )
  }
}
