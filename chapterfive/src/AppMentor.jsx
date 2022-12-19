import React, {useState} from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: 'max',
        title: 'developer',
        mentor: {
            name: '엘리',
            title: '시니어개발자',
        }
    })
    return (
        <div>
            
        </div>
    );
}

