export default function TaskItem({ task, onToggle, onRemove }) {
  const created = new Date(task.createdAt).toLocaleDateString('pt-BR')

  return (
    <li className={`task ${task.done ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        aria-label={`Marcar ${task.title} como ${task.done ? 'pendente' : 'concluída'}`}
      />
      <div>
        <p className="task-title">{task.title}</p>
        <p className="task-meta">Criada em {created}</p>
        <span className={`priority ${task.priority}`}>{task.priority}</span>
      </div>
      <button className="danger" type="button" onClick={() => onRemove(task.id)}>
        Remover
      </button>
    </li>
  )
}
