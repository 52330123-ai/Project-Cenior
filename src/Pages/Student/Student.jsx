
import NavBar from "../../Components/NavBar";
import Overview from "./Overview";
import Sidebar from "../../Components/Sidebar";
import MyProject from "./MyProject";
import {Routes , Route} from "react-router-dom";
import "../../Styles/Student.css";
import MyTeam from "./MyTeam";
import MyTasks from "./MyTasks";
import FilesDeliverables from "./FilesDeliverables";
import MyProgress from "./MyProgress";
import Feedback from "./Feedback";
import Messages from "./Messages";
import Notifications from "../Notifications";
import ProfileSettings from "../ProfileSettings";
const Student = () => {
const sidebarStudent=[
  {pageName:"Overview" , pageLink:"/Student/Overview" },
  {pageName:"MyProject" , pageLink:"/Student/MyProject" },
  {pageName:"MyTeam" , pageLink:"/Student/MyTeam"},
  {pageName:"MyTasks" , pageLink:"/Student/MyTasks"},
  {pageName:"Files & Deliverables" , pageLink:"/Student/FilesDeliverables"},
  {pageName:"MyProgress" , pageLink:"/Student/MyProgress"},
  {pageName:"Feedback" , pageLink:"/Student/Feedback"},
  {pageName:"Messages" , pageLink:"/Student/Messages"},
  {pageName:"Notifications" , pageLink:"/Student/Notifications"},
  {pageName:"Profile & Settings" , pageLink:"/Student/ProfileSettings"},
];
  return (
    <div>
      <NavBar />
       <div className="flex">
       <div className="linkStudent"> 
        <h2>WORKSPACE</h2>
        {sidebarStudent.map((sbs)=>(
          <Sidebar key={sbs.pageName} pageName={sbs.pageName} pageLink={sbs.pageLink} />
        )
        )
        }
       </div>
       <div className="contant">
        <Routes>
        <Route path="Overview" element={<Overview />} />
         <Route path="MyProject" element={<MyProject />} />
         <Route path="MyTeam" element={<MyTeam />} />
         <Route path="MyTasks" element={<MyTasks />} />
          <Route path="FilesDeliverables" element={<FilesDeliverables />} />
          <Route path="MyProgress" element={<MyProgress />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Messages" element={< Messages/>} />
          <Route path="Notifications" element={<Notifications />} />
          <Route path="ProfileSettings" element={<ProfileSettings />} />

       </Routes>
       </div>

       </div>
    </div>
  );
};
export default Student;
