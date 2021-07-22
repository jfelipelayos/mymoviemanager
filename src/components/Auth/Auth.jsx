import React, { useState } from 'react'
import './Auth.css'
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

function Auth({ setSession }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [authMode, setAuthMode] = useState('login')

    const firebase = useFirebaseApp()
    const user = useUser()

    const submit = async () => {
        if (authMode === 'login') {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                if (user) {
                    setSession(true)
                }
            } catch (error) {
                console.log('FALLEEEEE', error) //TODO: Handle this error
            }
        } else if (authMode === 'register') {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                changeAuthMode('login')

            } catch (error) {
                console.log('FALLEEEEE', error) //TODO: Handle this error
            }
        }
    }

    const changeAuthMode = (newAuthMode) => {
        setAuthMode(newAuthMode);
    }


    return (
        <div className="auth">
            <div className="auth-form">
                {
                    authMode === 'login' ? (
                        <h1 className="auth-title">Iniciar Sesion</h1>
                    ) : (
                        <h1 className="auth-title">Registrate</h1>
                    )
                }
                <div className="auth-login-options">
                    <button className="auth-login-options-google"><i className="fab fa-google"></i>Continuar con Google</button>
                    <div className="line"></div>
                </div>
                <div className="auth-login-email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu direccion de correo"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                {
                    authMode === 'login' ? (
                        <div>
                            <button
                                className="auth-submit"
                                onClick={submit}
                            >Entrar</button>
                            <p>No tienes una cuenta?
                                <button
                                    className='auth-register'
                                    onClick={() => changeAuthMode('register')}
                                >Registrate</button> </p>
                        </div>
                    ) : (
                        <div>
                            <button
                                className="auth-submit"
                                onClick={submit}
                            >Crear cuenta</button>
                            <p>Ya tienes una cuenta?
                                <button
                                    className='auth-register'
                                    onClick={() => changeAuthMode('login')}
                                >Inicia Sesion</button> </p>
                        </div>
                    )
                }


            </div>

        </div>
    )
}

export default Auth
