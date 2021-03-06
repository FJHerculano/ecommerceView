import React, { Component } from 'react';

export default class FormSimples extends Component{
    render(){
        const { value, name, placeholder, type, label, onChange, erro } = this.props;

        return(
            <div className="form-input">
                { label && <labe>{label}</labe>}
                <input
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        )
    }
}