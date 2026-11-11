export default function Stats({ total, done, pending }) {
  return (
    <div className="stats">
      <div className="stat">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
      <div className="stat">
        <span>Concluídas</span>
        <strong>{done}</strong>
      </div>
      <div className="stat">
        <span>Pendentes</span>
        <strong>{pending}</strong>
      </div>
    </div>
  )
}
