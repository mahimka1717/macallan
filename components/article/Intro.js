import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // z-index: 2;
    // margin-bottom: calc(-100vh - 100px);
    // background: #001217;
    // position: relative;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 628px;
    height: 100%;
`;


const IntroTitle = styled.h2`

    color: white;
    width: 100%;
    
    font-family: bellefair, sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.72px;
    text-transform: uppercase;

    margin-bottom: 24px;

`;

const IntroText = styled.p`
    color: #C4C5CA;
    width: 100%;

    font-family: effra, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;

    margin-bottom: 20px;
`;



const Intro = ({ data }) => {
    const { t } = useTranslation();


    return (
        <Container data-name="intro">
            <Wrapper>
            

                <IntroTitle>
                    {t('intro_title')}
                </IntroTitle>


                <IntroText>
                    {t('intro_text0')}
                </IntroText>

                <IntroText>
                    {t('intro_text1')}
                </IntroText>

                <IntroText>
                    {t('intro_text2')}
                </IntroText>

            </Wrapper>
        </Container>
    );
};

export default Intro;
