import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    margin-top: 200px;
    margin-bottom: 200px;
    position: relative;
`;

const Wrapper = styled.div`
    position: relative;
`;

const Glow = styled.div`
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
`;

const GridElement = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-rows: repeat(2, 1fr);
`;

const ImageGrid = styled.div`

    position: relative;
    margin: 4px;
    overflow: hidden;

    &[data-id='0'] {
        grid-row: 1 / span 2;
        grid-column: 1;
    }
    &[data-id='1'] {
        grid-row: 1;
        grid-column: 2;
        align-self: end;
    }
    &[data-id='2'] {
        grid-row: 1;
        grid-column: 3;
        align-self: end;
        margin-left: -25px;
        // justify-self: end;
    }
    &[data-id='3'] {
        grid-row: 2;
        grid-column: 2;
        align-self: start;
    }
    &[data-id='4'] {
        grid-row: 2;
        grid-column: 3;
        align-self: start;
    }

    img{
        position: relative;
        object-fit: cover;
        object-position: center center;
    }

`;





const Grid = ({ data, glow = true }) => {
    const grid = useRef();

    useEffect(() => {

    }, [grid]);

    return (
        <Container>

            {
                (glow) && (

                    <Glow data-sped="0.5" data-name="glow">
                        <Image
                            src={"/images/glow.png"} 
                            alt="" 
                            width={3019}
                            height={645}
                        />
                    </Glow> 

                )
            }




            <Wrapper>
                <GridElement ref={grid} data-name="grid">
                {
                    data.map((item, index ) => (
                        
                        <ImageGrid 
                            key={index}
                            data-id={index}
                            data-name={"gridimage"}
                            style={{
                                width: item.width,
                                height: item.height
                            }}
                        >
                        
                            <Image
                                src={item.image} 
                                alt={item.alt} 
                                width={item.width}
                                height={item.height}
                            />

                        </ImageGrid>
                    ))
                }
                </GridElement>
            </Wrapper>
        </Container>
    );
};

export default Grid;
