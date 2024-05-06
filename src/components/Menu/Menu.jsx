import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import './Menu.css';
import { CgProfile } from "react-icons/cg";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useState} from "react";
import {FaBasketShopping} from "react-icons/fa6";

export default function Menu() {
    const [isFavorites, setIsFavorites] = useState(false);

    const changeStateHeart = () => {
        setIsFavorites(prevState => !prevState)
    }

    return (
        <div className='menu'>
            <div className='container'>
                <div className='menu-container'>
                    <BurgerMenu />

                    <div className='menu-container-block'>
                        <div className='menu-block-profile-and-favorites'>
                            <div className='menu-input'>
                                <input className='search-input' placeholder='Поиск ...' type="text" />
                            </div>
                            <div className='menu-favorites-products'>
                                <button onClick={changeStateHeart}>
                                    {isFavorites ? <FaHeart /> : <FaRegHeart />}
                                </button>
                            </div>
                            <div className='menu-icon-profile'>
                                <button>
                                    <CgProfile />
                                </button>
                            </div>
                            <div className='menu-basket'>
                                <button>
                                    <FaBasketShopping />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}