import React from 'react';
import logo from '../../assets/logo.svg';
import './header.scss';
export default function BasicHeader() {
    return (<header className="main-head">
        <a href="/"><img src={logo} alt="AssemblyAI" /></a>
    </header>)
}