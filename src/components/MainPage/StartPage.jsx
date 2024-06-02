import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContexts.jsx'; // Adjust the import path as needed

const BodyPage = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-image: url('/images/background/fundal.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    text-align: center;
`;

const Nav = styled.nav`
    position: absolute;
    top: 30px;
    right: 50px;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const Li = styled.li`
    margin-left: 30px; /* Space between menu items */
`;

const A = styled(Link)`
    color: darkred;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;

    &:hover {
        color: black;
    }
`;

const StartPage = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <BodyPage>
            <Nav>
                <Ul>
                    <Li><A to="/events">EVENTS</A></Li>
                    <Li><A to="/benefits">BENEFITS</A></Li>
                    <Li><A to="/about-us">ABOUT US</A></Li>
                    {isAuthenticated ? (
                        <Li>WELCOME BACK!</Li>
                    ) : (
                        <Li><A to="/signin">ACCOUNT</A></Li>
                    )}
                </Ul>
            </Nav>
        </BodyPage>
    );
};

export default StartPage;
