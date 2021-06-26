import React from 'react'
import {Card, Img} from '../../styles/cards';
import {Container} from '../../styles/containers';
export default function ItemCard() {
    return (
        <Card>
            <Img src="https://via.placeholder.com/300" alt="" />
            <Container padding={'0 0 15px'}>
                <Container padding={'10px'}>
                    <h1>Name</h1>
                </Container>
                <Container padding={'0 10px 0 10px'} className="space-bettwen">
                    <Container>
                        <Container padding={'0 10px 0 10px'} className="space-bettwen">
                            <p>Autor</p>
                            <p>name</p>
                        </Container>
                        <Container padding={'0 10px 0 10px'} className="space-bettwen">
                            <p>Style</p>
                            <p>name</p>
                        </Container>
                    </Container>
                    
                    <Container  className="center">
                        <h1>$100</h1>
                    </Container>
                </Container>
            </Container>
        </Card>
    )
}
