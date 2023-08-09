import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from '../../components/Modal';
import './Header.module.css';
import DarkMode from '../../components/LightDarkMode/DarkMode';
import {AuthModal} from '../../components/AuthModal/AuthModal';

const logo = '/typing.png';

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const closeModal = (): void => {
    setIsModalVisible(false);
  };

  const showAuthModal = (): void => {
    setIsAuthModalVisible(true);
  };

  const closeAuthModal = (): void => {
    setIsAuthModalVisible(false);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <img src={logo} alt="logo" />
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
                <Link to="/" onClick={showAuthModal}>
                  Sign in
                </Link>
              </li>
            </div>
          </ul>
          <DarkMode />
        </nav>
      </header>
      <Modal
        title={'Home page modal'}
        info={
          'You are already on the home page. You are already on the home page.'
        }
        isVisible={isModalVisible}
        onClose={closeModal}
      />
      <AuthModal isVisible={isAuthModalVisible} onClose={closeAuthModal} />
    </>
  );
};
