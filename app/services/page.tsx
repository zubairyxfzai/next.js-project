import Link from "next/link";
import styles from "./services.module.css"

const ServicesPage = () => {
    return (
        <div>
            <nav>
                <li className= {styles.li}>
                   <Link href="/services/webdevelopment" target="_blank">Web Development</Link>
                </li>
            </nav>
                <h1 className= {styles.h1}>This is Services Page</h1>
        </div>
    )
}

export default ServicesPage;