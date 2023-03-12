import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from './Content';

function Home() {
    return (
        <>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </>
    );
}

export default Home;