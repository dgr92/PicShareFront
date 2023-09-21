import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Auth } from './Auth';
import { AuthContext } from '../context/AuthContext';
import UserOverlay from './UserOverlay';
import SearchPhotos from './SearchPhotos';
import Configuration from './Configuration';

export const Header = () => {
  const { idUser , token, avatar} = useContext(AuthContext);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const openConfig = () => {
    setIsConfigOpen(true);
  };

  const closeConfig = () => {
    setIsConfigOpen(false);
  };
  

  return (
    <header>
   <nav className='nav-header'>
    <div className='nav-menu'>
      <h1>
        <Link to='/'>PicShare</Link>
      </h1>

      <UserOverlay  />
      <SearchPhotos />

      {idUser && (
        <Link to='/entries/photos'>
          <button className='addPhotosButton'>
            <img type='image' src='../../src/resources/addNewPhoto_icon.svg' height='35' width='35' />  
            <span>Publicar</span>
          </button>
        </Link>
      )}

      {(idUser && token) && 
      <Link to={`/users/${idUser}`} >
        <button className='goPerfilButton'>
        <img
          src={
            avatar ? `${import.meta.env.VITE_APP_BACKEND}/uploads/avatarUser/${idUser}/${avatar}` : '../src/resources/userNoAvatar_icon.svg'
          }
          height='40'
          width='40'
          alt='Avatar'
          />
        <span>Perfil</span>
          </button>
      </Link>}
    </div>
    
    <>
      {isConfigOpen && <Configuration closeConfig={closeConfig} />}
      <>
      <button className='configButton' onClick={openConfig}>
        ⚙🗜
      <span>Más</span>
      </button>
      
      </>
    </>

    </nav>
    </header>
  );
};
