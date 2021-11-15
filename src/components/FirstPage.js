import React from 'react'
import { Link } from 'react-router-dom'

const FirstPage = (props) => {

    return (
        <div className="first">
            <input type="number" name="items" onChange={props.onChange} value={props.value} />
            <Link to="images">Next</Link>
        </div>
    )
}

export default FirstPage
