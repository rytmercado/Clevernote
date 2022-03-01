import React from 'react'
import NotebookIndexItem from './notebooks_index_item_container';

export default class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getNotebooks();
        this.props.getNotes();
    }

    render(){
        console.log(this.props.notebooks)
        return(
          <div className='notebooks-container'>
          <h2 className='notebooks-header'>Notebooks</h2>
          <h3 className='notebooks-count'>{this.props.notebooks.length + ' notebooks'}</h3>
          <table className='notebooks-table'>
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
            
          </div>
        )
    }
}