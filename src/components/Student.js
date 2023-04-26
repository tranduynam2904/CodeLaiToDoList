import { BsFillTrashFill } from 'react-icons/bs';
export default function Student(props){
return (
    <div className='student'>
        <span>{props.student.name}</span>
        <BsFillTrashFill onClick={()=>props.deleteStudent(props.student.id)}/>
    </div>
)
}