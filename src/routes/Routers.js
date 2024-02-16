import React from 'react'
import { Routes , Route } from "react-router-dom";
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import ContactUs from '../pages/ContactUs';
import Container from '../components/container/Container';

export default function Routers() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/blogView" element={<Container/>} />
    </Routes>
  )
}
