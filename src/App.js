import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Exam from '@/views/exam';
import Exam from '@/views/exam/test';
function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/'>
            <Exam />
          </Route>
          <Route path='/about'>
            <About />
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
