import { useState } from "react"
import Student from "./Student"
import FormAdd from "./FormAdd"
export default function StudentList() {
    const [list, setList] = useState([{ id: 1, name: "Nguyen Van A" }, { id: 2, name: "Nguyen Van B" }])
    const addstudent = (textName) => {
        setList([...list, { id: 3, name: textName }])
    }
    const deleteStudent = (id) => {
        const newList = list.filter((student) => student.id !== id)
        setList(newList)
    }
    return (
        <div className="studentlist">
            <FormAdd addstudent={addstudent} />
            {list.map((value, index) => {
                return <Student student={value} deleteStudent={deleteStudent} key={index}/>
            })}</div>
    )
}