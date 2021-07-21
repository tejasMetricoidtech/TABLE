import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import { setError } from '../common/SetError'

export default class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            username: "",
            email: "",
            phone: "",
            street: "",
            errors: {}
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    Validate = (name, username, email, phone, street) => {
        const errors = setError(name, username, email, phone, street);
        this.setState({ errors: errors });
        return Object.values(errors).every((err) => err === "");
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, username, email, phone, street } = this.state;
        if (this.Validate(name, username, email, phone, street)) {
            const data = {
                name: name,
                username: username,
                email: email,
                phone: phone,
                street: street
            };
            console.log(data);
            axios.post("http://localhost:5000/posts/add", data).then((res) => {
                if (res.data.success) {
                    alert("Data Added");
                    this.setState({
                        name: "",
                        username: "",
                        email: "",
                        phone: "",
                        street: ""
                    })
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Typography
                        variant='h6'
                        component='h2'
                        color='textSecondary'
                        gutterBottom
                    >
                        Add Employee
                    </Typography>

                    <form noValidate autoCapitalize='off'>
                        <TextField
                            label="name"
                            variant='outlined'
                            color='secondary'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            fullWidth
                            required
                        />
                        {this.state.errors.name && (
                            <div>{this.state.errors.name}</div>
                        )}
                        <TextField
                            label="username"
                            variant='outlined'
                            color='secondary'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            fullWidth
                            required
                        />
                        {this.state.errors.name && (
                            <div>{this.state.errors.username}</div>
                        )}
                        <TextField
                            label="email"
                            variant='outlined'
                            color='secondary'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            fullWidth
                            required
                        />
                        {this.state.errors.name && (
                            <div>{this.state.errors.email}</div>
                        )}
                        <TextField
                            label="phone"
                            variant='outlined'
                            color='secondary'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            fullWidth
                            required
                        />
                        {this.state.errors.name && (
                            <div>{this.state.errors.phone}</div>
                        )}
                        <TextField
                            label="street"
                            variant='outlined'
                            color='secondary'
                            name='street'
                            value={this.state.street}
                            onChange={this.handleInputChange}
                            fullWidth
                            required
                        />
                        {this.state.errors.name && (
                            <div>{this.state.errors.street}</div>
                        )}
                        <Button
                            type='submit'
                            color='secondary'
                            variant='contained'
                            onClick={this.onSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                </Container>
            </div>
        )
    }
}
