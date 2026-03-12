import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <Pokemon />
    </div>
  )
}
