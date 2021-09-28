import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Departments from "./Pages/Departments";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import Resources from "./Pages/Resources";
import WorkProgress from "./Pages/WorkProgress";



function App() {
  return (
   <Layout>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/resources" component={Resources}/>
       <Route path="/departments" component={Departments}/>
       <Route path="/events" component={Events}/>
       <Route path="/workProgress" component={WorkProgress}/>
       <Route path="/contact" component={Contact}/>
       <Route><NotFoundPage/></Route>
     </Switch>
   </Layout>
  );
}

export default App;
