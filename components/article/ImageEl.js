import styled from 'styled-components';
import Image from 'next/image';
import { device } from '~/config/utils';

const Container = styled.div`
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    max-width: 1062px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 1.8;
    width: calc(100% - 40px);
    @media ${device.laptopL} {
        width: 100%;
    }

    img {
        object-fit: cover;
        object-position: center center;
    }

    @media ${device.tablet} {
    }
`;

const ImageIcon = styled.div`
    position: absolute;
    top: -16px;
    left: -16px;
    @media ${device.tablet} {
    }
`;

const ImageEl = ({ data }) => {
    return (
        <Container>
            <Wrapper>
                <ImageIcon>
                    <svg
                        width="109"
                        height="109"
                        viewBox="0 0 109 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 109L-4.76454e-06 0L109 -4.76454e-06L52 54L0 109Z"
                            fill="#3DFECB"
                        />
                    </svg>
                </ImageIcon>
                <Image src={data} layout="fill" alt="aritlce-image" />
            </Wrapper>
        </Container>
    );
};

export default ImageEl;
