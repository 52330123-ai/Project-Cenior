import {Routes , Route} from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Sidebar from "../../Components/Sidebar";
import Overview from "./Overview"
import MyProject from "./MyProject";
import MyTeam from "./MyTeam";
import TaskManagement from "./TaskManagement";
import SubmissionReview from "./SubmissionReview";
import StudentEvaluations from "./StudentEvaluations";
import SkillsValidation from "./SkillsValidation";
import ProjectMilestones from "./ProjectMilestones";
import ProgressReports from "./ProgressReports";
import Messages from "./Messages";
import Notifications from "../Notifications";
import ProfileSettings from "../ProfileSettings";
import "../../Styles/Professor.css";
const Professor = () => {
    const sidebarProfessor=[
        {pageName:"Overview" , pageLink:"/Professor/Overview" },
        {pageName:"MyProject" , pageLink:"/Professor/MyProject" },
        {pageName:"MyTeam" , pageLink:"/Professor/MyTeam" },
        {pageName:"TaskManagement" , pageLink:"/Professor/TaskManagement" },
        {pageName:"SubmissionReview" , pageLink:"/Professor/SubmissionReview" },
        {pageName:"StudentEvaluations" , pageLink:"/Professor/StudentEvaluations" },
        {pageName:"SkillsValidation" , pageLink:"/Professor/SkillsValidation" },
        {pageName:"ProjectMilestones" , pageLink:"/Professor/ProjectMilestones" },
        {pageName:"ProgressReports" , pageLink:"/Professor/ProgressReports" },
        {pageName:"Messages" , pageLink:"/Professor/Messages" },
        {pageName:"Notifications" , pageLink:"/Professor/Notifications" },
        {pageName:"ProfileSettings" , pageLink:"/Professor/ProfileSettings" },
    ];
  return (
    <div className="professor">
       <NavBar />
       <div className="flex">
        <div className="linkProfessor"> 
        <h2>WORKSPACE</h2>
        {sidebarProfessor.map((sbp)=>(
          <Sidebar key={sbp.pageName} pageName={sbp.pageName} pageLink={sbp.pageLink} />
        )
        )
        }
       </div>

       <div className="contant">
        <Routes>
        <Route path="Overview" element={<Overview />} />
         <Route path="MyProject" element={<MyProject />} />
         <Route path="MyTeam" element={<MyTeam />} />
         <Route path="TaskManagement" element={<TaskManagement />} />
          <Route path="SubmissionReview" element={<SubmissionReview />} />
          <Route path="StudentEvaluations" element={<StudentEvaluations />} />
          <Route path="SkillsValidation" element={<SkillsValidation />} />
          <Route path="ProjectMilestones" element={< ProjectMilestones/>} />
          <Route path="ProgressReports" element={<ProgressReports />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="Notifications" element={<Notifications />} />
          <Route path="ProfileSettings" element={<ProfileSettings />} />

       </Routes>
       </div>

       </div>
    </div>
  )
}

export default Professor;