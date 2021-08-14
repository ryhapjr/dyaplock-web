import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

const DownloadApps = () => {
    return (
        <HStack direction="row" align="center">
            <Box mt="8px">
                <MobileStoreButton
                    store="ios"
                    url={iOSUrl}
                    linkProps={{ title: 'iOS Store Button' }}
                    height={50}
                    width={150}
                />
            </Box>
            <MobileStoreButton
                store="android"
                url={iOSUrl}
                linkProps={{ title: 'playstore Store Button' }}
                width={170}
                height={70}
            />
        </HStack>
    );
}

export default DownloadApps;