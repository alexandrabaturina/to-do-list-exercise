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
    return (
        <>
            {todos.map((todo, idx) => <div key={idx}>{todo.text}</div>)}
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)