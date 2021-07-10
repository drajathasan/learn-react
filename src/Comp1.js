import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          darno: 'Harno'
        };
    }

    makeAlert = async () =>
    {
        alert('Hai')
        await fetch('https://api.quotable.io/random?maxLength=100&tags=technology|science|wisdom|education')
                .then(response => response.text())
                .then(result => {
                    this.setState({
                        inputValue: result
                    });
                })
    }
    render() {
        let label = 'Drajat'
        return (
            <div>
                <div>{this.state.darno}</div>
                <div>{(this.state.inputValue === '') ? label : this.state.inputValue}</div>
                <input type="text" placeholder="Isi aku" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                <button onClick={this.makeAlert} style={{background: this.props.warna}}>{this.props.label}</button>
            </div>
            );
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }
}

export default Button