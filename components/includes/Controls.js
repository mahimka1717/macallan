import { useRouter } from 'next/router';
import styled from 'styled-components';
import { device } from '~/config/utils';
import { useRef, useState, useEffect } from 'react';
import gsap, { Elastic, Power0, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '~/components/includes/LanguageSwitcher';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 18, 23, 0.5) 0%, rgba(0, 18, 23, 0) 100%);

    // height: 100%;
    // min-height: 100svh;
    pointer-events: none;
    z-index: 10;
`;

const Wrapper = styled.div`
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1220px;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 30px 0;
    pointer-events: auto;
`;

const Navigation = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
`;

const Line = styled.div`
    width: 100%;
    position: absolute;
    height: 1px;
    background: white;
    top: 40%;

    transform: scaleX(0);
    transform-origin: 100% 0;
    transition: transform 0.5s ease-out;
`;

const NavItem = styled.div`
    color: white;
    font-family: bellefair;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
    margin: 10px 20px;
    cursor: pointer;
    position: relative;

    &:hover ${Line} {
        transform: scaleX(1);
        transform-origin: 0 0;
    }
`;

const Span = styled.span`
    opacity: ${props => props.$isActive ? '1' : '0.5'};
    transition: all 0.5s ease-out;
`;

const FlexDiv = styled.div`
    min-width: 130px;
`;


const Controls = ({ data }) => {
    const { t } = useTranslation();
    const [currentPart, setCurrentPart] = useState(-1);
    const controls = useRef();
    const navigation = useRef();


    useEffect(() => {
        const parts = document.querySelectorAll("div[data-name='part']");
        parts.forEach((part, index) => {
            gsap.to(part, {
                scrollTrigger: {
                    trigger: part,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setCurrentPart(index),
                    onLeaveBack: () => setCurrentPart(index - 1),
                },
            });
        });
    }, []);


    useEffect(() => {
        // console.log(currentPart);
    }, [currentPart]);


    useGSAP(() => {
        ScrollTrigger.create({
            trigger: controls.current,
            start: "top top",
            endTrigger: "html",
            end: "bottom bottom",
            pin: true,
            scrub: true,
        });



        // get all parts


        const showNav = () => {
            gsap.fromTo(navigation.current, {
                autoAlpha: 0, y: 0}, {autoAlpha: 1, y: 0,
                duration: 0.5,
                ease: Power2.easeOut,
            });
        };

        const hideNav = () => {
            gsap.fromTo(navigation.current, {
                autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 0,
                duration: 0.5,
                ease: Power2.easeOut,
            });
        };

        gsap.set(navigation.current, { autoAlpha: 0 });
        const parts = document.querySelectorAll("div[data-name='part']");
        parts.forEach((part, index) => {
            gsap.to(part, {
                scrollTrigger: {
                    trigger: part,
                    start: "top 50px",
                    end: "500 top",
                    fastScrollEnd: 3000,
                    markers: false,
                    onEnter: () => showNav(),
                    onLeaveBack: () => hideNav(),
                    onLeave: () => hideNav(),
                    onEnterBack: () => showNav(),
                },
            });
        });





    });

    return (
        <Container ref={controls}>
            <Wrapper>

                <FlexDiv />

                <Navigation ref={navigation}>
                    {Object.entries(t('navigation', { returnObjects: true })).map(([key, item], i) => {
                        return (
                            <NavItem
                                key={i}
                                onMouseEnter={() => {
                                }}
                                onMouseLeave={() => {
                                }}
                                onClick={() => {
                                    const part = document.querySelectorAll("div[data-name='part']")[i];
                                    window.scrollTo({ top: part.offsetTop, behavior: 'smooth' });
                                }}
                            >
                                <Span $isActive={currentPart === i}>{item}</Span>
                                <Line />
                            </NavItem>
                        );
                    })}
                </Navigation>

                <LanguageSwitcher />

                
            </Wrapper>
        </Container>
    );
};

export default Controls;
