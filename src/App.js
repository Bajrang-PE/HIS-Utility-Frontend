import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import DbConfigMaster from './pages/dashboardMasterPgs/DbConfigMaster';
import ParameterMaster from './pages/dashboardMasterPgs/ParameterMaster';
import DbSubmenuMaster from './pages/webServiceMasterPgs/DbSubmenuMaster';
import ServiceUserMaster from './pages/webServiceMasterPgs/ServiceUserMaster';
import DataServiceMaster from './pages/webServiceMasterPgs/DataServiceMaster';
import WidgetMaster from './pages/dashboardMasterPgs/WidgetMaster';
import { ToastContainer } from 'react-toastify';
import TabMaster from './pages/dashboardMasterPgs/TabMaster';

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense
        fallback={
          <div className="pt-3 text-center">
            
          </div>
        }
      > */}
        <Routes>
          {/* <Route exact path="/login" name="Login Page" element={<Login />} /> */}
          <Route exact path="/dashboard-configuration-master" name="Register Page" element={<DbConfigMaster />} />
          <Route exact path="/" name="login" element={<DbConfigMaster />} />
          <Route exact path="/parameter-master" name="login" element={<ParameterMaster />} />
          <Route exact path="/dashboard-submenu-master" name="login" element={<DbSubmenuMaster />} />
          <Route exact path="/service-user-master" name="login" element={<ServiceUserMaster />} />
          <Route exact path="/data-service-master" name="login" element={<DataServiceMaster />} />
          <Route exact path="/widget-master" name="login" element={<WidgetMaster />} />
          <Route exact path="/tab-master" name="Tab Master" element={<TabMaster />} />
          {/* <Route exact path="*" name='Home' element={<Auth comp={DefaultLayout}/>} /> */}
        </Routes>
      {/* </Suspense> */}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
