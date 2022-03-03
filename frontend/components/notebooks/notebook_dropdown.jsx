import React from 'react';

const NotebookDropdown = ({ note, notebooks, handleInput }) => {
    // debugger
    let notebook = notebooks[note.notebook_id]
    return (
        <div className="dropdown">
            <select onChange={handleInput('notebook_id')}>
                {Object.values(notebooks).map(nb => {
                    if (nb == notebook) {
                        console.log(nb.id)
                       return (
                          <option color='black' key={nb.id} value={nb.id} selected>{nb.subject}</option>
                              )
                        } else {
                    return (
                        <option color='black' key={nb.id} value={nb.id}>{nb.subject}</option>
                    )
                }})}
            </select>
        </div>

    )
}

export default NotebookDropdown

