import React from 'react'
import styled from 'styled-components'
import { navMenuItems } from '../../assets/dtb/navMenuItem'
import { Button } from '../../styles/styledModul'

const NavBar = styled.div`
    display: flex;
    gap: 30%;
    height: 84px;
    background: #17161AB2;
    padding-left: 304px;
    font-family: ${props => props.theme.fontFamilys.fontRoboTo};
`
const NavBarItem = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;
    height: 100%;
`

const Navbar = () => {
    return (
        <>
            <NavBar >
                <NavBarItem>
                    {navMenuItems.map((item) => (
                        <div key={item.tilte}>
                            <a href={item.link}>{item.tilte}</a>
                        </div>
                    ))}
                </NavBarItem>
                <Button>Connect Wallet</Button>
            </NavBar>
        </>
    )   
}

export default Navbar