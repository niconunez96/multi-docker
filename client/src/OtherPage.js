import React from 'react'
import { Link } from 'react-router-dom'

const OtherPage = () => {
    return (
        <div className="App-header">
            <h2>Other page</h2>
            <Link className="App-link" to="/">Home</Link>
        </div>
    );
}


export default OtherPage;