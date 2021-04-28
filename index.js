function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Learn React',
            isComplete: false
        },
        {
            text: 'Build To-Do List app',
            isComplete: false
        },
        {
            text: 'Push To-Do List projgect on Github',
            isComplete: false
        }
    ])

    const [value, setValue] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(value)
        if (!value) return
        setTodos([...todos, {
            text: value,
            isCompleted: false
        }])
        setValue('')
    }

    const deleteTodo = e => {
        const index = Number(e.target.id)
        let temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
    }

    return (
        <>
            {todos.map((todo, idx) => <div key={idx} id={idx} onClick={deleteTodo}>{todo.text}</div>)}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add to-do item..."
                    value={value}
                    onChange={e => setValue(e.target.value)} />
            </form>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)