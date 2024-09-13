// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import Landingpage from '../pages/Landing';
import Navbar from '../components/Navbar';
export function App() {
  return (
    <div className='bg-zinc-100 w-screen h-screen'>
      <Navbar text='Your Personal Health Assistant'/>
      <Landingpage />
    </div>
  );
}

export default App;
