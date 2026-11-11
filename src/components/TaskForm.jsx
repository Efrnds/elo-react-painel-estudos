import { useState } from 'react'

const INITIAL = { title: '', priority: 'media' }

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState(INITIAL)

  function handleSubmit(event) {
    event.preventDefault()
    const title = form.title.trim()
    if (!title) return

    onAdd({
      id: crypto.randomUUID(),
      title,
      priority: form.priority,
      done: false,
      createdAt: new Date().toISOString(),
    })

    setForm(INITIAL)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nova tarefa de estudo
          <input
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            placeholder="Ex.: Revisar hooks do React"
            maxLength={80}
          />
        </label>
        <label>
          Prioridade
          <select
            value={form.priority}
            onChange={(e) => setForm((prev) => ({ ...prev, priority: e.target.value }))}
          >
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
          </select>
        </label>
      </div>
      <div className="actions">
        <button type="submit" disabled={!form.title.trim()}>
          Adicionar tarefa
        </button>
      </div>
    </form>
  )
}
