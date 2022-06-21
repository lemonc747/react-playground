import { Routes, Route, Link } from 'react-router-dom';
import HistoryComp from './history';

const RouteComp = () => {
  const a = (a: number) => {
    console.log('111', a);
  };
  return (
    <div>
      <nav>
        <Link to='history'>history base</Link>
      </nav>
      <Routes>
        <Route path='history' element={<HistoryComp />} />
      </Routes>
    </div>
  );
};

export default RouteComp;
