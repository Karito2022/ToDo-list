const TaskForm = (props) => {
    return (
        <div style={{ textAlign: "center", padding: "0px" }}>
            <form onSubmit={(event) => {
                props.handleNewTodoSubmit(event);
            }}>
                <h2 style={{ padding: "9px" }} className="fw-lighter font-monospace">TODO-LIST</h2>
                <input onChange={(event) => { props.setNewTodo(event.target.value) }} type="text" value={props.newTodo} />
                <div style={{ margin: "10px" }}>
                    <button className="btn btn-outline-primary bg-light py-1 mt-1 font-monospace" >Add Task</button>
                </div>
            </form>

            <hr style={{ margin: "1.7rem" }} />
        </div>

    );
}

export default TaskForm;
