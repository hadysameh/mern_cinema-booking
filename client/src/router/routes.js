import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";
import Login from "../auth/login";
import Register from "../auth/register";
import Admin_page_layout from '../admin/pages/admin_page_layout'
import ScrollToTtheTop from '../components/ScrollToTtheTop'
import Durations_create from "../admin/pages/durations_pages/create/durations_create";
import Durations_edit from "../admin/pages/durations_pages/edit/durations_edit";
import Durations_main from "../admin/pages/durations_pages/main/durations_main";
// ======================================================================================================
import Halls_create from "../admin/pages/halls_pages/create/halls_create";
import Halls_edit from "../admin/pages/halls_pages/edit/halls_edit";
import Halls_main from "../admin/pages/halls_pages/main/halls_main";
// ======================================================================================================
import GuestProtectedeRoute from './../middelware/isGuest'
import AdminProtectedeRoute from './../middelware/isAdmin'
import AuthProtectedeRoute from './../middelware/isAuth'


 

let routes = (
    
        <Router >
            <ScrollToTtheTop/>
                <Switch>

                    
                    <Route exact path='/'>
                        <Admin_page_layout>main page</Admin_page_layout>
                    </Route>  
                    {/* <Route exact path='/admin/durations/creat'>
                        <Admin_page_layout Content={<Durations_create/>}>main page</Admin_page_layout>
                    </Route>   */}
                    {/* <Route exact path='/admin/durations/creat'>
                        <Admin_page_layout content={<Durations_create/>} />
                    </Route>
                    <Route exact path='/admin/durations/edit'>
                        <Admin_page_layout content={<Durations_edit/>} />
                    </Route>    
                    <Route exact path='/admin/durations'>
                        <Admin_page_layout content={<Durations_main/>} />
                    </Route>  */}
                   

                    
                    {/* <AdminProtectedeRoute exact path={'/admin'} component={Admin_page_layout}  ScrollToTtheTop={<ScrollToTtheTop/>}/>    */}
                    <AdminProtectedeRoute exact path={'/admin/durations/creat'} component={Admin_page_layout} Content={<Durations_create/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/durations/edit/:id?'} component={Admin_page_layout} Content={<Durations_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/durations/'} component={Admin_page_layout} Content={<Durations_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    {/* ==================================================================================================================================================================================== */}
                    <AdminProtectedeRoute exact path={'/admin/halls/creat'} component={Admin_page_layout} Content={<Halls_create/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/halls/edit/:id?'} component={Admin_page_layout} Content={<Halls_edit/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   
                    <AdminProtectedeRoute exact path={'/admin/halls/'} component={Admin_page_layout} Content={<Halls_main/>} ScrollToTtheTop={<ScrollToTtheTop/>}/>   

                    
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