import "./App.scss";
import {
  HashRouter as Router,
  Navigate,
  // Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
// import { ProtectRoute } from "./utils/ProtectRoutes";

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import useDisableScroll from "./utils/useDisableScroll ";
import { useStateValue } from "./StateProvider";
import { ProtectRoute } from "./utils/ProtectRoutes";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import ScriptList from "./pages/Script/components/ScriptList/ScriptList";
import AddUpdateScriptDetail from "./pages/Script/components/AddUpdateScriptDetail/AddUpdateScriptDetail";
import Tender from "./pages/Script/components/Tender/Tender";
import Project from "./pages/Script/components/Project/Project";
import Ca from "./pages/Script/components/CA/Ca";
import Grants from "./pages/Script/components/Grants/Grants";
import Developer from "./pages/Developer/components/Developer/Developer";
import AddUpdateDeveloperdetail from "./pages/Developer/components/AddUpdateDeveloperDetail/AddUpdateDeveloperdetail";
import TenderData from "./pages/Data/components/TenderData/components/TenderData/TenderData";
import AddUpdateTenderDetail from "./pages/Data/components/TenderData/components/AddUpdateTenderDetail/AddUpdateTenderDetail";
import ProjectData from "./pages/Data/components/ProjectData/components/ProjectData/ProjectData";
import AddUpdateProjectDetail from "./pages/Data/components/ProjectData/components/AddUpdateProjectDetail/AddUpdateProjectDetail";
import CaData from "./pages/Data/components/CAData/components/CAData/CaData";
import AddUpdateCaDetail from "./pages/Data/components/CAData/components/AddUpdateCaDetail/AddUpdateCaDetail";
import GrantsData from "./pages/Data/components/GrantsData/components/GrantsData/GrantsData";
import AddUpdateGrantsDetail from "./pages/Data/components/GrantsData/components/AddUpdateGrantsDetail/AddUpdateGrantsDetail";
// import AdminEmail from "./pages/AdminEmail/components/AdminEmail/AdminEmail";
// import AddUpdateAdminEmailDetail from "./pages/AdminEmail/components/AddUpdateAdminEmailDetail/AddUpdateAdminEmailDetail";
import { ToastContainer } from "react-toastify";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import Admin from "./pages/Admin/components/Admin/Admin";
import AddUpdateAdminDetail from "./pages/Admin/components/AddUpdateAdminDetail/AddUpdateAdminDetail";
// import AddUpdateScriptDetail from "./pages/Script/components/AddUpdateScriptDetail/AddUpdateScriptDetail";

function App() {
  const [{ userLoggedIn, sysConfig, isLoading }, dispatch] = useStateValue();
  const [isToggled, setIsToggle] = useState(true);
  useDisableScroll();

  const toggle = () => {
    setIsToggle(!isToggled);
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsToggle(true);
    }
  }, []);

  return (
    <div
      id="main-wrapper"
      className={`${isToggled ? "main-wrapper toggled" : "main-wrapper"}`}
    >
      <Router>
        {isLoading && <LoadingSpinner />}
        {/* <Toaster /> */}
        {/* Main application routes */}
        <Routes>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Header toggle={toggle} />
                <Sidebar toggle={toggle} />
                <Outlet />
              </ProtectRoute>
            }
          >
            <Route
              index
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route path="/script" element={<ScriptList />} />
            <Route path="/add/script" element={<AddUpdateScriptDetail />} />
            <Route
              path="/update/script/:scriptId"
              element={<AddUpdateScriptDetail />}
            />
            <Route path="/tender" element={<Tender />} />
            <Route path="/project" element={<Project />} />
            <Route path="/ca" element={<Ca />} />
            <Route path="/grants" element={<Grants />} />
            <Route path="/developer" element={<Developer />} />
            <Route
              path="/add/developer"
              element={<AddUpdateDeveloperdetail />}
            />
            <Route
              path="/update/developer/:developerId"
              element={<AddUpdateDeveloperdetail />}
            />
            <Route path="/tenderData" element={<TenderData />} />
            <Route path="/add/tender" element={<AddUpdateTenderDetail />} />
            <Route
              path="/update/tender/:tenderId"
              element={<AddUpdateTenderDetail />}
            />
            <Route path="/projectData" element={<ProjectData />} />
            <Route path="/add/project" element={<AddUpdateProjectDetail />} />
            <Route
              path="/update/project/:projectId"
              element={<AddUpdateProjectDetail />}
            />
            <Route path="/caData" element={<CaData />} />
            <Route path="/add/ca" element={<AddUpdateCaDetail />} />
            <Route path="/update/ca/:caId" element={<AddUpdateCaDetail />} />
            <Route path="/grantsData" element={<GrantsData />} />
            <Route path="/add/grants" element={<AddUpdateGrantsDetail />} />
            <Route
              path="/update/grants/:grantsId"
              element={<AddUpdateGrantsDetail />}
            />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/add/admin"
              element={<AddUpdateAdminDetail />}
            />
            <Route
              path="/update/admin/:adminId"
              element={<AddUpdateAdminDetail />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/sign-in" />} />

          {/* Redirect unknown paths to home */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Router>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
