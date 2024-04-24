import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import NextFive from './NextFive';
import Image from 'next/image';

import { useRef, useLayoutEffect } from 'react';

import gsap, { Elastic, Power0, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from '~/gsap/ScrollSmoother';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative; 
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;





const MoreBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // padding: 50px 0 50px 0;
    max-width: 1280px;
    min-height: 558px;

    background: #001217px;
    position: relative;
    margin-bottom: 40px;
    // border: 1px solid white;
`;

const MoreImageBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    & img{
        object-fit: cover;
        object-position: center 60%;
        width: 100%;
        height: 100%;
    }

    .maskmore {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #001217;
        mask: radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            transparent 60px,
            black 120px
        );
    }

    :root {
        --mouse-x: 60%;
        --mouse-y: 40%;
    }
`;

const MoreTitle = styled.h2`
    color: #E4E5EB;

    text-align: center;
    font-family: bellefair;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px; /* 122.222% */
    letter-spacing: -0.72px;
    text-transform: uppercase;

    max-width: 816px;
    margin-bottom: 24px;
    position: relative;

    pointer-events: none;
`;

const MorePrompt = styled.p`
    color: #C4C5CA;
    text-align: center;
    font-family: effra;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */

    margin-bottom: 32px;
    position: relative;
    pointer-events: none;
`;



const Button = styled.div`
    border-radius: 24px;
    background: rgba(15, 30, 38, 0.50);
    padding: 8px 17px 8px 17px;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
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




const EndBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 48px
`;

const EndText = styled.div`
    color: var(--White, #FFF);

    text-align: center;
    font-family: effra;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */

    margin-bottom: 10px;
`;

const EndBoxLogo = styled.div`
    height: 14px;
    overflow: hidden;

    svg {
        position: relative;
        top: -14px;
        left: 0;
    }
`;


const Glow = styled.div`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%) scaleY(2);
    opacity: 0.95;
`;


const More = ({ data }) => {
    const { t } = useTranslation();
    const bottle = useRef();
    const morebox = useRef();

    useGSAP(() => {

        const mask = document.querySelector('.maskmore');
        gsap.set(mask, {
            '--mouse-x': '60%',
            '--mouse-y': '30%',
        });

        morebox.current.addEventListener('mousemove', (e) => {
            const rect = morebox.current.getBoundingClientRect();
            const mouseX = ((e.clientX - rect.left) / morebox.current.offsetWidth) * 100;
            const mouseY = ((e.clientY - rect.top) / morebox.current.offsetHeight) * 100;
            gsap.to(mask, {
                '--mouse-x': `${mouseX}%`,
                '--mouse-y': `${mouseY}%`,
                ease: 'power2.out', // добавьте это для эффекта инерции
                duration: 0.5, // и продолжительность анимации
            });
        });
    });


    return (
        <Container>
            <Wrapper>
            
                <Glow data-sped="0.5" data-name="glow">
                    <Image
                        src={"/images/glow.png"} 
                        alt="" 
                        width={3019}
                        height={645}
                    />
                </Glow> 

                <MoreBox ref={morebox}> 

                    <MoreImageBox>
                        <Image
                            src="/images/hero1.jpg"
                            width="1440"
                            height="1024"
                            alt="background of bottle"
                            className="bottle"
                            ref={bottle}
                            priority={true}
                        />
                        <div className="maskmore"></div>
                    </MoreImageBox>



                    <MoreTitle>
                        {t('more_title')}
                    </MoreTitle>

                    <MorePrompt>
                        {t('more_prompt')}
                    </MorePrompt>

                    <Button>
                        <ButtonWrapper>
                            <ButtonLabel>{t('more_button_label')}</ButtonLabel>
                        </ButtonWrapper>
                    </Button>


                </MoreBox>

                <NextFive />

                <EndBox>


                    <EndText>{t('end_text')}</EndText>

                    <EndBoxLogo>
                        <svg width="164" height="14" viewBox="0 0 164 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="164" height="14" fill="url(#pattern0_3827_9606)"/>
                            <defs>
                                <pattern id="pattern0_3827_9606" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_3827_9606" transform="matrix(0.00205339 0 0 0.024054 0 -0.00513347)"/>
                                </pattern>
                                <image id="image0_3827_9606" width="487" height="42" xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                    </EndBoxLogo>

                </EndBox>

            </Wrapper>
        </Container>
    );
};

export default More;
