import React from "react";
import Navbar from './Navbar';
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import {Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<div><Header /><Container /></div>} />
                <Route path="/:productId" element={<ProductDetail  />} />

            </Routes>
            <Footer />
        </div>
    )
}
