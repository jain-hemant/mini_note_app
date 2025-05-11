import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <Flex height={"40px"} bg={"teal.500"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/add-note"}>Add Notes</NavLink>
            <NavLink to={"/view-note"}>View Notes</NavLink>
            <NavLink to={"/about"}>About</NavLink>
        </Flex>
    )
}
