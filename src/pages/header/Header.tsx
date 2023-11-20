import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import {AuthModal} from '../components/AuthModal/AuthModal';
import {ThemeSwitch} from './ThemeSwitch/ThemeSwitch';
import {AuthenticationContext} from '../../contexts';

const logo = '/typing.png';

export const Header = () => {
  const {user} = useContext(AuthenticationContext);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

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
            <div className={styles.container}>
              <img src={logo} alt="logo" className={styles.logo} />
              {user?.name}
            </div>
            <div className={styles.container}>
              <li>
                <Link to="/">{'Home'}</Link>
              </li>
              <li>
                <Link to="/">{'About Us'}</Link>
              </li>
              <li>
                <Link to="/" onClick={showAuthModal}>
                  {'Sign in'}
                </Link>
              </li>
            </div>
          </ul>
          <ThemeSwitch />
        </nav>
      </header>
      <AuthModal isVisible={isAuthModalVisible} onClose={closeAuthModal} />
    </>
  );
};
