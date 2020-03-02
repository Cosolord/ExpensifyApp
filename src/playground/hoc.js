import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    {props.isAdmin && <p>For Admin only!</p>}
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>For Admin only!</p>}
      <p>This is private info. Don't share</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requiredAuthentication = (WrappedComponent) => {
  return (props) => <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please LOG IN!</p>}</div>;
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="You logged in" />, document.getElementById('app'));
