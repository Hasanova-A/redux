import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Product from './pages/Product'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './layout/Footer'
import ProductDetail from './pages/ProductDetail'
import { ModeContext } from './context/ModeProvider'
import Basket from './pages/Basket'
import Dashboard from './pages/admin/Dashboard'
import ProductList from './pages/admin/product/ProductList'
import ProductAdd from './pages/admin/product/ProductAdd'
import Login from './pages/client/auth/Login'
import CategoryList from './pages/admin/category/CategoryList'
import CategoryAdd from './pages/admin/category/CategoryAdd'

const Router = () => {
  const [mode] = useContext(ModeContext);
  return (
    <>
    <div className={mode}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/product' element={<ProductList />}></Route>
          <Route path='/dashboard/product/add' element={<ProductAdd />}></Route>
          <Route path='/dashboard/category' element={<CategoryList />}></Route>
          <Route path='/dashboard/category/add' element={<CategoryAdd />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/basket' element={<Basket/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default Router