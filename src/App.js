import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
// import Portfolio from "./Pages/Portfolio";
// import Services from "./Pages/Services";

function App() {
  return (
   <Layout>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       {/* <Route path="/services" component={Services}/> */}
       {/* <Route path="/portfolio" component={Portfolio}/> */}
       {/* <Route path="/contact" component={Contact}/> */}
       <Route><NotFoundPage/></Route>
     </Switch>
   </Layout>
  );
}

export default App;
