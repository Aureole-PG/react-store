import React,{useEffect, useState} from 'react'
import {Container} from '../../styles/containers';
import {NavStyle, Item} from '../../styles/Navs';
export default function Nav() {
    const [showFixed, setShowFixed] = useState(false);
    const onScroll= e =>{ 
        const newShowFixed= window.scrollY > window.innerHeight - 70
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
    };
    useEffect(()=>{
        
        window.addEventListener('scroll',onScroll);
        return () => {
            window.removeEventListener('scroll', (e)=>console.log(e));
          };
    }, [showFixed])
    return (
        <NavStyle className={`${showFixed?'fixed':'bottom'} shadow`}>
            <Container className="space-bettwen">
                <div>log</div> 
                <ul>
                    <Item>Buscar</Item>
                    <Item>Notificaciones</Item>
                </ul>
            </Container>
        </NavStyle>
    )
}
