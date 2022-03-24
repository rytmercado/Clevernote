import React from 'react';

const NotebookDropdown = ({ notebook_id, notebooks, handleNotebookMove, handleNotebookStateChange }) => {
    // debugger
    console.log(notebook_id)
    let notebook
    if (Object.values(notebooks).length !== 0) {

        notebook = notebooks[notebook_id]
    } else {
        notebook = '';
    }
    return (
        <div className="dropdown">
            <a onClick={() => handleNotebookMove()}>Move Notebook</a>
            <select value={notebook.id} onChange={handleNotebookStateChange()}>
                {Object.values(notebooks).map(nb => {
                    return (
                        <option color='black' key={nb.id} value={nb.id}>{nb.subject}</option>
                    )
})}
            </select>
        </div>

    )
}

export default NotebookDropdown

