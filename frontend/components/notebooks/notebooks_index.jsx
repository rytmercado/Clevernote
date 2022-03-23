import React from 'react'
import NotebookIndexItem from './notebooks_index_item_container';
import Modal from '../modal/modal';
import NewNotebookForm from './new_notebook_form_container';
import RenameNotebookForm from './rename_notebook_form_container';

export default class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
          showModal: false,
          showRenameModal: false,
          focusedNotebook: '',
        }
        
        this.handleClose = this.handleClose.bind(this)
        this.showModal = this.showModal.bind(this)
        this.closeRenameModal = this.closeRenameModal.bind(this)
        this.showRenameModal = this.showRenameModal.bind(this)
      }

      componentDidMount(){
        this.props.getNotebooks().then(() => this.setState({focusedNotebook: this.props.notebooks[0]}));
        this.props.getNotes();
      }
      
      handleClose(){
        this.setState({showModal:false})
      }
      
      showModal(){
        this.setState({showModal:true})
      }

      showRenameModal(notebook){
        this.setState({showRenameModal:true})
        this.setState({focusedNotebook:notebook})
      }

      closeRenameModal(){
        this.setState({showRenameModal:false})
      }
      
      render(){
        const notebook = this.state.focusedNotebook
        return(
          <div className='notebooks-container'>
          <h2 className='notebooks-header'>Notebooks</h2>
          <div className='notebook-sub-header'>
            <h3 className='notebooks-count'>{this.props.notebooks.length + (this.props.notebooks.length === 1 ? ' notebook' : ' notebooks')}</h3>
            <button className='heavy-green-text' onClick={this.showModal}>New Notebook</button>
          </div>
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
                <NotebookIndexItem key={notebook.id} notebook={notebook} showRenameModal={this.showRenameModal} closeRenameModal={this.closeRenameModal}/>
              )
            })}
            </tbody>


          </table>

            
        <Modal show={this.state.showModal} children={<NewNotebookForm handleClose={this.handleClose}/>} />
        <Modal show={this.state.showRenameModal} children={<RenameNotebookForm notebook={notebook} handleClose={this.closeRenameModal}/>} />
          </div>
        )
      }
    }