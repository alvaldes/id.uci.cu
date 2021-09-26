import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './src/pages/Homepage/Homepage.jsx'
import Catalogue from './src/pages/Catalogue'
import Consumption from './src/pages/Consumption'
import Courses from './src/pages/Courses'
import Places from './src/pages/Places'
import Production from './src/pages/Production'
import Professors from './src/pages/Professors'
import Publications from './src/pages/Publications'
import NotFound from './src/pages/NotFound/NotFound.jsx'
import { height } from '@mui/system'

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
