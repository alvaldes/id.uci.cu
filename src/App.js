import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage.jsx'
import Catalogue from './pages/Catalogue/Catalogue'
import Consumption from './pages/Consumption/Consumption'
import Courses from './pages/Courses/Courses'
import Places from './pages/Places/Places'
import Production from './pages/Production/Production'
import Professors from './pages/Professors/Professors'
import Publications from './pages/Publications/Publications'
import NotFound from './pages/NotFound/NotFound.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    let height = this.state.height;
    return (
      <BrowserRouter>
        <Switch>
          < Route exact path="/"><Homepage height={this.state.height}/></Route>
          < Route exact path="/catalogue" component={Catalogue} />
          < Route exact path="/consumption" component={Consumption} />
          < Route exact path="/courses" component={Courses} />
          < Route exact path="/places" component={Places} />
          < Route exact path="/production" component={Production} />
          < Route exact path="/professors" component={Professors} />
          < Route exact path="/publications" component={Publications} />
          < Route ><NotFound height={this.state.height}/></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
