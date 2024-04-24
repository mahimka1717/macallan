import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
    width: 100%;
    position: relative;
    margin-top: 100px;
    // margin-top: 200px;
    // margin-bottom: 200px;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const Glow = styled.div`
    position: absolute;
    top: -130px;
    left: 50%;
    transform: translateX(-50%);
`;



const CarouselElement = styled.div`
    display: flex;
    align-items: flex-end;
    position: relative;

    img{
        position: relative;
        margin: 4px;
        object-fit: cover;
        object-position: center bottom;
    }
`;





const Carousel = ({ data }) => {

    const carouselRef = useRef();

    useGSAP(() => {



        // calculate carousel width
        let carouselWidth = 0;
        data.forEach(item => {
            carouselWidth += item.width + 8;
        });

        // calculate window width
        let windowWidth = window.innerWidth;
        let dX = windowWidth - carouselWidth;


        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: carouselRef.current,
                start: 'top bottom',
                end: `bottom top`,
                scrub: true,
            }
        });
        tl.to(carouselRef.current, {x: dX, duration: 1, ease: 'none'})


    }, []);



    return (
        <Container data-name="carousel">
                <Glow data-sped="0.5" data-name="carouselglow">
                    <Image
                        src={"/images/glow.png"} 
                        alt="" 
                        width={3019}
                        height={645}
                    />
                </Glow> 
            <Wrapper>
                <CarouselElement ref={carouselRef} data-name="carouselslider">
                {
                    data.map((item, index ) => (
                        <Image
                            data-name="carouselimage"
                            key={index}
                            src={item.image} 
                            alt={item.alt} 
                            width={item.width}
                            style={{ minWidth: item.width }}
                            height={item.height}
                        />  
                    ))
                }
                </CarouselElement>
            </Wrapper>
        </Container>
    );
};

export default Carousel;
