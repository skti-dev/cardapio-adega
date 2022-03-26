import React from "react"

import { BeakerIcon } from '@heroicons/react/solid'
import styles from '../../styles/Logo.module.css'

const Logo = () => {
  return (
    <>
      <div className={styles.container}>
        <BeakerIcon className={styles.logo} />
      </div>
      <span className={styles.tooltip}>
        Adega Poções
      </span>
    </>
  )
}

export default Logo
