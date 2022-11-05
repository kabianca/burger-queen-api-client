function User(props) {
  return (
    <div className="user">
      <ul>
        <li><strong>ID:</strong> {props.user.id}</li>
        <li><strong>Nome:</strong> {props.user.name}</li>
        <li><strong>Email:</strong> {props.user.email}</li>
        <li><strong>Função:</strong> {props.user.role}</li>
        <li><strong>Restaurante:</strong> {props.user.restaurant}</li>
      </ul>
      <button onClick={''}>&times;</button>
    </div>
  )
}

export default User;