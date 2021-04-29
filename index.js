function App() {

    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        fetchTodos()
    }, [])

    // Fetch To-Do list items from JSON file
    const fetchTodos = async () => {
        const res = await fetch('todos.json')
        const data = await res.json()
        setTodos(data.todos)
    }

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