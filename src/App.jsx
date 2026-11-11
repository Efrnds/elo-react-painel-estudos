import { useMemo, useState } from 'react'
import Stats from './components/Stats'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

const SEED = [
  {
    id: '1',
    title: 'Ler documentação do useState',
    priority: 'alta',
    done: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Praticar map/filter em uma lista',
    priority: 'media',
    done: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Separar a UI em componentes',
    priority: 'baixa',
    done: false,
    createdAt: new Date().toISOString(),
  },
]

const FILTERS = [
  { id: 'todas', label: 'Todas' },
  { id: 'pendentes', label: 'Pendentes' },
  { id: 'concluidas', label: 'Concluídas' },
]

export default function App() {
  const [tasks, setTasks] = useLocalStorage('elo-react-tasks', SEED)
  const [filter, setFilter] = useState('todas')

  const visibleTasks = useMemo(() => {
    if (filter === 'pendentes') return tasks.filter((task) => !task.done)
    if (filter === 'concluidas') return tasks.filter((task) => task.done)
    return tasks
  }, [tasks, filter])

  const stats = useMemo(() => {
    const done = tasks.filter((task) => task.done).length
    return {
      total: tasks.length,
      done,
      pending: tasks.length - done,
    }
  }, [tasks])

  function addTask(task) {
    setTasks((prev) => [task, ...prev])
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  function clearDone() {
    setTasks((prev) => prev.filter((task) => !task.done))
  }

  return (
    <>
      <header className="app-header">
        <div>
          <h1>Painel de Estudos React</h1>
          <p>
            Projeto modelo do Elo para praticar componentes, estado, efeitos,
            listas e persistência com <code>localStorage</code>.
          </p>
        </div>
        <span className="badge">Vite + React</span>
      </header>

      <div className="grid">
        <section className="panel">
          <h2>Suas tarefas</h2>
          <Stats {...stats} />
          <TaskForm onAdd={addTask} />

          <div className="filters">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`chip ${filter === item.id ? 'active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <TaskList tasks={visibleTasks} onToggle={toggleTask} onRemove={removeTask} />

          <div className="actions" style={{ marginTop: '1rem' }}>
            <button className="secondary" type="button" onClick={clearDone}>
              Limpar concluídas
            </button>
          </div>
        </section>

        <aside className="panel">
          <h2>O que este projeto ensina</h2>
          <ul className="tips">
            <li>
              <strong>Componentização:</strong> UI quebrada em <code>TaskForm</code>,{' '}
              <code>TaskList</code> e <code>TaskItem</code>.
            </li>
            <li>
              <strong>Estado:</strong> <code>useState</code> controla formulário e filtros.
            </li>
            <li>
              <strong>Efeitos:</strong> o hook <code>useLocalStorage</code> salva dados com{' '}
              <code>useEffect</code>.
            </li>
            <li>
              <strong>Listas:</strong> cada item usa uma <code>key</code> estável.
            </li>
            <li>
              <strong>Props:</strong> dados e callbacks descem dos pais para os filhos.
            </li>
            <li>
              <strong>Desafio:</strong> adicione edição inline ou ordenação por prioridade.
            </li>
          </ul>
          <p className="footer-note">
            Adapte este código para o seu caso: checklist de disciplinas, backlog de
            projetos ou fila de revisão do Elo.
          </p>
        </aside>
      </div>
    </>
  )
}
