import React from 'react'
import {Form, } from 'semantic-ui-react'
import { AccountConsumer, } from '../providers/AccountProvider'

class AccountForm extends React.Component {
state = { username: '', email:'', firstName:'', lastName:'', }

    handleChange = (e, { name, value }) => this.setState({ [name]: value, })

    handleSubmit = (e) => {
        e.preventDefault()
        const account = {...this.state, }
        this.props.updateAccount(account)
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

const ConnectedAccountForm = (props) => {
    return (
        <AccountConsumer>
            { value => (
                <AccountForm
                {...props}
                    username={value.username}
                    firstName={value.firstName}
                    lastName={value.lastName}
                    email={value.email}
                    updateAccount={value.updateAccount}
                />
            )}
        </AccountConsumer>
    )
}


export default ConnectedAccountForm