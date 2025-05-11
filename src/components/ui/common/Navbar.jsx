import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <Flex height={"40px"} bg={"teal.500"}>
            <Link to={"/"}>Home</Link>
            <Link to={"/add-route"}>Add Notes</Link>
            <Link to={"/view-route"}>View Notes</Link>
            <Link to={"/about"}>About</Link>
        </Flex>
    )
}
