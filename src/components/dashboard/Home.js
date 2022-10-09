import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Nav from './Nav'
import CreateCategory from './CreateCategory'
import CreateProduct from './CreateProduct'
import CreateUser from './CreateUser'
import ViewCategory from './ViewCategory'
import ViewProduct from './ViewProduct'
import ViewUser from './ViewUser'
import { Routes, Route } from "react-router-dom";
import RouteConstants from '../../RoutesConstant';
import EditCategory from './EditCategory'
import EditProduct from './EditProduct'
export default function Home() {
  return (
    <>

      <Aside></Aside>
      <Nav></Nav>
      <div className="content-wrapper" style={{ minHeight: '1345.6px' }}>
        <Routes>
          <Route path={RouteConstants.cproduct} element={<CreateProduct></CreateProduct>}></Route>
          <Route path={RouteConstants.vproduct} element={<ViewProduct></ViewProduct>}></Route>
          <Route path={RouteConstants.ccategory} element={<CreateCategory></CreateCategory>}></Route>
          <Route path={RouteConstants.vcategory} element={<ViewCategory></ViewCategory>}></Route>
          <Route path={RouteConstants.cuser} element={<CreateUser></CreateUser>}></Route>
          <Route path={RouteConstants.vuser} element={<ViewUser></ViewUser>}></Route>
          <Route path={'/editcategory/:id'} element={<EditCategory></EditCategory>}></Route>
          <Route path={'/editproduct/:id'} element={<EditProduct></EditProduct>}></Route>


        </Routes>

      </div>
      <Footer></Footer>
    </>
  )
}
