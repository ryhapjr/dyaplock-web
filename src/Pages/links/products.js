import { Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Linker from './components/Linker';

const ProductLinks = () => {
    const [link, setlink] = useState('')
    const params = useParams()

    useEffect(() => {
        const baseHost = process.env.REACT_APP_LINK_HOST
        const id = params.id
        const linkURL = `${baseHost}/biz/${id}`;
        setlink(linkURL)
        const shouldOpen = window.confirm("Open this lnk on your dyaplock app?");
        if (shouldOpen) {
            window.location.replace(linkURL);
        }
    }, [params.id]);

    return (
        <Center minH="95vh">
            <Linker heading="Open a service on Dyaplock Biz" link={link} />
        </Center>
    );
}

export default ProductLinks;