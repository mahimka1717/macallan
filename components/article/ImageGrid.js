import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    border: 1px solid black;
    background-color: red;
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    max-width: 1810px;
    margin: 0 auto;
    border: 1px solid black;
    @media ${device.tablet} {
    }
`;

const Grid = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    img {
        object-fit: cover;
        object-position: center center;
    }
    @media ${device.tablet} {
    }
`;

const GridImage = styled.div`
    aspect-ratio: 1;
    width: 100%;
    position: relative;

    &[data-pos='0'] {
        max-width: 46%;
        aspect-ratio: 167 / 160;
    }

    &[data-pos='1'] {
        max-width: 52%;
        aspect-ratio: 74 / 49;
    }

    &[data-pos='2'] {
        max-width: 51%;
        aspect-ratio: 28 / 25;
    }

    &[data-pos='3'] {
        max-width: 46%;
        aspect-ratio: 28 / 25;
    }

    @media ${device.tablet} {
    }
`;

const Subgrid = styled.div`
    max-width: 50%;
    flex-basis: 50%;

    @media ${device.tablet} {
    }
`;

const MainImage = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 0.97;
    @media ${device.tablet} {
    }
`;

const ImageGrid = ({ data }) => {
    const grid = useRef();

    useEffect(() => {
        import('packery').then((pck) => {
            var pckry = new pck.default(grid.current, {
                itemSelector: '.grid-item',
                gutter: 8,
                percentPosition: true,
                resize: false,
            });
        });
    }, [grid]);

    return (
        <Container>
            <Wrapper>
                <Grid>
                    <Subgrid>
                        <MainImage>
                            <Image
                                layout="fill"
                                src="https://ft.com/partnercontent/macallan/grid/one.jpeg"
                                alt=""
                            />
                        </MainImage>
                    </Subgrid>
                    <Subgrid ref={grid}>
                        {data.images.map((img, i) => {
                            return (
                                <GridImage
                                    key={i}
                                    className="grid-item"
                                    data-pos={i}
                                >
                                    <Image layout="fill" src={img} alt="" />
                                </GridImage>
                            );
                        })}
                    </Subgrid>
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default ImageGrid;
