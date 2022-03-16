import React, { Component } from 'react'

export default class TagIndex extends Component {
  render() {
    return (
      <div className='note-index'>
          <header className="notes-header">
            <div className='notes-header-top'>

                <h1>Tags</h1>

            </div>
          </header>
          <ul>
                    <li className='note-index-item'>tag1</li>
                    <li className='note-index-item'>tag2</li>
                    <li className='note-index-item'>tag3</li>
                </ul>
      </div>
    )
  }
}
