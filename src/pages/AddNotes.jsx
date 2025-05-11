import { Box, Button, VStack } from '@chakra-ui/react'
import React from 'react'

export default function AddNotes() {
    return (
        <VStack>
            <Box>
                <form >
                    <Flex>
                        <label for="title">Title</label>
                        <input type="text" placeholder='Enter Title...' />
                    </Flex>
                    <Flex>
                        <label for="content">Content</label>
                        <input type="text" placeholder='Enter Content...' />
                    </Flex>
                    <Button>Add Notes</Button>
                </form>
            </Box>
        </VStack>
    )
}
