import React from 'react'
import {Form, Button} from 'semantic-ui-react'

class AccountForm extends React.Component {
state = { username: '', email:'', firstName:'', lastName:'', }

    handleChange = (e, { name, value }) => this.setState({ [name]: value, })

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const {username, email, firstName, lastName} = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='New Username'
                    type='text'
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='Your Name Here'
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='Last Name Please'
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='Email'
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />
                <Form.Button color='yellow'>Save</Form.Button>
            </Form>
        )
    }

}


export default AccountForm