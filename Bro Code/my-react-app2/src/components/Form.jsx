import React from 'react';

export default function Form() {
    const [value, setValue] = React.useState({ name: '', lastName: '', email: '' });

    function update(e) {
        const { id, value } = e.target;
        setValue(prevValue => ({ ...prevValue, [id]: value }));
    }

    return (
        <span className="container">
            <div className="form">
                <h3>Form</h3>
                Name  : <input type     = "text" id  = "name" onChange     = {update} value = {value.name} />
                Last  Name: <input type = "text" id  = "lastName" onChange = {update} value = {value.lastName} />
                Email: <input type      = "email" id = "email" onChange    = {update} value = {value.email} />
                <button>Submit</button>
            </div>
            <div className = "display">
                <h3>Display</h3>
                           <span>Name : <b>{value.name}</b></span>
                <span>Last Name       : <b>{value.lastName}</b></span>
                           <span>Email: <b>{value.email}</b></span>
            </div>
        </span>
    );
}
