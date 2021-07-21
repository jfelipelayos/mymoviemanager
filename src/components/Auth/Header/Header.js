import React from 'react'
import './Header.css'
import { useFirebaseApp, useUser } from 'reactfire'


function Header({ setSession }) {


    const firebase = useFirebaseApp()
    const { data: user } = useUser();

    const handleLogout = async () => {
        firebase.auth().signOut();
        setSession(false)
    }

    return (
        <header className="header">
            <div className="header-user-info">
                {
                    user.email
                }
            </div>
            <button
                className="header-logout-btn"
                onClick={handleLogout}
            >Cerrar Sesion</button>
        </header>
    )
}

export default Header
