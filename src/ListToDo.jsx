const ToDo = ({ toDoList }) => {
    return (
        <div>
            {(toDoList || []).map((el) =>
            (
                <div key={el.id}>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                </div>)
            )
            }
        </div>
    )
}

export default ToDo;