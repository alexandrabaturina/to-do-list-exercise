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

    const addTodo = text => {
        setTodos([...todos, {
            text: text,
            isCompleted: false
        }])
    }

    const deleteTodo = e => {
        const index = Number(e.target.id)
        let temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
    }

    return (
        <>
            {todos.map((todo, idx) =>
                <div key={idx} id={idx} onClick={deleteTodo}>{todo.text}</div>)}
            <TodoForm addTodo={addTodo} />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)