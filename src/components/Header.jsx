import React from "react"
import "../css/Header.css"
import {useNavigate} from "react-router-dom"
import {decodeToken, isExpired} from "react-jwt"
import {useEffect} from 'react';
import axios from 'axios';
import {Navbar} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    const navigate = useNavigate();
    const imie = localStorage.getItem('login');
    const logged = localStorage.getItem('isLogged');

    const login = () => {
        navigate('/Login')
    }
    const Register = () => {
        navigate('/Register')
    }
    const Add = () => {
        navigate('/add')
    }

    useEffect(() => {
        if (isExpired(localStorage.getItem('token'))) {
            localStorage.setItem('isLogged', 'false');
        }
    })

    function Logout() {
        let userId = decodeToken(localStorage.getItem('token')).userId
        console.log('userid:', userId);
        axios({
            method: 'delete',
            url: 'https://at.usermd.net/api/user/logout/:userId',
            data: {
                userid: '' + userId,
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });

        localStorage.setItem('token', '');
        localStorage.setItem('isLogged', 'false');
        navigate('/')
    }

    return (
        <div className="header">
            <Navbar>
                <Navbar.Brand href='/'>
                    <img src={'https://sklep.biofeedback.info.pl/images/movie.png'}
                         width='120'
                         height='80'/>
                </Navbar.Brand>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    {(logged === 'false') &&
                        <div>
                            <Button style={{position: 'absolute', left: 520, bottom: 30, backgroundColor: 'white', color: 'black'}} onClick={login}
                                    variant={props.outline}>Login</Button>
                            <Button style={{position: 'absolute', left: 600, bottom: 30, backgroundColor: 'white', color: 'black'}} onClick={Register}
                                    variant={props.outline}>Register</Button>
                        </div>
                    }
                    {(logged === 'true') &&
                        <Nav>
                            <Nav style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>{imie}</Nav>
                            <Button style={{position: 'absolute', left: 1200, bottom: 30, backgroundColor: 'white', color: 'black'}} onClick={Logout}
                                    variant={props.outline}>Logout</Button>
                            <Button style={{position: 'absolute', left: 570, bottom: 30, backgroundColor: 'white', color: 'black'}} onClick={Add}
                                    variant={props.outline}>Add</Button>
                        </Nav>
                    }
                </div>
            </Navbar>
        </div>
    )
}

export default Header