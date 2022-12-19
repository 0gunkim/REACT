import React, {useState} from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: 'max',
        title: '주니어 개발자',
        mentor: {
            name: 'bob',
            title: '시니어 개발자',
        }
    })
    // const changeHandler = person.mentor.title;
    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p>{person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})</p>
            <button onClick={()=>{
                const name = prompt(`what's your mentor's name?`);
                setPerson(person => ({...person, mentor: {...person, name}}))

            }}>멘토 이름 바꾸기</button>
            <button onClick={(e)=>{
                const title = prompt(`what's your mentor's name?`, `title change`);
                setPerson(person => ({...person, mentor: {...person, title}
            }))
            }}>멘토 타이틀 바꾸기</button>
        </div>
    );
}

