import React from "react"

import styles from '../../../styles/Lista.module.css'

const Lista = ({ title, items, id, children }) => {
  return(
    <div className={styles.container} id={id}>
      <h1>
        {title}
        {children}
      </h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {`${item.name} - R$${item.price}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lista