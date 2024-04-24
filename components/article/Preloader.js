import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Container = styled.div`
    padding: 87px 0;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100svh;
    top: 0;
    left: 0;
    background: #001217;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
        
    }
`;

const Line = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    background-color: #D9D9D9;
    z-index: 1;
`;

const Title = styled.div`
    color: white;
    font-family: bellefair, sans-serif;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.72px;
    text-transform: uppercase;
`;

const Preloader = ({ data, loaded }) => {
    const { t } = useTranslation();
    const line = useRef();
    const title = useRef();

    return (
        <Container>
            <Wrapper>
                <Line ref={line} className="line__animated"></Line>
                <Title ref={title} className="title__animated">
                    {t('hero_title')}
                </Title>
            </Wrapper>
        </Container>
    );
};

export default Preloader;
