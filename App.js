import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",{id: "title",key: "h1",},"Namaste Everyone !");
const heading = (<h1 id="title" key="h1" >Learning React</h1>)
console.log(heading);

// const heading2 = React.createElement("h2",{id: "title", key:"h2",},"Heading 2");
const Title = () =>  (<h1 id="title" key="h2">Hi Everyone</h1>)

// const container = React.createElement("div",{id:"container",hello: "world",},[heading, heading2]);

// console.log(heading);

const HeaderComponent = () => {
    return(
        <div>
            {heading}
            <Title/>
        <h2>Header functional COMPONENT</h2>
        <h2>this is an h2 functional component</h2>
        </div>
    ); 
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root 

//async defer 

root.render(<HeaderComponent/>);
