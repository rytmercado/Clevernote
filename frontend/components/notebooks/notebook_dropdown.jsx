import React from 'react';

const NotebookDropdown = ({ note, notebooks, handleInput }) => {
    // debugger
    // let notebook = notebooks[note.notebook_id]
    return (
        <div className="dropdown">
            <select value={note.subject} onChange={handleInput('notebook_id')}>
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

