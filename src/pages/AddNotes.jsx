import { Box, Button, VStack, Flex, Input } from '@chakra-ui/react'
import React from 'react'

export default function AddNotes() {
    return (
        <Flex w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"}  >

            <form >
                <Flex flexDirection={"column"} mx={"auto"} gapY={"20px"} p={"30px 20px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px; ">
                    <Flex flexDirection={"column"} gapY={"10px"}>
                        <lable for="title">Title</lable>
                        <Input type="text" placeholder='Enter Title...' w={"md"} py={"2px"} />
                    </Flex>
                    <Flex flexDirection={"column"} gapY={"10px"}>
                        <label for="content">Content</label>
                        <Input type="text" placeholder='Enter Content...' w={"md"} />
                    </Flex>
                    <Button>Add Notes</Button>
                </Flex>
            </form>

        </Flex>
    )
}
