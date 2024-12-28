import { useEffect } from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { apiPaths } from './ApiServices/ApiPaths';
import Layout from './Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from './ApiServices/ApiService';
import { setIsLoggedIn } from './Store/user.slice';
import { setLoading } from './Store/loader.slice';
import LandingPage from './Pages/CommonPages/LandingPage';
import Login from './Pages/PublicPages/Login/Login';
import AboutUs from './Pages/CommonPages/AboutUs/AboutUs';
import FindJobs from './Pages/CommonPages/FindJobs/FindJobs';
import Training from './Pages/CommonPages/Training/Training';
import Career from './Pages/CommonPages/Career/Career';
import ContactUs from './Pages/CommonPages/ContactUs/ContactUs';
import ITSectors from './Pages/CommonPages/Services/ITSectors/ITSectors';
import RecruitmentServices from './Pages/CommonPages/Services/RecruitmentServices/RecruitmentServices';
import IndustrySpecificTraining from './Pages/CommonPages/Services/IndustryTraining/IndustrySpecificTraining';
import OngoingSupport from './Pages/CommonPages/Services/OngoingSupport/OngoingSupport';
import SignUp from './Pages/PublicPages/Signup/SignUp';

function App() {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.loader.isLoading);
  const loading = false;
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isLoggedIn = false;

  useEffect(() => {
    const checkToken = async () => {
      dispatch(setLoading(true));
      try {
        await ApiService({
          method: "GET",
          endpoint: apiPaths.checkToken,
        });
        dispatch(setIsLoggedIn(true));
      } catch (e) {
        dispatch(setIsLoggedIn(false));
        console.log("Error while Checking token", e);
      } finally {
        dispatch(setLoading(false));
      }
    }
    // checkToken();
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center h-[100vh] text-2xl'>Loading...</div>
  }

  return (
    <Router>
      {/* Common Routes */}
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route path='' element={<LandingPage />} />
          <Route path='about-us' element={<AboutUs/>} />
          <Route path='find-jobs' element={<FindJobs/>} />
          <Route path='training' element={<Training/>} />
          <Route path='career' element={<Career/>} />
          <Route path='contact-us' element={<ContactUs/>} />
          <Route path='services/it-sectors' element={<ITSectors/>} />
          <Route path='services/recruitment-services' element={<RecruitmentServices/>} />
          <Route path='services/industry-specific-training' element={<IndustrySpecificTraining/>} />
          <Route path='services/ongoing-support' element={<OngoingSupport/>} />
          {/* <Route path='login' element={<Login/>} /> */}
        </Route>
      </Routes>

      {/* Strictly Public Routes */}
      
      {!isLoggedIn &&
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
        } 


      {/* Strictly Private Routes */}
      {isLoggedIn &&
        <Routes>
            <Route path="/employer" element={<Layout />} >
              {/* Employer sections */}
              <Route path="jobs" element={<>Employer/Jobs</>} />
            </Route>


              {/* Candidate sections */}
            <Route path="/candidate" element={<Layout />} >
              <Route path="jobs" element={<>Candidate/Jobs</>} />
            </Route>
        </Routes>
      }


    </Router>
  );
}

export default App;






  