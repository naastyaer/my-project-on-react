import Button from "components/Button";
import { useState } from "react";

const courses = ['Рисование', 'Психология', 'Программирование']

const StudentForm = ({addStudent}) =>{
    const handelClick = (event)=>{
        event.preventDefault()
        const student = {
            firstName, 
            lastName, 
            age,
            course

        }
        addStudent(student)
        setfirstName(" ")
        setlastName(" ")
        setAge(" ")
        setCourse(courses[1])

    }
    const [firstName, setfirstName] = useState ('')
    const [lastName, setlastName] = useState ('')
    const [age, setAge] = useState ('')
    const [course, setCourse] = useState (courses[1])
    return (
        <div className="max-w-sm mx-auto my-10 gap-y-4 flex flex-col ">
            <form>
                <h2 className="font-bold text-x1">Добавить нового студента</h2>
                <div className="grid grid-cols-3 gap-y-4"> 
                    <label className="col-span-1">Имя</label>
                    <input 
                        onChange={(event) =>setfirstName(event.target.value)}
                        value={firstName}
                        name="firstName" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded"
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Фамилия</label>
                    <input 
                        onChange={(event) => setlastName(event.target.value)}
                        value={lastName}
                        name="lastName" 
                        types="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded"
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Возраст</label>
                    <input
                        onChange={(event) => setAge(event.target.value)}
                        value={age}
                        name="age" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    /> 
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Kypс</label>
                    <select 
                            onChange={(event) => setCourse(event.target.value)}
                            value={course}
                            className="col-span-2 border border-solid border-gray-400 rounded" >
                            {courses.map(course => (
                            <option key={course}> {course} </option>
                            ))}
                    </select>
                </div> 
            
                <Button title="добавить студента" handelClick={handelClick} type="submit"/>
            </form>
        </div>    
    )
}
export default StudentForm
