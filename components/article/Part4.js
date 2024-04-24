import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Sequence from '~/components/article/Sequence';
import Carousel from '~/components/article/Carousel';
import { useRef, useLayoutEffect } from 'react';
import gsap, { Elastic, Power0, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 126px;
    padding-bottom: 126px;

`;

const Wrapper = styled.div`
    width: 100%;
    // max-width: 628px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;
    
    width: 100%;
    max-width: 628px;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Name = styled.h2`
    color: white;
    font-family: bellefair, sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.72px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
`;

const Separator = styled.div`
    color: #fff;
    font-family: bellefair, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin: 0 10px;
`;

const Title = styled.p`
    color: #fff;
    font-family: bellefair, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
`;


const ImageBox = styled.div`
    width: 1280px;
    height: 924px;
    position: relative;
`;


const Gradient = styled.div`
    width: 100%;
    height: 300px;
    background: linear-gradient(180deg, rgba(16, 32, 42, 0) 0%, #06171F 40%, #06171F 60%, rgba(16, 32, 42, 0) 100%);
    position: absolute;
    bottom:-150px;
    left: 0;
`;


const SequenceBox = styled.div`
    position: relative;
`;


const Text = styled.p`
    color: #C4C5CA;
    width: 100%;

    font-family: effra, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;

    margin-bottom: 20px;

    width: 100%;
    max-width: 628px;
    position: relative;
`;

const Part4 = ({ data }) => {
    const { t } = useTranslation();
    const imagebox = useRef();
    const image = useRef();

    const carouselData = [
        {
            image: '/images/carousel2/img0.jpeg',
            alt: '',
            width: 334,
            height: 242
        },
        {
            image: '/images/carousel2/img1.jpeg',
            alt: '',
            width: 485,
            height: 304
        },
        {
            image: '/images/carousel2/img2.jpeg',
            alt: '',
            width: 364,
            height: 264
        },
        {
            image: '/images/carousel2/img3.jpeg',
            alt: '',
            width: 384,
            height: 278
        },
        {
            image: '/images/carousel2/img4.jpeg',
            alt: '',
            width: 334,
            height: 242
        }
    ]



        // scrollTrigger: {
        //     trigger: containerRef.current,
        //     pin: true,
        //     anticipatePin: true,
        //     scrub: 1,
        //     markers: false,
        //     start: () => `top top`,
        //     end: '+=50%',
        // },


    useGSAP(() => {


    });

    return (
        <Container data-name='part' >
            <Wrapper>
            

                <Header data-name='header'>
                    <Name>
                        {t('navigation.part4')}
                    </Name>
                    <Separator>/</Separator>
                    <Title>
                        {t('design_title')}
                    </Title>
                </Header>


                <ImageBox ref={imagebox} data-name='imagebox'>
                    <Image
                        ref={image}
                        src={`/images/image4.jpg`}
                        priority
                        // fill
                        width={1280}
                        height={924}
                        alt=""
                    />
                    <Gradient />
                </ImageBox>

                <div  data-speed="1.2">
                    <Text>
                        {t('design_text0')}
                    </Text>

                    <Text>
                        {t('design_text1')}
                    </Text>
                </div>

                <Carousel data={carouselData} />
           
                <Sequence data={{ frames: 27, folder: 'One' }} />

                <Text data-speed="1.2">
                    {t('design_text2')}
                </Text>

            </Wrapper>
        </Container>
    );
};

export default Part4;
