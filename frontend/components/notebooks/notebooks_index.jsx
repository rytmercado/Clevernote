import React from 'react'
import NotebookIndexItem from './notebook_index_item';

export default class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // this.props.getNotebooks();
    }

    render(){
        console.log(this.props.notebooks)
        return(
          <div>

          <table>
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