import React from 'react';


export default class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getNotebooks();
    }

    render(){
        console.log(this.props.notebooks)
        return(
            <ul>
                {this.props.notebooks.map(notebook => {
                    return(
                        <li key={notebook.id}>
                            {notebook.subject}
                        </li>
                    )
                })}
            </ul>
        )
    }
}