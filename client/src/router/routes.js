import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";
import Login from "../auth/login";
import Register from "../auth/register";
import Admin_page_layout from '../admin/pages/admin_page_layout'
// ======================================================================================================
import ScrollToTtheTop from '../components/ScrollToTtheTop'
import Durations_create from "../admin/pages/durations_pages/create/durations_create";
import Durations_edit from "../admin/pages/durations_pages/edit/durations_edit";
import Durations_main from "../admin/pages/durations_pages/main/durations_main";
// ======================================================================================================
import Halls_create from "../admin/pages/halls_pages/create/halls_create";
import Halls_edit from "../admin/pages/halls_pages/edit/halls_edit";
import Halls_main from "../admin/pages/halls_pages/main/halls_main";
// ======================================================================================================
import Movies_create from "../admin/pages/movies_pages/create/movies_create";
import Movies_edit from "../admin/pages/movies_pages/edit/movies_edit";
import Movies_main from "../admin/pages/movies_pages/main/movies_main";
// ======================================================================================================
import Schedule_create from "../admin/pages/schedule_pages/create/schedule_create";
import Schedule_edit from "../admin/pages/schedule_pages/edit/schedule_edit";
import Schedule_main from "../admin/pages/schedule_pages/main/schedule_main";
// ======================================================================================================
import GuestProtectedeRoute from './../middelware/isGuest'
import AdminProtectedeRoute from './../middelware/isAdmin'
import AuthProtectedeRoute from './../middelware/isAuth'
// ======================================================================================================
// import Purchase_main from "../admin/pages/purchases_pages/main/purchase_main";
// ======================================================================================================
import Customer_pages_layout from '../customer/pages/customer_pages_layout'
// ======================================================================================================
import Home from '../customer/pages/home/home'
import Movie from '../customer/pages/movie/movie'



 

let routes = (
    
        <Router >
            <ScrollToTtheTop/>
                <Switch>

                    
                    <Route exact path='/'>
                        <Customer_pages_layout content={<Home/>}/>
                    </Route>  
                    <Route exact path='/movie'>
                        <Customer_pages_layout content={<Movie/>}/>
                    </Route>  
                   

                    
                    {/* <AdminProtectedeRoute exact path={'/admin'} component={Admin_page_layout}  ScrollToTtheTop={<ScrollToTtheTop/>}/>    */}
                    <AdminProtectedeRoute exact path={'/admin/durations/creat'} component={Admin_page_layout} Content={<Durations_create/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/durations/edit/:id?'} component={Admin_page_layout} Content={<Durations_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/durations/'} component={Admin_page_layout} Content={<Durations_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    {/* ==================================================================================================================================================================================== */}
                    <AdminProtectedeRoute exact path={'/admin/halls/creat'} component={Admin_page_layout} Content={<Halls_create/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/halls/edit/:id?'} component={Admin_page_layout} Content={<Halls_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/halls/'} component={Admin_page_layout} Content={<Halls_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    {/* ==================================================================================================================================================================================== */}
                    <AdminProtectedeRoute exact path={'/admin/movies/creat'} component={Admin_page_layout} Content={<Movies_create/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/movies/edit/:id?'} component={Admin_page_layout} Content={<Movies_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/movies/'} component={Admin_page_layout} Content={<Movies_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    {/* ==================================================================================================================================================================================== */}
                    <AdminProtectedeRoute exact path={'/admin/schedules/creat'} component={Admin_page_layout} Content={<Schedule_create/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/schedules/edit/:id?'} component={Admin_page_layout} Content={<Schedule_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/schedules/'} component={Admin_page_layout} Content={<Schedule_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    {/* ==================================================================================================================================================================================== */}
                    {/* <AdminProtectedeRoute exact path={'/admin/purchases/'} component={Admin_page_layout} Content={<Purchase_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>    */}
                    {/* ==================================================================================================================================================================================== */}
                    {/* <AdminProtectedeRoute exact path='/admin/durations/edit' component={Admin_page_layout} Content={<Durations_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}>   

                    </AdminProtectedeRoute> */}
                    {/* <AdminProtectedeRoute exact path='/admin/durations' component={Durations_main} ScrollToTtheTop={<ScrollToTtheTop/>}>   

                    </AdminProtectedeRoute> */}
                    {/* <Route  exact path="/product/:id?"  >
                        <ScrollToTtheTop/>
                        <Product/>
                    </Route>   
                    
                    <AuthProtectedeRoute exact path='/cart' component={Cart} ScrollToTtheTop={<ScrollToTtheTop/>}>                    
                        
                    </AuthProtectedeRoute> */}
                    

                    <GuestProtectedeRoute exact path='/register' component={Register} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <GuestProtectedeRoute exact path='/login' component={Login} ScrollToTtheTop={<ScrollToTtheTop/>}/>                    


                

                </Switch>
        </Router>
    
)
export default routes