import React from 'react';
import { Link } from 'react-router-dom';

const Navigation_side_bar = () => {
    return (
        <div>
            {/* <!-- [ navigation menu ] start --> */}
            <nav className="pcoded-navbar">
                <div className="nav-list">
                    <div className="pcoded-inner-navbar main-menu">
                        <div className="pcoded-navigation-label">Navigation</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="pcoded-hasmenu active pcoded-trigger">
                                <a href="../#" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                    <span className="pcoded-mtext">Dashboard</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="active">
                                        <a href="../index.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Default</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="../default/dashboard-crm.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">CRM</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="../default/dashboard-analytics.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Analytics</span>
                                            <span className="pcoded-badge label label-info ">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                <a href="../#" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                                    <span className="pcoded-mtext">Page layouts</span>
                                    <span className="pcoded-badge label label-warning">NEW</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" pcoded-hasmenu">
                                        <a href="../#" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Vertical</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className="">
                                    <a href="../default/menu-static.html" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Static Layout</span>
                                    </a>
                                            </li>
                                            <li className="">
                                    <a href="../default/menu-header-fixed.html" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Header Fixed</span>
                                    </a>
                                            </li>
                                            <li className="">
                                    <a href="../default/menu-compact.html" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Compact</span>
                                    </a>
                                            </li>
                                            <li className="">
                                    <a href="../default/menu-sidebar.html" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Sidebar Fixed</span>
                                    </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" pcoded-hasmenu">
                                        <a href="../#" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Horizontal</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className="">
                                    <a href="../default/menu-horizontal-static.html" target="_blank" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Static Layout</span>
                                    </a>
                                            </li>
                                            <li className="">
                                    <a href="../default/menu-horizontal-fixed.html" target="_blank" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Fixed layout</span>
                                    </a>
                                            </li>
                                            <li className="">
                                    <a href="../default/menu-horizontal-icon.html" target="_blank" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Static With Icon</span>
                                    </a>
                                            </li>
                                            <li className="">
                                    <a href="../default/menu-horizontal-icon-fixed.html" target="_blank" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">Fixed With Icon</span>
                                    </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="../default/menu-bottom.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Bottom Menu</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="../default/navbar-light.html" className="waves-effect waves-dark">
                                    <span className="pcoded-micon">
                                        <i className="feather icon-menu"></i>
                                    </span>
                                    <span className="pcoded-mtext">Navigation</span>
                                </a>
                                            </li>
                                            <li className="pcoded-hasmenu">
                                <a href="../#" className="waves-effect waves-dark">
                                    <span className="pcoded-micon">
                                        <i className="feather icon-layers"></i>
                                    </span>
                                    <span className="pcoded-mtext">Widget</span>
                                    <span className="pcoded-badge label label-danger">100+</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="../default/widget-statistic.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Statistic</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="../default/widget-data.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Data</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="../default/widget-chart.html" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Chart Widget</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        
                        <div className="pcoded-navigation-label">controls</div>
                        <ul className="pcoded-item pcoded-left-item">
                             <li className="pcoded-hasmenu">
                                            <a href="#" onClick={(e)=>{e.preventDefault()}} className="waves-effect waves-dark">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Movies</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    
                                                    <Link to='/admin/durations/'>
                                                        <span className="pcoded-mtext">main</span>
                                                    </Link>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/creat'>
                                                        <span className="pcoded-mtext">create</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="">
                                                    <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li> */}
                                            </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                            <a href="#" onClick={(e)=>{e.preventDefault()}} className="waves-effect waves-dark">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Schedule</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/'>
                                                        <span className="pcoded-mtext">main</span>
                                                    </Link>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/creat'>
                                                        <span className="pcoded-mtext">create</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="">
                                                    <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li> */}
                                            </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                            <a href="#"  onClick={(e)=>{e.preventDefault()}} className="waves-effect waves-dark">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Halls</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/halls/'>
                                                        <span className="pcoded-mtext">main</span>
                                                    </Link>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/halls/creat'>
                                                        <span className="pcoded-mtext">create</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="">
                                                    <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li> */}
                                            </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                            <a href="#" onClick={(e)=>{e.preventDefault()}} className="waves-effect waves-dark">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Durations</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/'>
                                                        <span className="pcoded-mtext">main</span>
                                                    </Link>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/creat'>
                                                        <span className="pcoded-mtext">create</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="">
                                                    <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li> */}
                                            </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                            <a href="#" onClick={(e)=>{e.preventDefault()}} className="waves-effect waves-dark">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Purchases</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/'>
                                                        <span className="pcoded-mtext">main</span>
                                                    </Link>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/creat'>
                                                        <span className="pcoded-mtext">create</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="">
                                                    <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li> */}
                                            </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                            <a href="#" onClick={(e)=>{e.preventDefault()}} className="waves-effect waves-dark">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Users</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/'>
                                                        <span className="pcoded-mtext">main</span>
                                                    </Link>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    
                                                    <Link to='/admin/durations/creat'>
                                                        <span className="pcoded-mtext">create</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="">
                                                    <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li> */}
                                            </ul>
                            </li>
                            
                            
                            
                        </ul>
                        
                    </div>
                </div>
             </nav>
             {/* <!-- [ navigation menu ] end --> */}
        </div>
    );
};

export default Navigation_side_bar;