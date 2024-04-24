import styled from 'styled-components';
import { device } from '~/config/utils';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Container = styled.div`
    width: 100%;
    max-width: 599px;
    background: #223239;
    color: white;

    margin-bottom: 48px;
    border-radius: 8px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px 26px 8px 8px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;




const Textbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 29px 0 24px;
    max-width: 318px;
`;

const Title = styled.p`
    color: var(--White, #FFF);
    /* Text xl/Regular */
    font-family: Effra;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    margin: 0;
`;

const Text = styled.p`
    color: #C4C5CA;

    /* Text lg/Regular */
    font-family: Effra;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 155.556% */
    margin: 0;
`;


const Button = styled.div`
    border-radius: 4px;
    background: #36454B;
    padding: 0px 7px;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonLabel = styled.div`
    margin-left: 7px;
    color: white;
    font-family: effra, sans-serif;
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;

`;

const ButtonIcon = styled.div`

`;





const NextFive = ({ data }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <Wrapper>

            <Image
                src={`/images/nextfive.png`}
                width={88}
                height={88}
                alt=""
            />


            <Textbox>
                <Title>{t('next_title')}</Title>
                <Text>{t('next_text')}</Text>
            </Textbox>


            <Button>
                <ButtonWrapper>
                   
                    <ButtonIcon>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3978_469)">
                                <path d="M5.5387 11.1254C5.43328 10.8645 5.22863 10.656 4.96967 10.5458C4.71071 10.4356 4.4186 10.4326 4.15745 10.5375L3.4987 10.7996C3.36889 10.851 3.25058 10.9277 3.15062 11.0252C3.05065 11.1227 2.97102 11.239 2.91634 11.3675C2.86166 11.496 2.83301 11.634 2.83206 11.7736C2.8311 11.9132 2.85786 12.0517 2.91078 12.1809L4.32745 15.8004C4.37888 15.9303 4.45555 16.0486 4.55303 16.1485C4.65051 16.2485 4.76685 16.3281 4.89532 16.3828C5.02379 16.4375 5.16183 16.4661 5.30145 16.4671C5.44107 16.468 5.57949 16.4413 5.7087 16.3884L6.37453 16.0838C6.63548 15.9784 6.84395 15.7737 6.95417 15.5148C7.06439 15.2558 7.06737 14.9637 6.96245 14.7025L5.5387 11.1254Z" fill="white"/>
                                <path d="M8.49935 0.853516C6.33951 0.855391 4.26868 1.71421 2.74145 3.24145C1.21421 4.76868 0.355391 6.83951 0.353516 8.99935C0.353516 12.6827 2.47851 16.6139 2.56351 16.791C2.65745 16.9563 2.8132 17.0776 2.99652 17.128C3.17984 17.1785 3.3757 17.1541 3.54101 17.0602C3.70633 16.9662 3.82757 16.8105 3.87804 16.6272C3.92852 16.4439 3.90411 16.248 3.81018 16.0827C3.81018 16.0473 1.77018 12.3002 1.77018 8.99935C1.77018 7.21466 2.47915 5.50307 3.74111 4.24111C5.00307 2.97915 6.71466 2.27018 8.49935 2.27018C10.284 2.27018 11.9956 2.97915 13.2576 4.24111C14.5195 5.50307 15.2285 7.21466 15.2285 8.99935C15.2285 12.3143 13.2098 16.0827 13.1885 16.0827C13.1436 16.1645 13.1154 16.2544 13.1053 16.3471C13.0953 16.4399 13.1037 16.5337 13.13 16.6232C13.1563 16.7127 13.2001 16.7962 13.2587 16.8687C13.3174 16.9413 13.3898 17.0015 13.4718 17.046C13.5763 17.1024 13.6932 17.1316 13.8118 17.131C13.9393 17.1314 14.0644 17.0973 14.1741 17.0325C14.2838 16.9677 14.374 16.8745 14.4352 16.7627C14.5273 16.5998 16.6452 12.6685 16.6452 8.97101C16.6358 6.8161 15.7737 4.75253 14.2473 3.23141C12.7208 1.7103 10.6543 0.855368 8.49935 0.853516Z" fill="white"/>
                                <path d="M13.5001 10.7703L12.8414 10.5082C12.5802 10.4033 12.2881 10.4063 12.0292 10.5165C11.7702 10.6267 11.5656 10.8352 11.4601 11.0962L10.0435 14.7157C9.94251 14.9743 9.94676 15.2621 10.0553 15.5176C10.1639 15.7731 10.3681 15.976 10.6243 16.0828L11.283 16.3449C11.4141 16.4035 11.5558 16.4346 11.6994 16.4366C11.8429 16.4385 11.9854 16.4111 12.118 16.356C12.2506 16.301 12.3706 16.2195 12.4706 16.1165C12.5706 16.0135 12.6486 15.8912 12.6997 15.757L14.1164 12.1374C14.2154 11.8744 14.2061 11.5828 14.0906 11.3266C13.9751 11.0704 13.7628 10.8704 13.5001 10.7703Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_3978_469">
                                    <rect width="17" height="17" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </ButtonIcon>

                    <ButtonLabel>{t('next_button_label')}</ButtonLabel>

                </ButtonWrapper>
            </Button>








            </Wrapper>
        </Container>
    );
};

export default NextFive;
