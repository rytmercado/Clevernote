import React from 'react';

const NotebookDropdown = ({ note, notebooks, handleInput }) => {
    // debugger
    let notebook
    if (notebooks) {

        notebook = notebooks[note.notebook_id]
    } else {
        notebook = {id: null}
    }
    return (
        <div className="dropdown">
            <select value={notebook.id} onChange={handleInput('notebook_id')}>
                {Object.values(notebooks).map(nb => {
                    /* if (nb == notebook) {
                       return (
                          <option color='black' key={nb.id} value={nb.id} >{nb.subject}</option>
                              )
                        } else { */
                    return (
                        <option color='black' key={nb.id} value={nb.id}>{nb.subject}</option>
                    )
})}
            </select>
        </div>

    )
}

export default NotebookDropdown

