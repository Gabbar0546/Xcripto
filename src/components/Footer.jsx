import { Box, Stack, VStack,Text, Image, } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/img1.jpg'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16', '8']}>
        <Stack direction={['column' , 'row']} h={'full'} alignItems={'center'}>
            <VStack w={'full'} alignItems={['center' , 'flex-start']}>
                <Text fontWeight={'bold'}>About Us</Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center' , 'end']}>We are the best crypto trading app in India, We provide our guidance at a very cheap price.</Text>
            </VStack>
            <VStack  w={'64'}>
                <Image boxSize={'28'} mt={['4' , '0']} src={img1} rounded={'full'}/>
                <Text  w={'full'} textAlign={'center'} color={'Highlight'}>Bhojraj Choudhary</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer