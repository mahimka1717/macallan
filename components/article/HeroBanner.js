import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import Image from 'next/image';

import gsap, { Elastic, Power0, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from '~/gsap/ScrollSmoother';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Container = styled.div`
    .mask {
        position: absolute;
        // z-index: 4;
        width: 100vw;
        height: 100vh;
        // background-color: hsl(193.04deg 100% 4.51% / 90.2%);
        background: #001217;
        mask: radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            transparent 100px,
            black 300px
        );
    }

    :root {
        --mouse-x: 10%;
        --mouse-y: 10%;
    }
`;

const Wrapper = styled.div`
    min-height: 100svh;
    width: 100%;
    // background: #001217;
    position: relative;

    @media ${device.tablet} {
    }
`;

const BackgroundContainer = styled.div`
    width: 100%;
    min-height: 100svh;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: auto;
        &.car {
            opacity: 0;
        }
        &.bottle {
            opacity: 0;
            transform-origin: center 47.0%;   
        }
        &.radial {
            opacity: 0;
            object-fit: cover;
            transform: translateX(0%) scale(0.9);
        }
    }
    @media ${device.tablet} {
    }
`;

const Header = styled.h1`

    color: var(--White, #FFF);
    text-align: center;
    font-family: bellefair;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -1.2px;
    text-transform: uppercase;
    width: 100%;

    position: absolute;
    width: 100%;
    text-align: center;
    // top: 320px;
    top: 260px;
    left: 0%;
    

    opacity: 0;

`;

const Button = styled.div`
    border-radius: 24px;
    background: rgba(15, 30, 38, 0.50);
    padding: 12px 17px 12px 24px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -65px);
    cursor: pointer;
    min-height: 48px;
    opacity: 0;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonLabel = styled.div`
    margin-right: 5px;
    color: white;
    font-family: effra, sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
`;

const ButtonIcon = styled.div`
    width: 24px;
    height: 24px;
`;


const HeroBanner = ({ data }) => {
    const { t } = useTranslation();
    const car = useRef();
    const bottle = useRef();
    const header = useRef();
    const container = useRef();
    const backgroundcontainer = useRef();
    const buttonRef = useRef();

    useGSAP(() => {
        // Get a reference to the .mask element.
        const mask = document.querySelector('.mask');
        const lswitcher = document.querySelector('[data-name="languageswitcher"]');
        gsap.set(lswitcher, {autoAlpha: 0})
        gsap.set(buttonRef.current, {autoAlpha: 0})
        
        // let smoother = ScrollSmoother.create({
        //     smooth: 1,
        //     effects: true,
        // });
        // smoother.paused(true);



        // gsap.set(bottle.current, {autoAlpha: 1})
        gsap.set(header.current, {y: 30})
        gsap.set(mask, {autoAlpha: 1})
        gsap.set(mask, {
            '--mouse-x': '20%',
            '--mouse-y': '50%',
        });


        // Listen for the mousemove event.
        document.addEventListener('mousemove', (e) => {
            // Calculate the mouse position as a percentage of the window's width and height.
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;

            // Update the CSS variables.
            gsap.to(mask, {
                '--mouse-x': `${mouseX}%`,
                '--mouse-y': `${mouseY}%`,
            });
        });


        // Listen for the mousemove event.
        const handleMouseMove = (e) => {

            // show image with bottle with 1 sec delay
            gsap.to( bottle.current, {autoAlpha: 1, duration: 1, delay: 2, ease: Power0.easeNone})

            // Remove the event listener after the first execution.
            document.removeEventListener('mousemove', handleMouseMove);
        };

        document.addEventListener('mousemove', handleMouseMove);



        const handleClick = (e) => {
            
            gsap.to( bottle.current, {autoAlpha: 1, duration: 1, ease: Power0.easeNone})
            
            gsap.to( mask,
                {
                    duration: 1.5,
                    autoAlpha: 0,
                    ease: Power2.easeOut,
                }
            );

            gsap.to( [lswitcher, buttonRef.current],
                {
                    duration: 1.5,
                    autoAlpha: 1,
                    ease: Power2.easeOut,
                }
            );

            gsap.to( bottle.current,
                {
                    duration: 1.0,
                    scale: 1.28,
                    ease: Power2.easeOut,
                }
            );
        
            gsap.to( header.current,
                {
                    duration: 1.5,
                    opacity: 1,
                    y: 0,
                    ease: Power2.easeOut,
                }
            );

            // smoother.paused(false);
            document.removeEventListener('click', handleClick);
        };

        document.addEventListener('click', handleClick);

        ScrollTrigger.create({
            trigger: backgroundcontainer.current,
            pin: backgroundcontainer.current,
            anticipatePin: true,
            start: 'top top',
            end: `bottom top`,
            onUpdate: (self) => {
            },
        });

        let tl1 = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: `500 top`,
                scrub: 1
            },
          });
          tl1.to(backgroundcontainer.current, { opacity: 0 })

        gsap.to( car.current, {autoAlpha: 1, duration: 2, ease: Power0.easeNone})

    }, []);


    return (
        <Container ref={container} >
            <Wrapper>
                <BackgroundContainer ref={backgroundcontainer}>
                    <Image
                        src="/images/hero0.jpg"
                        width="1440"
                        height="1024"
                        alt="background of car"
                        className="car"
                        ref={car}
                        priority={true}
                    />  
                    <Image
                        src="/images/hero1.jpg"
                        width="1440"
                        height="1024"
                        alt="background of bottle"
                        className="bottle"
                        ref={bottle}
                        priority={true}
                    />
                    <div className="mask"></div>

                    <Button ref={buttonRef}>
                        <ButtonWrapper>
                            <ButtonLabel>{t('hero_button_label')}</ButtonLabel>
                            <ButtonIcon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </ButtonIcon>
                        </ButtonWrapper>
                    </Button>

                </BackgroundContainer>


                




                <Header ref={header} >{t('hero_title')}</Header>

            </Wrapper>
        </Container>
    );
};

export default HeroBanner;
