import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo_transparent.png';

export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.box_content} container`}>
                <div className={styles.logo}>
                    <Link to="/despesas">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <nav className={`${styles.navbar} `}>
                    <Link to="/despesas">Despesas</Link>
                    <Link to="/usuarios">Usuários</Link>
                    <Link to="/categorias">Categorias</Link>
                </nav>
            </div>
        </header>
    );
}
