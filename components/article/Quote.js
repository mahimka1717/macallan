import Image from 'next/legacy/image';
import styled from 'styled-components';
import { device } from '~/config/utils';

import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from '~/gsap/dist/SplitText';
import { useIsomorphicLayoutEffect } from '~/config/useIso';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;



const Wrapper = styled.div`
    position: relative;
    max-width: 628px;
    width: 100%;
    padding: 100px 44px;

    @media ${device.tablet} {
        
    }
`;

const Content = styled.div`
    color: var(--White, #FFF);

    text-align: center;
    font-family: bellefair;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-transform: uppercase;
    min-width: 100%;
    width: 540px;
    margin-bottom: 16px;
`;



const Author = styled.div`
    color: var(--White, #FFF);
    text-align: center;
    font-family: effra;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    width: 540px;
`;



const Lineleft = styled.div`
    width: calc(50% - 314px);
    position: absolute;
    top: calc(50% - 20px);
    left: 0;
    height: 1px;
    background: #fff;
    transform-origin: 100% 0;
`;

const Lineright = styled.div`
    width: calc(50% - 314px);
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% + 314px);
    height: 1px;
    background: #fff;
    transform-origin: 0% 0;
`;


const Quote = ({ data, loaded }) => {
    const quoteContainer = useRef();
    const quote = useRef();
    const author = useRef();
    const lineleft = useRef();
    const lineright = useRef();

    useEffect(() => {

        const split = new SplitText([quote.current, author.current], {
            type: 'lines',
        });

        split.lines.forEach((target) => {
            gsap.from(target, {
                duration: 0.5,
                y: 100,
                autoAlpha: 0,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: target,
                    scrub: 1,
                    markers: false,
                    end: () => `top 70%`
                },
            });
        });

        gsap.from(lineleft.current, {
            duration: 0.5,
            scaleX: 0,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: lineleft.current,
                scrub: 1,
                markers: false,
                end: () => `top 70%`
            },
        });
        gsap.from(lineright.current, {
            duration: 0.5,
            scaleX: 0,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: lineright.current,
                scrub: 1,
                markers: false,
                end: () => `top 70%`
            },
        });


    });


    return (
        <Container ref={quoteContainer}>
            <Lineleft ref={lineleft} />
            <Lineright ref={lineright} />
            <Wrapper>
                <Content ref={quote} className="quote__animated">
                    {data.quote}
                </Content>
                <Author ref={author} className="author__animated">
                    {data.author}
                </Author>
            </Wrapper>
        </Container>
    );
};

export default Quote;
