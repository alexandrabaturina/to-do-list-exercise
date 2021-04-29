function TodoList({ todo, idx, remove }) {

    function handleClick() {
        remove(idx)
    }

    return (
        <div className="todo-item">
            <div className="todo-text">{todo.text}</div>
            <i class="fa fa-times" onClick={handleClick} ></i>
        </div>

    )
}