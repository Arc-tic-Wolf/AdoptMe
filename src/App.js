// Your code is going to go here
const App = () => {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Adopt"),
      React.createElement("h1", {}, "Me!")
    );
  };

  ReactDOM.render(React.createElement(App), document.getElementById("root"));