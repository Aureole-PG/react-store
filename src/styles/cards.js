import styled from 'styled-components';

export const Card = styled.div`
    background-color: #ffffff5c;
    backdrop-filter: blur(1px);
    &.hover{
        :hover{
            box-shadow: 0px 0px 13px 0px #ffffffa3;
        }
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 300px;

`;