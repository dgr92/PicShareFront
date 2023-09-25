import { useContext, useState } from 'react';
import { EditProfile } from './EditProfile';
import { AuthContext } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Configuration({ closeConfig }) {
  const { logout, token } = useContext(AuthContext);
  const { isLightMode, toggleTheme } = useTheme();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('config-overlay')) {
      closeConfig();
    }
  };

  return (
    <>
      <div className='config-overlay' onClick={handleOverlayClick}>
        <div className='config-content'>
          {/* <button>
               <EditProfile />
            </button> */}
          <button onClick={toggleTheme}>{isLightMode ? '🌖' : '🌒'}</button>
          {token && <button onClick={logout}>Cerrar Sesión</button>}
        </div>
      </div>
    </>
  );
}

export default Configuration;
