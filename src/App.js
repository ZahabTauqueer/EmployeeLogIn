import React from 'react';
import LogIn from './components/LogIn'
import EmployeeList from './components/EmployeeList'
import Navbar from './components/Navbar'
import { BrowserRouter , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">   
        <Navbar />
        <Switch>
          <Route path='/login' component={LogIn}/>
          <Route path='/employeelist' component={EmployeeList}/>
        </Switch>    
      </div>      
    </BrowserRouter>
  );
}

export default App;
