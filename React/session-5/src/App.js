import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";

import Header from "./components/Header"; //this is known as default import

// import {Title} from "./components/Title"; //this is known as name import as you import funtion name
import Body from './components/Body';
import Footer from './components/Footer';

// Headers
            //    -Logo
            //    -NavBar
            //    -Cart
            // Body
            //    -Search Bar
            //    -RestaurentList
            //     -RestaurentCard (many card)
            //      -Image
            //      -Rating
            //      -Name
            //      -Cusine  
            // Footer  
            //    -Links
            //    -Copyright

const AppLayout = () =>{
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}

function formatDate(date){
    return date.toLocaleDateString();
}

const comment = {
    date : new Date(),
    text : 'hope you are enjoing to learn REact',
    author:{
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}

const Avtar = (props)=>{
    return (
        <img className="Avtar"
            src = {props.user.avatarUrl}
            alt ={props.user.name}
        />
    )
}

const UserInfo = (props)=>{
    return(
        <div className="UserInfo">
            <Avtar user= {props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
            {formatDate(props.date)}
         </div>
        </div>
    )
}

///////////////////Key example
const numbers = [
    {
      id: 1,
      name: 'XYZ'
    },
    {
      id: 2,
      name: 'uiop'
    },
    {
      id: 3,
      name: 'ABC'
    }
  ];
  const ListItems = numbers.map((item) =>
    <li key={item.id}>
      {item.name}
    </li>
  );

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
// root.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author}/>
// ) 
// root.render(ListItems);