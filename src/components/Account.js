import React from 'react'
import {Card, } from 'semantic-ui-react'
import { AccountConsumer, } from '../providers/AccountProvider'

const Account = () => (
    <AccountConsumer>
        { value => (
            <Card color="blue">
                <Card.Content>
                    <Card.Header>{value.username}</Card.Header>
                    <Card.Meta textAlign='center'>
                        First Name: {value.firstName}
                    </Card.Meta>
                    <Card.Meta textAlign='center'>
                        Last Name: {value.lastName}
                    </Card.Meta>
                </Card.Content>
                <Card.Content textAlign='center'>
                    <p>Email: {value.email}</p>
                </Card.Content>
            </Card>
        )}
    </AccountConsumer>
)

export default Account