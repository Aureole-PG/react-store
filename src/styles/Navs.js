import styled from 'styled-components';


export const NavStyle = styled.nav`
    background-color: rgba(255, 255, 255, .15);  
    position: ${props=>props.position?props.position:'absolute'};
    padding-inline: 15px;
    width: 100%;
    height: 70px;
    backdrop-filter: blur(5px);
    &.shadow{
        box-shadow: 0px 15px 10px -15px #111;
    }
    &.bottom{
        bottom: 0;
    }
    &.fixed{
        position: fixed;
        top: 0;
        height: 70px;
        z-index: 1;
    }
`;


export const Item = styled.li`
    display: inline-block;
	padding: 24px 10px;
`