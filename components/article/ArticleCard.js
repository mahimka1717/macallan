import styled from 'styled-components';
import { device } from '~/config/utils';
import Link from 'next/link';
import Image from 'next/legacy/image';

const Container = styled.div`
    max-width: 100%;
    flex-basis: 100%;

    @media ${device.tablet} {
        max-width: 50%;
        flex-basis: 50%;
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const Card = styled.div`
    @media ${device.tablet} {
    }
    &:hover {
    }
`;

const Content = styled.div`
    font-family: MetricWeb, sans-serif;

    @media ${device.tablet} {
    }
`;

const Title = styled.div`
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: 10px;
    @media ${device.tablet} {
        font-size: 30px;
    }
`;

const Desc = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 20px;
    @media ${device.tablet} {
    }
`;

const Button = styled.div`
    font-weight: 600;
    text-transform: uppercase;
    background-color: #3dfecb;
    display: inline-block;
    padding: 5px 15px;
    svg {
        margin-left: 10px;
    }
    @media ${device.tablet} {
    }
`;

const ImageWrapper = styled.div`
    aspect-ratio: 0.8;
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 40px;
    overflow: hidden;

    img {
        object-fit: cover;
        object-position: center center;
        z-index: 2;
    }

    svg {
        position: absolute;
        right: -16px;
        top: -16px;
        z-index: 1;
    }

    @media ${device.tablet} {
    }
`;

const ArticleCard = ({ data }) => {
    return (
        <Container>
            <Link href={`/article/${data.id}`}>
                <Wrapper>
                    <Card>
                        <ImageWrapper className="artCard">
                            <Image
                                src={data.metaData.articleImage}
                                layout="fill"
                                alt="card image"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="109"
                                height="109"
                                viewBox="0 0 109 109"
                                fill="none"
                            >
                                <path
                                    d="M0 0H109V109L55 52L0 0Z"
                                    fill="#3DFECB"
                                />
                            </svg>
                        </ImageWrapper>
                        <Content>
                            <Title>{data.metaData.title}</Title>
                            <Desc>{data.metaData.desc}</Desc>
                            <Button>
                                Read more
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M1 7.99927H15M15 7.99927L8 0.999268M15 7.99927L8 14.9993"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </Content>
                    </Card>
                </Wrapper>
            </Link>
        </Container>
    );
};

export default ArticleCard;
