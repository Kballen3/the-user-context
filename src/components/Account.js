import React from 'react'
import {Card, } from 'semantic-ui-react'
import { AccountConsumer, } from '../providers/AccountProvider'

const Account = () => (
    <AccountConsumer>
        { value => (
            <Card>
                <Card.Content>
                    <Card.Header>{value.username}</Card.Header>
                    <Card.Meta>
                        First Name: {value.firstName}
                    </Card.Meta>
                    <Card.Meta>
                        Last Name: {value.lastName}
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <p>Email: {value.email}</p>
                </Card.Content>
            </Card>
        )}
    </AccountConsumer>
)

export default Account