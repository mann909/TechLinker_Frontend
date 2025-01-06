// import { useEffect } from 'react';
// import './App.css';
// import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { apiPaths } from './ApiServices/ApiPaths';
// import Layout from './Layout/Layout';
// import { useSelector, useDispatch } from 'react-redux';
// import ApiService from './ApiServices/ApiService';
// import { setIsLoggedIn, setUser } from './Store/user.slice';
// import { setLoading } from './Store/loader.slice';
// import LandingPage from './Pages/CommonPages/LandingPage';
// import Login from './Pages/PublicPages/Login/Login';
// import AboutUs from './Pages/CommonPages/AboutUs/AboutUs';
// import FindJobs from './Pages/CommonPages/FindJobs/FindJobs';
// import Training from './Pages/CommonPages/Training/Training';
// import Career from './Pages/CommonPages/Career/Career';
// import ContactUs from './Pages/CommonPages/ContactUs/ContactUs';
// import ITSectors from './Pages/CommonPages/Services/ITSectors/ITSectors';
// import RecruitmentServices from './Pages/CommonPages/Services/RecruitmentServices/RecruitmentServices';
// import IndustrySpecificTraining from './Pages/CommonPages/Services/IndustryTraining/IndustrySpecificTraining';
// import OngoingSupport from './Pages/CommonPages/Services/OngoingSupport/OngoingSupport';
// import SignUp from './Pages/PublicPages/Signup/SignUp';
// import NotFound from './Components/NotFound';

// function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector((state) => state.loader.isLoading);
//   // const loading = false;
//   const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 
//   // const isLoggedIn = false;

//   useEffect(() => { 
//     const checkToken = async () => {
//       dispatch(setLoading(true));
//       try {
//         const response = await ApiService({
//           method: "GET",
//           endpoint: apiPaths.checkToken,
//         });

//         dispatch(setIsLoggedIn(true));
//         dispatch(setUser(response.response));
//         console.log("TOKEN VERIFIED ",response)
//       } catch (e) {
//         dispatch(setIsLoggedIn(false));
//         dispatch(setUser(null));
//         console.log("TOKEN ARE NOT VERIFIED ")
//         console.log("Error while Checking token", e);
//       } finally {
//         dispatch(setLoading(false));
//       }
//     }
//     checkToken();
//   }, []);

//   if (loading) {
//     return <div className='flex justify-center items-center h-[100vh] text-2xl'>Loading...</div>
//   }

//   return (
//     <Router>
      
//       <Routes>
//         <Route path='/' element={<Layout />}> 

//           {/* Common Routes */}
//           <Route path='' element={<LandingPage />} />
//           <Route path='about-us' element={<AboutUs/>} />
//           <Route path='jobs' element={<FindJobs/>} />
//           <Route path='training' element={<Training/>} />
//           <Route path='career' element={<Career/>} />
//           <Route path='contact-us' element={<ContactUs/>} />
//           <Route path='services/it-sectors' element={<ITSectors/>} />
//           <Route path='services/recruitment-services' element={<RecruitmentServices/>} />
//           <Route path='services/industry-specific-training' element={<IndustrySpecificTraining/>} />
//           <Route path='services/ongoing-support' element={<OngoingSupport/>} />
//           <Route path='*' element={<NotFound />} />

//           {/* Strictly Private Routes */}
//           { isLoggedIn ? 
//           (
//             <>
//               <Route path="employer/jobs" element={<>Employer/Jobs</>} />
//               <Route path="candidate/jobs" element={<>Candidate/Jobs</>} />
//             </>
//           )
//             :
//           {/* Strictly Public Routes */}
//           (
//             <>
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<SignUp />} />
//             </>
//           )
//           }

          
//         </Route>
//       </Routes>

//     </Router>
//   );
// }

// export default App;



//better way of writing code (DOnt delete teh above code)

import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { apiPaths } from './ApiServices/ApiPaths';
import Layout from './Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from './ApiServices/ApiService';
import { setIsLoggedIn, setUser } from './Store/user.slice';
import { setLoading } from './Store/loader.slice';
import LandingPage from './Pages/CommonPages/LandingPage';
import Login from './Pages/PublicPages/Login/Login';
import AboutUs from './Pages/CommonPages/AboutUs/AboutUs';
import Training from './Pages/CommonPages/Training/Training';
import Career from './Pages/CommonPages/Career/Career';
import ContactUs from './Pages/CommonPages/ContactUs/ContactUs';
import ITSectors from './Pages/CommonPages/Services/ITSectors/ITSectors';
import RecruitmentServices from './Pages/CommonPages/Services/RecruitmentServices/RecruitmentServices';
import IndustrySpecificTraining from './Pages/CommonPages/Services/IndustryTraining/IndustrySpecificTraining';
import OngoingSupport from './Pages/CommonPages/Services/OngoingSupport/OngoingSupport';
import SignUp from './Pages/PublicPages/Signup/SignUp';
import NotFound from './Components/NotFound';
import Profile from './Pages/PrivatePages/Candidate/Profile/Profile';
import FindJobs from './Pages/PrivatePages/Candidate/FindJobsSection/FindJobs';
import Jobs from './Pages/CommonPages/Jobs/Jobs';
import EmployerProfile from './Pages/PrivatePages/Employer/Profile/EmployerProfile';
import PostJob from './Pages/PrivatePages/Employer/PostJobs/PostJob';
import ViewApplications from './Pages/PrivatePages/Employer/Applications/Applications/ViewApplications';
import ViewApplicants from './Pages/PrivatePages/Employer/Applications/Applicants/ViewApplicants';



function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.isLoading);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [role,setRole] = useState(useSelector((state) => state?.user?.user?.role));


  // HANDLE ALL THE ROUTING HERE  
const commonRoutes = [
  { path: '', element: <LandingPage /> },
  { path: 'about-us', element: <AboutUs /> },
  { path: 'jobs', element: <Jobs /> },
  { path: 'training', element: <Training /> },
  { path: 'career', element: <Career /> },
  { path: 'contact-us', element: <ContactUs /> },
  { path: 'services/it-sectors', element: <ITSectors /> },
  { path: 'services/recruitment-services', element: <RecruitmentServices /> },
  { path: 'services/industry-specific-training', element: <IndustrySpecificTraining /> },
  { path: 'services/ongoing-support', element: <OngoingSupport /> },
];

const publicRoutes = [
  { path: '/login', element: <Login setRole={setRole}/> },
  { path: '/signup', element: <SignUp /> },
]; 

const privateRoutes =  {
  // Candidate Route
  candidate:[
    { path: '/candidate/profile', element: <Profile/> },
    { path: '/candidate/findjobs', element: <FindJobs/> },
  ],

  // Employer Route
  employer:[
    { path: '/employer/profile', element: <EmployerProfile/> },
    { path: '/employer/postjobs', element: <PostJob/> },
    { path: '/employer/applications', element: <ViewApplications/> },
    { path: '/employer/applicant/:id', element: <ViewApplicants/> },
    // { path: '/employer/viewapplicants/:id', element: <ViewApplicant/> },
  ],
};

  useEffect(() => {
    const checkToken = async () => {
      dispatch(setLoading(true));
      try {
        const response = await ApiService({
          method: "GET",
          endpoint: apiPaths.checkToken,
        });

        dispatch(setIsLoggedIn(true));
        dispatch(setUser(response.response));
        setRole(response?.response?.role?.toLowerCase());
        console.log("TOKEN VERIFIED ", response);
      } catch (e) {
        dispatch(setIsLoggedIn(false));
        dispatch(setUser(null));
        console.log("TOKEN ARE NOT VERIFIED ");
        console.log("Error while Checking token", e);
      } finally {
        dispatch(setLoading(false));
      }
    }

    checkToken();
  }, [dispatch]);

  if (loading) {
    return <div className='flex justify-center items-center h-[100vh] text-2xl'>Loading...</div>
  }

  return (
    <Router>
      <Routes>
        {/* Routes with Headers and Footers */}
        <Route path='/' element={<Layout />}>
        {/* Common Routes */}
          {commonRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Strictly Private Routes */}
          {isLoggedIn && privateRoutes[role].map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        </Route>

        {/* Strictly Public Routes */}
        {!isLoggedIn && publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
// 


  