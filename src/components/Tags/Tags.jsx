import React,{useState, useEffect} from 'react';
import {Tag, Container} from './style';
export function ItemTag({text}) {
    return (
        <Tag>
            {text} 
        </Tag>
    )
}


export function TagContaineer({children, fixed, top}) {
    return(
        <Container className={fixed?'fixed-styled':''} top={top}>
            {children}
        </Container>
    )
    
}


export function TagComponent({items, isFixed, top}){
    const [fixed, setFixed] = useState(false)
    const onScroll= e =>{ 
        const newShowFixed= window.scrollY > window.innerHeight - 70
        fixed !== newShowFixed && setFixed(newShowFixed)
    };
    useEffect(()=>{
        if (isFixed) {
            window.addEventListener('scroll',onScroll);
            return () => {
                window.removeEventListener('scroll', (e)=>console.log(e));
            };
        }

    },[fixed])
    return(
        <TagContaineer fixed={fixed} top={top}>
            {items.map((item, index)=>(
                <ItemTag key={index} text={item}/>
            ))}
        </TagContaineer>
    )
    
}