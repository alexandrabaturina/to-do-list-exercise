function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add to-do item..."
                    value={value}
                    onChange={e => setValue(e.target.value)} />
            </form>
        </div>
    )
}