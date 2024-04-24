import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Grid from '~/components/article/Grid';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

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

const Carousel = styled.div`
    overflow: hidden;   
    position: relative;
    width: 100%;
`;

const Glow = styled.div`
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    // opacity: 0.5;
`;

const CarouselWrapper = styled.div`
    display: flex;
    position: relative;
    left: 0;
`;

const TextSLide = styled.div`
    // width: 100%;
    // min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #C4C5CA;
    width: 100%;

    font-family: effra, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;

    // margin-bottom: 20px;

    width: 100%;
    min-width: 450px;
    position: relative;
    // margin: 100px;
    margin: 100px;


    &:first-child {
        margin-top: -100px;
    }
`;

const Part1 = ({ data }) => {
    const { t } = useTranslation();
    const imagebox = useRef();
    const image = useRef();
    const gridData = [
        {
            image: '/images/grid2/img0.jpeg',
            alt: '',
            width: 559,
            height: 700
        },
        {
            image: '/images/grid2/img1.jpeg',
            alt: '',
            width: 334,
            height: 319
        },
        {
            image: '/images/grid2/img2.jpeg',
            alt: '',
            width: 371,
            height: 245
        },
        {
            image: '/images/grid2/img3.jpeg',
            alt: '',
            width: 364,
            height: 325
        },
        {
            image: '/images/grid2/img4.jpeg',
            alt: '',
            width: 341,
            height: 264
        }
    ]

    const carouselRef = useRef();
    const carouselWrapperRef = useRef();

    useEffect(() => {
        const carousel = carouselRef.current;
        const carouselWrapper = carouselWrapperRef.current;

        gsap.to(carouselWrapper, {  
            x: () => -(carouselWrapper.scrollWidth - carousel.clientWidth + 100),
            scrollTrigger: {
                trigger: carousel,
                start: "center center",
                end: () => `+=${carouselWrapper.scrollWidth - carousel.clientWidth + 100}`,
                pin: true,
                pinSpacing: true,
                scrub: true,
                // markers: true,
            },
        });

    }, []);


    return (
        <Container data-name='part' >
            <Wrapper>
            
                <Header data-name='header'>
                    <Name>
                        {t('navigation.part3')}
                    </Name>
                    <Separator>/</Separator>
                    <Title>
                        {t('technology_title')}
                    </Title>
                </Header>

                <ImageBox ref={imagebox} data-name='imagebox'>
                    <Image
                        ref={image}
                        src={`/images/image3.jpg`}
                        priority
                        // fill
                        width={1280}
                        height={924}
                        alt=""
                    />
                    <Gradient />
                </ImageBox>

                <Text data-speed="1.2">
                    {t('technology_text0')}
                </Text>

                <Carousel ref={carouselRef}>

                    <Glow data-sped="0.5" data-name="glow">
                        <Image
                            src={"/images/glow.png"} 
                            alt="" 
                            width={3019}
                            height={645}
                        />
                    </Glow> 


                    <CarouselWrapper ref={carouselWrapperRef}>
                        
                        <TextSLide className="text">
                            {t('technology_text1')}
                        </TextSLide>
                  
                        <Grid data={gridData} glow={false}/>
                   
                        <TextSLide className="text">
                            {t('technology_text2')}
                        </TextSLide>
                      
                    </CarouselWrapper>
                </Carousel>


            </Wrapper>
        </Container>
    );
};

export default Part1;
