import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Grid from '~/components/article/Grid';
import { useRef, useLayoutEffect } from 'react';

import gsap, { Elastic, Power0, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Container = styled.div`
    // border: 1px solid red;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 140px;
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

const Part1 = ({ data }) => {
    const { t } = useTranslation();
    const header = useRef();
    const headerwrapper = useRef();
    const part = useRef();
    const imagebox = useRef();
    const image = useRef();

    const gridData = [
        {
            image: '/images/grid1/img0.jpeg',
            alt: '',
            width: 559,
            height: 700
        },
        {
            image: '/images/grid1/img1.jpeg',
            alt: '',
            width: 334,
            height: 319
        },
        {
            image: '/images/grid1/img2.jpeg',
            alt: '',
            width: 371,
            height: 245
        },
        {
            image: '/images/grid1/img3.jpeg',
            alt: '',
            width: 364,
            height: 325
        },
        {
            image: '/images/grid1/img4.jpeg',
            alt: '',
            width: 341,
            height: 264
        }
    ]

    // let halfWindowHeight;
    
    // useLayoutEffect(() => {
    //     halfWindowHeight = window.innerHeight / 2;
    // }, []);


    useGSAP(() => {
        

        // let imageWidth = 1280; // реальная ширина изображения
        // let imageHeight = 924; // реальная высота изображения
        
        // let viewportWidth = window.innerWidth; // ширина окна
        // let viewportHeight = window.innerHeight; // высота окна
        
        // let scaleX = viewportWidth / imageWidth; // масштаб по ширине
        // let scaleY = viewportHeight / imageHeight; // масштаб по высоте
        
        // let scale = Math.max(scaleX, scaleY); // выбираем больший масштаб, чтобы изображение полностью заполнило экран


        



        // ScrollTrigger.create({
        //     trigger: part.current,
        //     start: 'top top',
        //     end: `+=${200}`,
        //     scrub: 1,
        //     pin: true,
        //     anticipatePin: 1,
        //     pinSpacing: true,
        //     markers: true,

        // });





        // let tl1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: part.current,
        //         start: 'top top',
        //         end: `+=${200}`,
        //         scrub: 1,
        //         pin: true,
        //         anticipatePin: 1,
        //         pinSpacing: true,
        //         markers: true,
        //     },
        //   });
        //   tl1.to(imagebox.current, { scale: scale })
        //   tl1.to(header.current, { y: halfWindowHeight }, 0)
      




        // let tl2 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: part.current,
        //         start: 'top top',
        //         end: `+=${200}`,
        //         scrub: 1,
        //         // markers: true,
        //     },
        //   });
        //   tl2.to(imagebox.current, { scale: scale })
        //   tl2.to(header.current, { y: halfWindowHeight }, 0)

    });



    return (
        <Container data-name='part' ref={part}>
            <Wrapper>
            

                <Header ref={header} data-name='header'>
                    <Name>
                        {t('navigation.part1')}
                    </Name>
                    <Separator>/</Separator>
                    <Title>
                        {t('history_title')}
                    </Title>
                </Header>


                <ImageBox ref={imagebox} data-name='imagebox'>
                    <Image
                        ref={image}
                        src={`/images/image1.jpg`}
                        priority
                        // fill
                        width={1280}
                        height={924}
                        alt=""
                    />
                    <Gradient />
                </ImageBox>


                <Text data-speed="1.2">
                    {t('history_text0')}
                </Text>


                <Grid data={gridData} />
              

                <div data-speed="1.2">
                    <Text >
                        {t('history_text1')}
                    </Text>

                    <Text>
                        {t('history_text2')}
                    </Text>
                </div>

            </Wrapper>
        </Container>
    );
};

export default Part1;
