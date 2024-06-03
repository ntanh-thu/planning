import { route } from './route';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import './App.css';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<Navigate to="/portal" replace={true} />} />
            {route.map((item, i) => {
               return (
                  <Route path={item.path} element={item.element} key={i}>
                     {item.children !== undefined
                        ? item.children.map((itemchildren, ichildren) => {
                             return <Route path={itemchildren.path} element={itemchildren.element} key={ichildren} />;
                          })
                        : null}
                  </Route>
               );
            })}
         </Routes>
      </BrowserRouter>
   );
}
