import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
// import Messages from './screens/MessagesPage/Messages'
import WebSocketInstance from './conf/websocket'
import MainPage from './screens/MainPage'
import Login from './screens/RegisterPage/LogIn'
import Register from './screens/RegisterPage/Register'
import Forgot from './screens/RegisterPage/ForgotPage'
import RegisterGuest from './screens/RegisterPage/registerGuest'
import RegisterUser from './screens/RegisterPage/registerUser'
import Attendees from './screens/MyMeetingsPage'
import 'semantic-ui-css/semantic.min.css'


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
      localStorage.getItem("access_token") ? (
          <Component{...props} />
      ) : (
              <Redirect to={{
                  pathname: "/",
                  state: { from: props.location }
              }}
              />
          )
  }
  />
)

class App extends Component {
    // componentDidMount(){
    //     WebSocketInstance.connect()
    // }
    render() {
      return (
          <div>
              <Provider store={store}>
                  <Router>
                      <Switch>
                            <Route path="/main" component={MainPage} />
                            <Route path="/forgot" component={Forgot} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/registerUser" component={RegisterUser} />
                            <Route path="/registerGuest" component={RegisterGuest} />
                            <Route path="/myMettingsPage" component={Attendees} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}
export default App;
