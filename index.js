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

    const deleteTodo = index => {
        let temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
    }

    return (
        <>
            {todos.map((todo, idx) =>
                <TodoList key={idx} idx={idx} todo={todo} remove={deleteTodo} />)}
            <TodoForm addTodo={addTodo} />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)