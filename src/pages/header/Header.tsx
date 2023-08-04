import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from '../../components/Modal';
import './Header.module.css';
import DarkMode from "../../components/LightDarkMode/DarkMode";
import {RegistrationModal} from "../../components/RegistrationModal/RegistrationModal";

const logo = '/typing.png';

export const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isRegistrationModalVisible, setIsRegistrationModalVisible] = useState(false);

    const showModal = (): void => {
        setIsModalVisible(true);
    };

    const closeModal = (): void => {
        setIsModalVisible(false);
    };

    const showRegistrationModal = (): void => {
        setIsRegistrationModalVisible(true);
    };

    const closeRegistrationModal = (): void => {
        setIsRegistrationModalVisible(false);
    };


    return (
        <>
            <header>
                <nav>
                    <ul>
                        <img src={logo} alt="logo"/>
                        <div className="container">
                            <li>
                                <Link to="/" onClick={showModal}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/">About Us</Link>
                            </li>
                            <li>
                                <Link to="/signIn" onClick={showRegistrationModal}>
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link to="/signUp" onClick={showRegistrationModal}>
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    </ul>
                    <DarkMode/>
                </nav>
            </header>
            <Modal
                title={'Home page modal'}
                info={'You are already on the home page. You are already on the home page.'}
                isVisible={isModalVisible}
                onClose={closeModal}
            />
            <RegistrationModal
                title={'Registration modal'}
                isVisible={isRegistrationModalVisible}
                onClose={closeRegistrationModal}
            />
        </>
    );
};
