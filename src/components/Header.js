// import prop types
import PropTypes from "prop-types";
import Button from "./Button";

// can pass in props, but can also destructure them ({}) and use {title} rather than {props.title}
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      {/* can write css styling in-line */}
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// can write default props that will override values from App.js
Header.defaultProps = {
  title: "Task Tracker",
};

// use proptypes to set prop type, if it's required, etc
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// can write css styling as variable
// const headingStyle = {
//     color: 'purple',
//     backgroundColor: 'teal'
// }

export default Header;

// can write this as class as well:
// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }
