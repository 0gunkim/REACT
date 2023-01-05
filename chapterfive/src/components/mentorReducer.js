export default function mentorReducer(person, action) {
    switch (action.type) {
        case 'updated': {
            const {prev, current} = action;
            return {
                ...person, mentors: person.mentors.map((mentor)=>{
                    if(mentor.name === prev){
                        return {...mentor, name:current};
                    }
                    return mentor;
                    
                })
            }
        }
        case 'added': {
            const { name, title } = action;
          return {
                ...person, mentors: [...person.mentors, {name, title}],
        };
    }
        case 'deleted': {
            const {deleteName} = action;
            return {
                ...person, 
            mentors: person.mentors.filter((d) => d.name !== deleteName),
            }
        }
        default: {
            throw Error(`알수없는 액션 타입니다: ${action.type}`)
        }

 }
};