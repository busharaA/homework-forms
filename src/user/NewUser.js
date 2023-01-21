import React, { Component } from "react";

class NewUser extends Component {
    state = {
        id: 0,
        name: '',
        years: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, years } = this.state;
        if (!name || !years) {
            alert("Upiši ime i/ili dob!");
            return;
        }

        this.props.addUser(this.state);

        console.log(this.state);

        this.setState({
            name: '',
            years: ''
        });
    }


    handleSaveUser = (e) => {
        this.setState({
            id: this.props.id + 1,
        });

        switch (e.target.id) {
            case "name":
                this.setState({
                    name: e.target.value,
                });
                break;
            case "years":
                e.target.value !== '' ?
                    this.setState({
                        years: parseInt(e.target.value),
                    }) :
                    this.setState({
                        years: '',
                    });
                break;
            default:
                break;
        }
    };

    render() {
        const {name, years} = this.state;
        return (
            <>
                <h4>Novi korisnik</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Ime: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={this.handleSaveUser}
                    />
                    <br />
                    <label htmlFor="years">Dob: </label>
                    <input
                        type="text"
                        id="years"
                        name="years"
                        autoComplete="off"
                        value={years}
                        onChange={this.handleSaveUser}
                    />
                    <br />
                    <button>Dodaj</button>
                </form>
            </>
        );
    }    
}

export default NewUser;
