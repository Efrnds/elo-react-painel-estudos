import TaskItem from './TaskItem'

export default function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return <p className="empty">Nenhuma tarefa neste filtro. Adicione uma nova ou troque o filtro.</p>
  }

  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}
