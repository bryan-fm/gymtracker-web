import styles from './logoName.module.css'

export function LogoName() {
  return (
    <h1 className={styles['main-title']}>
      <span className={styles['highlight']}>GYM</span>
      <br />
      TRACKER
    </h1>
  )
}

export default LogoName
