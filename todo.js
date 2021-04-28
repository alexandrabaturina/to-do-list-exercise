function TodoList({ todo, idx, remove }) {

    function handleClick() {
        remove(idx)
    }

    return (
        <div onClick={handleClick}>{todo.text}</div>
    )
}