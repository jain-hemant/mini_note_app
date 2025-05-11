import { Box, Button, VStack, Flex } from '@chakra-ui/react'
import React from 'react'

export default function AddNotes() {
    return (
        <VStack>
            <Box mx={"auto"} >
                <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    <Flex flexDirection={"column"}>
                        <label for="title">Title</label>
                        <input type="text" placeholder='Enter Title...' />
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <label for="content">Content</label>
                        <input type="text" placeholder='Enter Content...' />
                    </Flex>
                    <Button>Add Notes</Button>
                </form>
            </Box>
        </VStack>
    )
}
