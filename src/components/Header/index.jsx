import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo_transparent.png';
import { BiMenuAltRight } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.box_content} container`}>
                <div className={styles.logo}>
                    <Link to="/despesas">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <nav
                    className={`${menuOpened && styles.navbarOpen} ${
                        styles.navbar
                    }`}
                >
                    <Link
                        to="/despesas"
                        onClick={() => setMenuOpened(prev => !prev)}
                    >
                        Despesas
                    </Link>
                    <Link
                        to="/usuarios"
                        onClick={() => setMenuOpened(prev => !prev)}
                    >
                        Usuários
                    </Link>
                    <Link
                        to="/categorias"
                        onClick={() => setMenuOpened(prev => !prev)}
                    >
                        Categorias
                    </Link>
                </nav>
                <div
                    className={styles.menuIcon}
                    onClick={() => setMenuOpened(prev => !prev)}
                >
                    <BiMenuAltRight size={30} color={'#fff'} />
                </div>
            </div>
        </header>
    );
}
