import React, { Suspense } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import myEE from '@/utils/eventEmitter'

const Home = React.lazy(() => import('@/pages/home/Home'))

class RouteMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      historyListener: null
    }
  }

  componentWillMount() {
    console.log(myEE)
    myEE.on('push', this.push.bind(this))
  }

  componentDidMount() {
    // 监听url变化 4.29.6
    console.log(this)
    this.props.history.listen(e => {
      // if(window.env=='ali'){
      //     window.my.postMessage({
      //         type: 'url',
      //         val: e.pathname + e.search
      //     })
      // }else if(window.env=='wx'){
      //     window.ws.send(JSON.stringify({
      //         type: '1',
      //         token: localStorage.getItem('token'),
      //         data: {
      //             type: 'url',
      //             val: e.pathname + e.search,
      //         }
      //     }))
      // }
    })
  }

  push(url) {
    this.props.history.push(url)
  }

  render() {
    // let history = createBrowserHistory()
    return (
      // <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/home" replace />}
          />
          {/* exact is very important */}
          <Route exact path="/home" component={Home} />
        </Switch>
      </Suspense>
      // </Router>
      // </BrowserRouter>
    )
  }
}
export default withRouter(RouteMap)
