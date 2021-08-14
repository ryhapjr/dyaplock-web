import { Box, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { DividerWithText } from './DividerWithText';
import DownloadApps from './DownloadApp';

const Linker = ({ heading, link }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Heading textAlign="center" fontSize="2xl">{heading}</Heading>
            <Box m={5}>
                <Link href={link} color="blue.500" textDecoration="underline">Open link on your app</Link>
            </Box>
            <DividerWithText my="3">or download below</DividerWithText>
            <Box>
                <DownloadApps />
            </Box>
        </Box>
    );
}

export default Linker;