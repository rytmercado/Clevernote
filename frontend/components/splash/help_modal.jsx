import React from 'react';

const HelpModal = ({closeModal}) => {
    return(
        <div className='flex-center'>
            <div className='help-modal'>

                <h1>Welcome to Clevernote</h1>
                <br/>
                <p>To get started, sign up as a new user or login as a demo user.</p>
                <p>Once inside, you can create notes, organize them into notebooks,</p>
                <p>and place re-usable tags to categorize them. </p>
                <br/>
                <button className='signup-button' onClick={() => closeModal()}>Get started!</button>
            </div>
        </div>
    )
}

export default HelpModal