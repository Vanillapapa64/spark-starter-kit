// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import Landingpage from '../pages/Landing';
import Navbar from '../components/Navbar';
import { Signup } from '../pages/Signupuser';
import { Signin } from '../pages/Signin';
import Dashboard from '../pages/Dashboard';
import Pastreport from '../components/Pastreportcard';
import Sidebar from '../components/Sidebar';
import BloodReportChart from '../components/Graph';
import ReportUploader from '../pages/Upload';
import Therapist from '../pages/Therapist';
import Past from '../pages/Pastreports';
import Doc from '../components/Doc';
import Docdash from '../pages/Docdash';
import { BrowserRouter } from 'react-router-dom';
export function App() {
  return (
    <div className=' w-screen h-max flex'>
      <RecoilRoot>
      <BrowserRouter>
      <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/upload' element={<ReportUploader/>}/>
      <Route path='/therapist' element={<Therapist/>} />
      <Route path='/Doc' element={<Docdash/>} />
      <Route path='/pastreports' element={<Past />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<Landingpage/>}/>
      </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
