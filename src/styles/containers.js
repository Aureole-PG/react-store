import styled from 'styled-components';

export const Container= styled.div`
    height: ${props=>props.full?'100vh': 'auto'};
    width: 100%;
    padding: ${props=>props.padding?props.padding:''};
    &.space-bettwen{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &.center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.centerY{
        display: flex;
        align-items: center;
    }
    &.centerX{
        display: flex;
        justify-content: center;
    }
    &.crystal{
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, .15); 
    }
    &.hover{
        :hover{
            box-shadow: 0px 0px 13px 0px #ffffffa3;
        }
    }

`;


export const Grild = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(${props=>props.width?props.width:'300px'}, 1fr));
    column-gap: 25px;
    row-gap: 10px;
    padding-inline: 20px;
`;