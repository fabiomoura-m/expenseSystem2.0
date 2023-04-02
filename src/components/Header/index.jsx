import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo_transparent.png';
import { BiMenuAltRight, BiCategory } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { TbReportMoney } from 'react-icons/tb';
import { useState } from 'react';

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
                        <TbReportMoney size={24} />
                        Despesas
                    </Link>
                    <Link
                        to="/usuarios"
                        onClick={() => setMenuOpened(prev => !prev)}
                    >
                        <FiUsers size={22} />
                        Usuários
                    </Link>
                    <Link
                        to="/categorias"
                        onClick={() => setMenuOpened(prev => !prev)}
                    >
                        <BiCategory size={24} />
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
