import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import News from './pages/News/News'
import Articles from './pages/Articles/Articles'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'

function App() {
  return (
      <Layout>
        <Switch>
            <Route path='/news/create' component={Create}/>
            <Route path='/articles/create' component={Create}/>
            <Route path='/news' component={News}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/' component={Home}/>
        </Switch>
      </Layout>
  );
}

export default App;
