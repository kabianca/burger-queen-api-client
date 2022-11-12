import React from 'react'

import styles from'./user.module.css'

function User({children}) {
  return (
    <div className={styles.user}>
      <ul>
        <li><strong>ID:</strong> {children.id}</li>
        <li><strong>Nome:</strong> {children.name}</li>
        <li><strong>Email:</strong> {children.email}</li>
        <li><strong>Função:</strong> {children.role}</li>
        <li><strong>Restaurante:</strong> {children.restaurant}</li>
      </ul>
      <button>&times;</button>
    </div>
  )
}

export default User;