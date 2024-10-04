import { useState } from "react"

export default function TaskManager() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const onSubmit = (event) => {
         setTasks ([...task,]);

        return (
            <div>
                <form value={tasks}>
                <input name="saved task"
                       type="text"
                       id="saved task"
                />
                <label for="saved task">{event.value.task}</label>
            </form>
            </div>
        )
    }
         
    return (
        <div>
            <h1>Task Manager</h1>

            <form action={'onSubmit'}>
                <input name='new task'
                    type="text"
                    placeholder="Enter a new task"
                    value={task} onInput={(event) => setTask(event.target.value)} />


                <button type="submit">add</button>
            </form>
        </div>
    )
}