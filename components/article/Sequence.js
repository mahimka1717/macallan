import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Quote from '~/components/article/Quote';
gsap.registerPlugin(useGSAP);

const Container = styled.div`
    padding-top: 20%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
`;
const Wrapper = styled.div`
    position: relative;
    background-color: black;

    @media ${device.tablet} {
    }

    canvas {
        transform: scale(1.3);
        @media ${device.tablet} {
        }
    }
`;


// const Gradienttop = styled.div`
//     width: 100%;
//     height: 200px;
//     background: linear-gradient(180deg, rgba(0, 18, 23, 1) 0%, rgba(0, 18, 23, 0) 100%);
//     position: absolute;
//     top:143px;
//     left: 0;
//     // border: 1px solid red;
// `;
const Gradientbottom = styled.div`
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(0, 18, 23, 0) 0%, rgba(0, 18, 23, 1) 100%);
    position: absolute;
    bottom:0px;
    left: 0;
`;

const Sequence = ({ data }) => {
    const canvasRef = useRef();
    const containerRef = useRef();
    const { t } = useTranslation();

    useEffect(() => {
        const frameCount = data.frames;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const images = [];
        const sequence = { frame: 0 };
        const currentFrame = (index) =>
            `/sequence/${data.folder}/frame${index + 1}.png`;

        const mqm = window.matchMedia('screen and (max-width: 500px)').matches;
        const mqt = window.matchMedia(
            'screen and (max-width: 1220px) and (min-width: 501px)'
        ).matches;
        const mqd = window.matchMedia('screen and (min-width: 1221px)').matches;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // if (mqm) {
        //     canvas.width = window.innerWidth * 4.5;
        //     canvas.height = (3 * window.innerWidth) / 1;
        // }

        // if (mqt) {
        //     canvas.width = window.innerWidth * 2;
        //     canvas.height = (3 * window.innerWidth) / 2;
        // }

        // if (mqd) {
        //     canvas.width = window.innerWidth;
        //     canvas.height = window.innerHeight;
        // }

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
            images[i].onload = (e) => {
                if (sequence.frame === i) render(i);
            };
        }

        gsap.to(sequence, {
            frame: frameCount - 1,
            snap: 'frame',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                anticipatePin: true,
                scrub: 1,
                markers: false,
                start: () => `top top`,
                end: '+=50%',
            },
            onUpdate: () => {
                render(sequence.frame);
            },
        });



        function render(i) {
            if (images[i].complete && images[i].naturalHeight !== 0) {
                context.clearRect(0, 0, canvas.width, canvas.height);

                // context.drawImage(images[i], 0, 0, canvas.width, canvas.height);

                context.drawImage(
                    images[i],
                    0,
                    0,
                    images[i].width,
                    images[i].height, // source rectangle
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            }
        }
    }, []);

    return (
        <Container>
            <Wrapper ref={containerRef}>
                <canvas ref={canvasRef} id={`sequence1`} />
                {
                    (data.folder==='One') && <Quote
                        data-name="quote"
                        loaded={true}
                        data={{
                            "quote": t('design_quote'),
                            "author": t('design_quote_author')
                        }}   
                    />
                }
            </Wrapper>
            {/* <Gradienttop /> */}
            <Gradientbottom />
        </Container>
    );
};

export default Sequence;
