import React, {useState, useReducer} from 'react';
import mentorReducer from './components/mentorReducer';

export default function AppMentors() {
    const [person, dispatch] = useReducer(mentorReducer, initialPerson)

    const onEditHandlerButton = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({type:'updated', prev, current})
    }
    
    const onAddHandlerButton = () => {
        const name = prompt(`누구를 추가할까요?`);
        const title = prompt(`무슨 개발자 인가요?`);
        dispatch({type:'added', name, title})
    }
    // 추가할 때 변수명과 키값이 같게 해야한다
    
    const onDeleteHandlerButton = () => {
        const deleteName = prompt(`누구를 지우겠습니까?`);
        dispatch({type:'deleted', deleteName})
    }
    
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name}({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={onEditHandlerButton}>
                멘토의 이름을 바꾸기
            </button>
            <button onClick={onAddHandlerButton}>
                멘토 추가하기
            </button>
            <button onClick={onDeleteHandlerButton}>
                멘토 삭제하기
            </button>
        </div>
    );
}
const initialPerson = {
    name: '멕스',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        }
    ]
}
