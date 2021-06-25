import styled from 'styled-components'

export const Tag=styled.div`
    background-color: aquamarine;
    border: 1px solid red;
    border-radius: 12px;
    min-width: 75px;
    text-align: center;
    margin-inline: 10px;
    margin-block: 5px;
`;


export const Container= styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    justify-content: center;
    max-height: 70px;
    &.fixed-styled{
        position: fixed;
        top : ${props=>props.top?props.top+'px': '0'}
    }
`;