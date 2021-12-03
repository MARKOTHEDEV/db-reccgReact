import { Route, Switch, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Departments from "./Pages/Departments";
import Events from "./Pages/Events";
import Give from "./Pages/Give";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import Resources from "./Pages/Resources";
import WorkProgress from "./Pages/WorkProgress";
import VideoArchive from './Pages/VideoArchive';
import AllMinisters from './Pages/AllMinisters';
import Gallery from './Pages/Gallery';

function App() {
  let location = useLocation();
  return (
   <Layout>
     <Switch location={location} key={location.pathname}>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/resources" component={Resources}/>
       <Route path="/departments" component={Departments}/>
       <Route path="/events" component={Events}/>
       <Route path="/workProgress" component={WorkProgress}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/give" component={Give}/>
       <Route path="/archive" component={VideoArchive}/>
       <Route path="/all-minister" component={AllMinisters } />
       <Route path={'/gallery'} component={Gallery} />
       <Route><NotFoundPage/></Route>
     </Switch>
   </Layout>
  );
}

export default App;
