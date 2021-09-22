import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Catalogue from './pages/Catalogue'
import Consumption from './pages/Consumption'
import Courses from './pages/Courses'
import Places from './pages/Places'
import Production from './pages/Production'
import Professors from './pages/Professors'
import Publications from './pages/Publications'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        < Route exact path="/" component={Homepage} />
        < Route exact path="/catalogue" component={Catalogue} />
        < Route exact path="/consumption" component={Consumption} />
        < Route exact path="/courses" component={Courses} />
        < Route exact path="/places" component={Places} />
        < Route exact path="/production" component={Production} />
        < Route exact path="/professors" component={Professors} />
        < Route exact path="/publications" component={Publications} />
        < Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;