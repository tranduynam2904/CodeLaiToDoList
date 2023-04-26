import { useState } from "react"

export default function FormAdd(props) {
    const [text, setText] = useState("")
    return (
        <form className="FormAdd" onSubmit={(e) => {
            e.preventDefault();
            props.addstudent(text);
            setText("")
        }}>
            <label>To Do List</label><br></br>
            <input type="text" placeholder="Enter your name" value={text} onChange={(e) => setText(e.target.value)} />
        </form>

    )
}