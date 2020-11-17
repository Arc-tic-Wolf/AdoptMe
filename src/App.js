
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name:"Lucy",animal:"dog"} ),
        React.createElement(Pet, {name:"Tom",animal:"cat"} ),
        React.createElement(Pet, {name:"Pheonix",animal:"bird"} ),
        
        
    );
};

const Pet = props =>{
    return React.createElement(
        "div",
        {},
        React.createElement("h2",{},props.name),
        React.createElement("h3",{},props.animal)
    );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));