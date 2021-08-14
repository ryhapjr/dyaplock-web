import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

const LostPage = ({ history }) => {
    return (
        <Center h="95vh">
            <VStack>
                <Heading mb={10}>Page not Found!</Heading>
                <Button onClick={() => history.push('/')}>Go Back</Button>
            </VStack>
        </Center>
    );
}

export default LostPage;