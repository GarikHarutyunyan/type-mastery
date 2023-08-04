import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from '../../components/Modal';
import './Header.module.css';
import DarkMode from "../../components/LightDarkMode/DarkMode";

const logo = '/typing.png';

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const closeModal = (): void => {
    setIsModalVisible(false);
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
                <Link to="/">Sign in</Link>
              </li>
              <li>
                <Link to="/">Sign Up</Link>
              </li>
            </div>
          </ul>
          <DarkMode/>
        </nav>
      </header>
      <Modal
        title={'Home page modal'}
        info={'You are already in home page.You are already in home page.'}
        isVisible={isModalVisible}
        onClose={closeModal}
      />
    </>
  );
};
