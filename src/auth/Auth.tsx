import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import { Action } from 'redux';
import { logIn } from './actions';

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  logIn: (): Action => dispatch(logIn)
});

const mapStateToProps = (state: any) => ({
  user:   state.auth.user
});

const connector = connect(mapStateToProps, mapDispatchToProps );

interface IProps {
  user: any;
  logIn(): Action;
}

class AuthComponent extends React.Component<IProps, { }> {
  componentWillMount() {
    this.props.logIn();
  }
  render() {
    return (
      <div>
        {this.props.user ? this.props.children : null}
      </div>
    );
  }
}

export const Auth = connector(AuthComponent);
