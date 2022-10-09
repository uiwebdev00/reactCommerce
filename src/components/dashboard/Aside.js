import React from 'react'
import { Link } from "react-router-dom";
import RouteConstants from '../../RoutesConstant';

export default function Aside() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 h-500">
            {/* Brand Logo */}
            <Link to="/dashboard" className="brand-link">
                <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">React-Dashboard</span>
            </Link>
            {/* Sidebar */}
         
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <Link to="/dashboard" className="d-block">Alexander Pierce</Link>
                    </div>
                </div>
                {/* SidebarSearch Form */}
              
                {/* Sidebar Menu */}
                <nav className="mt-2" >
                    <ul className="nav nav-pills nav-sidebar flex-column h-auto" data-widget="treeview" role="menu" data-accordion="false">
                    
                        
                      
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-tree" />
                                <p>
                                    Products
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={`/dashboard${RouteConstants.cproduct}`} className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add Product</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/dashboard${RouteConstants.vproduct}`} className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>View Products</p>
                                    </Link>
                                </li>
                               
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-tree" />
                                <p>
                                    Categories
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={`/dashboard${RouteConstants.ccategory}`} className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add Category</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/dashboard${RouteConstants.vcategory}`} className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>View Categories</p>
                                    </Link>
                                </li>
                               
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-tree" />
                                <p>
                                    Users
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={`/dashboard${RouteConstants.cuser}`} className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add User</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/dashboard${RouteConstants.vuser}`} className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>View Users</p>
                                    </Link>
                                </li>
                               
                            </ul>
                        </li>
                       
                     
                  
                   
                    </ul>
                </nav>
             
        </aside>

    )
}
