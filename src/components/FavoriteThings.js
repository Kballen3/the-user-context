import React from 'react'
import { Header, Form } from 'semantic-ui-react';

class FavoriteThings extends React.Component {
    state = { thing:''}

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    handleSubmit = (e) => {
        
    }

    render() {
        const { thing } = this.state

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label="Favorite Things"
                    type="text"
                    name="thing"
                    value={thing}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}
    
//     <div as="h1">
//         These are my Favorite Things
//         <ul>
//             <li>
//                 Eat Icecream
//             </li>
//             <li>
//                 Sleep
//             </li>
//         </ul>
//     </div>
// )


export default FavoriteThings