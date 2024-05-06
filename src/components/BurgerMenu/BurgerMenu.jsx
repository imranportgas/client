import './BurgerMenu.css';

import { slide as Menu} from 'react-burger-menu';

export default function App() {
    return (
        <div className='burger-menu'>
            <div className='container'>
                <div className='burger-menu-container'>
                    <Menu>
                        <div className='burger-menu-img'>
                            <img src="/logo.png" alt="#"/>
                        </div>
                        <a className="menu-item" href="/">
                            Главная
                        </a>

                        <a className="menu-item" href="/">
                            Категории
                        </a>

                        <a className="menu-item" href="/">
                            О магазине
                        </a>
                        <a className="menu-item" href="/">
                            Контакты
                        </a>
                        <a className="menu-item" href="/">
                            Отзывы
                        </a>
                    </Menu>
                </div>
            </div>
        </div>
    )
}