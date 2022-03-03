import React from 'react'
import NotebookIndexItem from './notebooks_index_item_container';
import Modal from '../modal/modal';
import NewNotebookForm from './new_notebook_form_container';

export default class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
          showModal: false
        }
        
        this.handleClose = this.handleClose.bind(this)
        this.showModal = this.showModal.bind(this)
      }

      componentDidMount(){
        this.props.getNotebooks();
        this.props.getNotes();
      }
      
      handleClose(){
        this.setState({showModal:false})
      }
      
      showModal(){
        this.setState({showModal:true})
      }
      
      render(){
        return(
          <div className='notebooks-container'>
          <h2 className='notebooks-header'>Notebooks</h2>
          <h3 className='notebooks-count'>{this.props.notebooks.length + (this.props.notebooks.length === 1 ? ' notebook' : ' notebooks')}</h3>
          <button onClick={this.showModal}>New Notebook</button>
          <table className='notebooks-table arial'>
            <thead>

              <tr>
                <th></th>
                <th>Title</th>
                <th>Created By</th>
                <th>Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

            {this.props.notebooks.map(notebook => {
              return (
                <NotebookIndexItem key={notebook.id} notebook={notebook} />
              )
            })}
            </tbody>


          </table>

            
        <Modal show={this.state.showModal} handleClose={this.handleClose} children={<NewNotebookForm handleClose={this.handleClose}/>} />
          </div>
        )
      }
    }