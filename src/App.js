import React from 'react'
import Layout from './hoc/Layout/Layout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Auth from './pages/Auth/Auth'
import {useDispatch} from 'react-redux'
import {autoLogin} from './store/actions/auth'
import Posts from './pages/Posts/Posts'
import {loadPosts} from './store/actions/data'
import ChangePost from './pages/ChangePost/ChangePost'

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loadPosts())
        dispatch(autoLogin())
    })

    let routes = (
        <BrowserRouter>
            <Route path='/auth' component={Auth}/>
            <Layout>
                <Switch>
                    <Route path='/news/create' component={Create}/>
                    <Route path='/articles/create' component={Create}/>
                    <Route exact path='/news/:id' component={ChangePost}/>
                    <Route exact path='/articles/:id' component={ChangePost}/>
                    <Route path='/news' component={Posts}/>
                    <Route path='/articles' component={Posts}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
    return routes;
}

export default App;
