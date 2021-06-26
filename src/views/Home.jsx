import React from 'react';

import ItemCard from './../components/Cards/ItemCard';
import {Container, Grild} from './../styles/containers';
export default function Home() {
    
    return (
        <>
            
            <Container full>
                <Grild>
                    {[1,2,3,4,5,6,7,8,9,10].map(e=>(
                        <ItemCard key={e}/>
                    ))}
                </Grild>
            </Container>
            
        </>
    )
}
