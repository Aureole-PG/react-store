import styled from 'styled-components';

export const Tag = styled.button`
    background-color: #ffffff5c;
    border: 1px solid white;
    border-radius: 15px;
    min-width: 75px;
    text-align: center;
    margin-inline: 10px;
    margin-block: 5px;
    backdrop-filter: blur(1px);
    :active{
        background-color: #0000002e;
        color: white;
        border: 2px solid #ffffff78;
        box-shadow: 0px 0px 13px 0px #ffffffa3;
    }
`;

export const Button = styled.button`
    background-color: ${props.transparent?'':'#ffffff47'};  
    backdrop-filter: brightness(1);
    :hover{
        background-color: ${props.transparent?'#ffffff47':'#6b6b6b47'};
    }
    :active{
        background-color: ${props.transparent?'#ffffff47':'#6b6b6b47'};
    }
`;

