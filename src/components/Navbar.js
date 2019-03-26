import React from 'react'
import { NavLink, } from 'react-router-dom'
import {Menu, } from 'semantic-ui-react'
import { AccountConsumer} from '../providers/AccountProvider'

const Navbar = () => (
    <AccountConsumer>
        { value => (
            <Menu inverted>
                <NavLink to='/'>
                    <Menu.Item color="pink">
                        Home
                    </Menu.Item>
                </NavLink>
                <NavLink to='/user/profile'>
                    <Menu.Item position='right'>
                        { value.username}
                    {/* { this eventually will be an object so as to show the consumers user name} */}
                    </Menu.Item>
                </NavLink>
            </Menu>
        )}
    </AccountConsumer>
)

export default Navbar