import React from "react"

import { BeakerIcon } from '@heroicons/react/solid'
import styles from '../../styles/Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <BeakerIcon />
      </div>
      <span className={styles.tooltip}>
        Adega Poções
      </span>
    </div>
  )
}

export default Logo
