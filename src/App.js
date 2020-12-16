import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Exam from '@/views/exam';
// import Exam from '@/views/exam/test';
import Swiper from '@/components/swiper';
function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/swiper'>
            <Swiper />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
