import { Link, useParams } from "react-router-dom";

function UserInfo({ user, nombre ,closeUserSearch,closeSearch }) {
  const { idUser } = useParams();
    return (
      <div className="userInfo">
        <Link to={`/users/${user.idUser}`} onClick={ ()=>{closeSearch(); closeUserSearch()}}>
          <img
            style={{ width: "50px" }}
            src={user.avatar ? 
              `${import.meta.env.VITE_APP_BACKEND.replace(/\/+$/, "")}/uploads/avatarUser/${user.idUser || idUser}/${user.avatar}` 
              : 
              "../src/resources/userNoAvatar_icon.svg"}
            alt={user.username}
          />
          <div className="user-details">
            <p>{user.username}</p>
            {nombre && <p className="name-user">Nombre: {nombre}</p>}
          </div>
        </Link>
      </div>
    );
}

export default UserInfo;
