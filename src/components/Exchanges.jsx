import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, VStack ,Image, Heading, Text, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const[loading , setLoading] = useState(true);
    const[error , setError] = useState(false)

    const [exchanges , setExchanges] = useState([]);

    useEffect(()=>{
        const fatchExchanges = async()=>{
            try {
                const {data} = await axios.get(`${server}/exchanges`)  

            setExchanges(data);
            // console.log(data);
            setLoading(false);

            } catch (error) {
                setError(true)
                setLoading(false);
            }
            
        };
        
        fatchExchanges();
    },[])

    if(error) return <ErrorComponent  message={"Exchanges fething data problem error 404"}/>



  return (
    <Container maxW={'container.xl'}>
        {loading ? <Loader/> : <>
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {
            exchanges.map((i)=>(
        
                <ExchangesCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
            ))
        }
        </HStack>
        </>}


    </Container>
  )
  }




  const ExchangesCard = ({name, img ,rank , url})=>(
    <a href={url} target={'blank'}>

        <VStack 
        w={'60'} 
        shadow={'lg'} 
        p={'8'} 
        borderRadius={'lg'} 
        transition={'all 0.3s'} 
        m={'4'} 
        css={{"&:hover":{
            transform: "scale(1.1)"
        }}}
        >


            <Image src={img} w={'10'} h={'10'} objectFit={'contain'}/>
            <Heading size={'md'} noOfLines={'1'}>{rank}</Heading>
            <Text noOfLines={'1'}>{name}</Text>


        </VStack>
    </a>
  )
export default Exchanges