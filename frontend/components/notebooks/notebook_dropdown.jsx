import React from 'react';

const NotebookDropdown = ({ notebook, notebooks, handleInput }) => {
    console.log(notebook)
    return (
        <div className="dropdown">
            <button className="dropbtn">Notebook</button>
            <div className="dropdown-content">
                {Object.values(notebooks).map(notebook => {
                    return (
                        <option color='black' key={notebook.id} value={notebook.id} onClick={handleInput('notebook_id')}>{notebook.id}</option>
                    )
                })}
            </div>
        </div>

    )
}

export default NotebookDropdown

