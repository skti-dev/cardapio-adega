import React, { useState } from "react"

import { ShoppingCartIcon } from '@heroicons/react/solid'

import OutsideClickHandler from 'react-outside-click-handler'

import styles from '../../styles/CheckedItems.module.css'

const CheckedItems = ({ items }) => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className={styles.container}>
      <OutsideClickHandler onOutsideClick={() => setShow(false)}>
        <ShoppingCartIcon className={styles.icon} onClick={() => handleClick()} />
      </OutsideClickHandler>
      {
        show && (
        <div className={`${styles.floatingBox} ${show ? styles.show : ''}`}>
          <ul>
            {items && items.map(item => (
              <li key={item.id}>
                {`${item.name} - R$${item.price}`}
              </li>
            ))}
          </ul>
        </div>
        )
      }
    </div>
  )
}

export default CheckedItems