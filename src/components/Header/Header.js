import React from 'react'
import './Header.css'
import { useFirebaseApp, useUser } from 'reactfire'
import { Link } from 'react-router-dom'


function Header({ setSession }) {


    const firebase = useFirebaseApp()
    const { data: user } = useUser();

    const handleLogout = async () => {
        firebase.auth().signOut();
        setSession(false)
    }

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <img className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/globant-bootcamp-project.appspot.com/o/Filmlerin%20(1).png?alt=media&token=687dc84d-a27b-4ced-ac7a-950b5aee66af" alt="Logo" />
                </Link>
                <div className="header-user-info">
                    <strong>Welcome! </strong>
                    {
                        user.email
                    }
                </div>
            </div>
            <div className="header-right">
                <button className="header-add-button">
                    <i className="fas fa-plus"></i>
                    <Link to="/add">Añadir</Link>
                </button>
                <button
                    className="header-logout-btn"
                    onClick={handleLogout}
                >Cerrar Sesion</button>
            </div>
        </header>
    )
}

export default Header
