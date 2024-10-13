import Link from "next/link";
import Styles from "./page.module.css"

const HomePage = () => {
    return (
        <div className={Styles.div}>
          <nav>
            <ul className={Styles.ul}>
              <li className={Styles.li}>
                <Link href = "/about" target="_blank">About</Link>
              </li>
              <li className={Styles.li}>
                <Link href= "/contact" target="_blank">Contact</Link>
              </li>
              <li className={Styles.li}>
                <Link href= "/services" target="_blank">Services</Link>
              </li>
            </ul>
              <h1 className={Styles.h1}>This is Home Page</h1>
          </nav>
        </div>
    )
}

export default HomePage;
