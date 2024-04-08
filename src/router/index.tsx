import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeLayout } from '../Layouts'
import { HomeContent } from '../pages'

const WebRoutes = (props:any) =>{
    const {} = props;
  
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeLayout Content={<HomeContent/>} />} />
        <Route path="/feed" element={<HomeLayout Content={<HomeContent/>} />} />
        <Route path="/pick" element={<HomeLayout Content={<HomeContent/>} />} />
        <Route path="/hitz" element={<HomeLayout Content={<HomeContent/>} />} />
        <Route path="/explore" element={<HomeLayout Content={<HomeContent/>} />} />
        <Route path="/point" element={<HomeLayout Content={<HomeContent/>} />} />
        <Route path="/event" element={<HomeLayout Content={<HomeContent/>} />} />
      </Routes>
    );
  }

  export default WebRoutes;