import './Footer.css';
import {FaTelegram} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {BsInstagram} from "react-icons/bs";
import {LuPhoneForwarded} from "react-icons/lu";
import {WiTime2} from "react-icons/wi";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-container'>
                    <div className='block-footer'>
                        <h3>Информация</h3>
                        <div className='block-footer-item'>
                            <a href="">Главная</a>
                            <a href="">Каталог</a>
                            <a href="">О компании</a>
                            <a href="">Контакты</a>
                        </div>
                    </div>
                    <div className='block-footer'>
                        <h3>Мой кабинет</h3>
                        <div className='block-footer-item'>
                            <a href="">Профиль</a>
                            <a href="">Избранное</a>
                            <a href="">Корзина</a>
                        </div>
                    </div>
                    <div className='block-footer'>
                        <h3>Контактная информация</h3>
                        <div className='block-footer-item'>
                            <p>
                                ИП Псху Имран Ахмедович <br/>
                                государственная регистрация №300324230 <br/>
                                От 25.05.2025 <br/>
                                Черкесский государственным предприятием имени `Хасана Хасанбиева`<br/>
                                по борьбе с оперуполномоченными бибизянами <br/>
                                по типу неадекватов.
                            </p>
                        </div>
                    </div>
                    <div className='block-footer'>
                        <h3>Социальные сети</h3>
                        <div className='block-footer-item-buttons'>
                            <a><FaTelegram/></a>
                            <a><SiGmail/></a>
                            <a><BsInstagram/></a>
                            <div className='block-footer-phone'>
                                <p><LuPhoneForwarded /> +7-906-443-37-70</p>
                                <p><WiTime2/>Круглосуточно, без выходных</p>
                            </div>
                        </div>
                    </div>
                    <div className='block-footer-logo'>
                        <img src="/../public/logo.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}