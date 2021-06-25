import React,{useState, useEffect} from 'react';

export default function Public({children}) {
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
        <div style={{height: '100vh'}}>
            <div>
                <div className="header">
                    <h1>alv</h1>
                    <nav className={showFixed?'fixed':''}>
                        <div>LOGO</div>
                        <ul>
                            <li>Buscar</li>
                            <li>notificaciones</li>
                            <li>login</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {
                children
            }
        </div>
        
    )
}
