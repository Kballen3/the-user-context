import React from 'react'
import {Card, } from 'semantic-ui-react'

const Account = () => (
    <Card>
        <Card.Content>

            <Card.Header>username</Card.Header>
            <Card.Meta>
                First Name: firstName
            </Card.Meta>
            <Card.Meta>
                Last Name: lastName
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            <p>Email: email</p>
        </Card.Content>
    </Card>
)

export default Account