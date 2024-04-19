import { route } from './route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import './App.css';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            {route.map((item, i) => {
               return <Route path={item.path} element={item.element} key={i} />;
            })}
         </Routes>
      </BrowserRouter>
   );
}
