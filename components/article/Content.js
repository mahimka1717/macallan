import styled from 'styled-components';
import { device } from '~/config/utils';

const ContentWrapper = styled.div`
    max-width: 1000px;
    padding: 30px 20px;
    margin: 0 auto;
    background-color: white;
    @media ${device.tablet} {
        padding: 50px;
    }

    &[data-pos='0'] {
        margin-top: 0%;
        @media ${device.tablet} {
            margin-top: -10%;
        }
        p {
            &:first-child {
                margin-top: 0;
            }
        }
    }
`;

const ContentText = styled.div`
    text-align: left;
    p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        @media ${device.tablet} {
            font-size: 20px;
            line-height: 28px;
            margin: 40px 0;
        }
    }
    a {
        text-decoration: underline;
        transition: 0.5s;
        &:hover {
            color: #259B7C;
        }
    }
`;

const Content = ({ data, id }) => {
    return (
        <ContentWrapper data-pos={id}>
            <ContentText
                className={data.hasDropCap ? 'dropCap' : ' '}
                dangerouslySetInnerHTML={{ __html: data.content }}
            />
        </ContentWrapper>
    );
};

export default Content;
