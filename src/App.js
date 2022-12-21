import React from "react";
import Navbar from './home/Navbar';
import Header from "./home/Header";
import Container from "./home/Container";
import Footer from "./home/Footer";
import ProductDetail from "./products/ProductDetail";
import {Routes, Route } from 'react-router-dom';
import articles from './articles.json'

export default function App() {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<div><Header /><Container /></div>} />
                <Route path="/:productId" element={<ProductDetail  products={articles}/>} />
            </Routes>
            <Footer />
        </div>
    )
}
