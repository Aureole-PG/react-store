import React,{useEffect, useState} from 'react';

import {TagComponent} from './../components/Tags/Tags'
export default function Home() {
    
    return (
        <>
            
            <div className="content">
            <TagComponent isFixed={true} top={75} items={['tag1', 'tag2','tag1', 'tag2','tag1', 'tag2','tag1', 'tag2']}/>
                <div className="grild-layout">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur ea non ipsum pariatur iste doloribus debitis in, nam ipsa ipsam! Consequuntur id nihil error quo nulla, obcaecati voluptates odit!
            </div>
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur ea non ipsum pariatur iste doloribus debitis in, nam ipsa ipsam! Consequuntur id nihil error quo nulla, obcaecati voluptates odit!
            </div>
        </>
    )
}
