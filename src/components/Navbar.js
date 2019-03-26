import React from 'react'
import { NavLink, } from 'react-router-dom'
import {Menu, } from 'semantic-ui-react'

const Navbar = () => (
    <Menu>
        <NavLink to='/'>
        <Menu.Item>
            Home
        </Menu.Item>
        </NavLink>
        <NavLink to='/user/profile'>
        <Menu.Item>
            info
            {/* { this eventually will be an object so as to show the consumers user name} */}
        </Menu.Item>
        </NavLink>
    </Menu>
)

export default Navbar