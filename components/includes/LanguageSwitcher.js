import { useRouter } from 'next/router';
import styled from 'styled-components';
import { device } from '~/config/utils';
import { useRef, useState } from 'react';
import gsap, { Elastic, Power0, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
    opacity: 0;
`;

const Wrapper = styled.div`
    min-width: 130px;
    position: relative;
    display: flex;
    justify-content: flex-end;
`;

const LanguageButton = styled.button`
    margin: 10px 0px 10px 0px;
    background: transparent;
    color: white;
    border: none;
    font-family: effra;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    cursor: pointer;
    opacity: ${props => props.$isActive ? 1 : 0.5};
    text-decoration: ${props => props.$isActive ? 'underline' : 'none'};
    text-underline-offset: 4px;
    transition: opacity 0.5s ease-out;
    &:hover {
        opacity: 1;
    }
`;

const LanguageSwitcher = ({ data }) => {
    const router = useRouter();
    const [activeLanguage, setActiveLanguage] = useState(router.locale);

    const changeLanguage = (lang) => {
        setActiveLanguage(lang);
        router.push(
            {
                pathname: router.pathname,
                query: router.query,
            },
            null,
            { locale: lang }
        );
    };

    return (
        <Container data-name="languageswitcher">
            <Wrapper>
                <LanguageButton $isActive={activeLanguage === 'en'} onClick={() => changeLanguage('en')}>
                    EN
                </LanguageButton>
                <LanguageButton $isActive={activeLanguage === 'cn'} onClick={() => changeLanguage('cn')}>
                    繁体中文
                </LanguageButton>
            </Wrapper>
        </Container>
    );
};

export default LanguageSwitcher;