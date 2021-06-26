import React from 'react';
import {Container} from './../styles/containers';
import Nav from '../components/Navs/HomeNav'
export default function Public({children}) {
    
    return (
        <Container full>
            <div>
                <div className="header">
                    <h1>alv</h1>
                    <Nav/>
                </div>
            </div>
            {
                children
            }
        </Container>
        
    )
}
