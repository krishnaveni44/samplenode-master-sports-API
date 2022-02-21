import { useState } from "react";
import "./App.css";
//import { useFormik } from "formik";

import Button from '@mui/material/Button';
//import { ColorBox } from "./ColorBox";
//import { double, Msg } from "./Msg"; 
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import { Link } from "react-router-dom";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import { Msg } from "./components/Msg";

import { NotificationsOffRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Stack from "@mui/material/Stack";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound";
import { AddColor } from "./AddColor";
import { AddMovie } from "./AddMovie";

// import { Msg } from "./Msg";
// //import { Welcome } from "./Welcome.1";
// import { Welcome } from "./Welcome"; 

//import React from "react";

export default function App() { 

const INITIAL_MOVIE_LIST = [
  { 
    id: "100",
    name: "cricket",
    poster:
      "https://m.media-amazon.com/images/I/71EWbUek4TL._SX466_.jpg",
    rating: 8.8,
    summary:
      "Depending on the type of cricket match being played, a match can last anywhere from three hours to five days. To win a match, a team must score more runs than their opponents. In test cricket, a team must also take 20 wickets when fielding to win the match. To score runs, a team must be batting.",
    trailer: "https://www.youtube.com/embed/wHEIT32ZEVs"
  },
  {
    id: "101",
    name: "football",
    poster:
      "https://media.gettyimages.com/photos/indias-players-celebrate-after-scoring-a-goal-during-fifa-world-cup-picture-id1166068229?s=2048x2048",
    rating: 7,
    summary:
      "A match consists of two 45 minutes halves with a 15 minute rest period in between. Each team can have a minimum off 11 players (including 1 goalkeeper who is the only player allowed to handle the ball within the 18 yard box) and a minimum of 7 players are needed to constitute a match.",
    trailer: "https://www.youtube.com/embed/OSGneV1pjXU"
  },
  {
    id: "102",
    name: "hockey",
    poster:
      "https://static.toiimg.com/photo/85062918.cms",
    rating: 8.1,
    summary:
      "A field hockey match consists of two halves, usually 35 minutes each, and begins with a pass back (a non-defended pass from one teammate to another at mid-field). There are 11 players to a side, one of whom is a goalkeeper. The object of the game is to score more goals than the opposition.",
    trailer: "https://www.youtube.com/embed/3oIWk5qhlC0"
  },
  {
    id: "103",
    name: "badminton",
    poster:
      "https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2021/03/25155906/saina1.jpg",
    summary:
      "The first side to 21 points wins a game. A point is scored on every serve and awarded to whichever side wins the rally. The winning side gets the next serve. If the score is 20-20, a side must win by two clear points to win the game.",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/UyLIi-TbcFc"
  },
  {
    id: "104",
    name: "tennis",
    rating: 8,
    summary:
      "Tennis is a game played on a rectangular-shaped court, which can be one of many surfaces. It is either played with two players (singles match), or four players (doubles match). Players stand on opposite sides of the net and use a stringed racquet to hit the ball back and forth to each other.",
    poster:"https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/07/athletes-1866487_1280.jpg",
    trailer: "https://www.youtube.com/embed/1P_Das6OjAk"
  },
  {
    id: "105",
    name: "chess",
    poster: "https://res.cloudinary.com/people-matters/image/upload/v1575352389/M_A_vhz4w6.png",
    rating: 8.6,
    summary:
      "The tournament will be conducted in Swiss-style in the initial rounds. Learn about swiss style if you are interested, it is the format that is used worldwide in almost all tournaments. To summarize, this is NOT a elimination style tournament so everybody will get a chance to play at least couple of games. In the initial rounds players will be paired randomly, so in case you unfortunately face the best player of the tournament in the first round and lose the first game, you still get a chance to recover in the subsequent rounds and reach the semis/final. Final rounds might be a combination of Swiss and/or knock-out. Tournament format will be finalized after the possible number of participants are determined.",
    trailer: "https://www.youtube.com/embed/-wRdgOllrzM"
  },
  {
    id: "106",
    name: "motor racing",
    poster: "https://n1.sdlcdn.com/imgs/a/0/v/Shopolica-Matte-F1-Car-Racing-SDL601310664-1-13ff4.jpg",
    rating: 8,
    summary:
      "The car must only have four wheels mounted externally of the body work with only the front 2 steered and only the back 2 driven. There are minimum distances allowed between the wheels and the rear and front body work.",
    trailer: "https://www.youtube.com/embed/W1cfLjS5a0Y"
  },
  ];


const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

const [name, setName] = useState("");
const [poster, setPoster] = useState("");
const [rating, setRating] = useState("");
const [summary, setSummary] = useState("");

const history = useHistory();
const [mode,setMode] = useState("dark");
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

return(
//   <ul>
//   <li>
//       {/* change the url bar but don't refresh */}
//       <Link to = "/movies">Movies</Link>
//   </li>
//   <li>
//   <Link to="/color-game">Color game</Link>
//   </li>
//   <li>
//   <Link to="/tic-tac-toe">Tic Tac Toe</Link>
//   </li>
//   <li>
//   <Link to="/movies/add">Add Movies</Link>
//   </li>
//   <li>
//       <Link to ="/">Home</Link>
//   </li>
// </ul> this will come after app div


<ThemeProvider theme={theme}>
  <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4} >
  <div className = "App"> 
   
    <AppBar position="static">
        <Toolbar>
         <Button color="inherit" onClick = {() => history.push("/")}>Home</Button>
         <Button color="inherit" onClick = {() => history.push("/movies")}>Movies</Button>
         <Button color="inherit" onClick = {() => history.push("/color-game")}>Color Game</Button>
         <Button color="inherit" onClick = {() => history.push("/tic-tac-toe")}>Tic Tac Toe</Button>
         <Button color="inherit" onClick = {() => history.push("/movies/add")}>
           Add Sports</Button>
           <Button 
           color="inherit"
           style = {{ marginLeft: "auto" }}
            startIcon = {
              mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
            }
            onClick = {() =>setMode(mode == "light" ? "dark": "light")}
            >
           {mode == "light" ? "dark": "light"} mode
           </Button>
        </Toolbar>
      </AppBar>

        {/* A <Switch> looks through all its child elements and renders the first one 
            which matches the current URL. Use a <Switch> you have multiple routers, but you want ...of them to render at a time. */}
<div className = "route-container">
<Switch>
      <Route exact path="/">
        <Msg />
      </Route>
    <Route path="/films">
        <Redirect to = "/movies" />
    </Route>
    {  /*Task -  Edit movie   -   /movies/edit/:id */ }
    <Route path="/movies/add">
    <AddMovie />
        {/* <AddMovie movieList = {movieList} setMovieList={setMovieList} /> */}
     </Route>
     {/* :  -> makes id a variable */}
     <Route path = "/movies/edit/:id"> 
          <EditMovie movieList = {movieList} setMovieList={setMovieList} />
     </Route>
     {/* : -> makes id a variable */}
     <Route path = "/movies/:id">
        <MovieDetails />
    </Route>
    <Route path="/movies">
      {/* <MovieList movieList = {movieList} setMovieList={setMovieList} /> */}
       <MovieList />     
     </Route>
    <Route path="/color-game">
      <AddColor />
    </Route>
    <Route path="/tic-tac-toe">
      <TicTacToe />
    </Route>
     <Route path="**"> 
        <NotFound /> 
    </Route>

  </Switch>
  </div>
  {/* <div className = "add-movie-form">
  
  </div> */}

{/* <ColorBox />
<AddColor /> */}
</div>
</Paper>
</ThemeProvider>
);
}





// function Msg({ name }) {
//   return (
//     <div className="come">
//       <h1>Hello, {name}😀🥗🎄</h1>
//     </div>
//   );
// }








// Movie Task my try

// export default function App() {

//       const names = ["Mankatha", "Vishuvasam", "Thupakki", "Hangover","Avengers"];
//       const users = [
//         {
//           name: "Mankatha",
//           profile:"https://moviegalleri.net/wp-content/uploads/2011/05/vilayadu_mankatha_posters.jpg",
       
//              summary: "Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
//              Ratings: "⭐⭐⭐⭐⭐"
//             },
//         {
//           name: "Vishuvasam",
//           profile:"https://moviegalleri.net/wp-content/uploads/2018/08/Ajith-Viswasam-Movie-First-Look-Poster-HD.jpg",
         
//            summary:"Thookku Durai, a chieftain, gets separated from his wife, Niranjana, after their daughter, Swetha, gets injured during a fight. Years later, he tries to protect Swetha without revealing his identity.",
//           Ratings: "⭐⭐⭐⭐⭐"
//          },
//         {
//           name: "Vikram Vedha",
//           profile:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Vikram_Vedha_poster.jpg/220px-Vikram_Vedha_poster.jpg"
//             ,
//           summary:"Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders, he offers to tell Vikram a story, throwing Vikram's life into disarray.",
//           Ratings: "⭐⭐⭐"
//         },
//         {
//           name: "Veeram",
//           profile: "https://cdn.cinematerial.com/p/297x/oc38igjo/veeram-indian-movie-poster-md.jpg?v=1456468953"
//         ,
//         summary:"Vinayagam, an honest man, uses violence to settle disputes; he decides to mend his ways for his lover's sake; hell breaks loose when he learns about a gang of rowdies following his lover's family.",
//          Ratings: "⭐⭐⭐⭐"  
//         },
//         {
//           name: "Avengers",
//           profile: "https://m.media-amazon.com/images/I/81OmkfFqvsL._AC_SL1440_.jpg"
//         ,
//         summary: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
//         Ratings: "⭐⭐⭐⭐⭐"
//         }
//         ];
         
//   return (
//     <div className="App">
//       <Counter />
//       <Counter2 />
//       {users.map((usr) => (
//             <Welcome name={usr.name} profile={usr.profile} summary={usr.summary} Ratings={usr.Ratings} />
//           ))}
//     </div>
//   );
// }

  
// // Task - 1  Likes and Dislikes
// function Counter(){
//   const [like,setLike] = useState(0);
//   return(
//     <h1 className = "Good"> Likes
//     {/* <h4>Likes</h4>   */}
//       <button className = "Good2" onClick = {() => setLike(like + 1)}> 👍 {like}</button>
//     </h1>
//   )
// }

// function Counter2(){
//   const [disLike,setDislike] = useState(0);
//   return(
//     <h1 className = "Good"> Dislikes
//       <button className = "Good2" onClick = {() => setDislike(disLike + 1)}> 👎 {disLike}</button>
//     </h1>
//   )
// }

// function Welcome({ name, profile, summary, Ratings }) {
//     return (
//       <div className="come">
//         <h1>------------------------------------------------------------------</h1>
//         <img className="user-profile-pic" src={profile} alt="profile pic" />
//         <h1> {name}🎄😀</h1>
//         <h4>{summary}</h4>
//          <h4>{Ratings} </h4>  

//          <div class="star-rating">
//   <input type="radio" id="5-stars" name="rating" value="5" />
//   <label for="5-stars" class="star">&#9733;</label>
//   <input type="radio" id="4-stars" name="rating" value="4" />
//   <label for="4-stars" class="star">&#9733;</label>
//   <input type="radio" id="3-stars" name="rating" value="3" />
//   <label for="3-stars" class="star">&#9733;</label>
//   <input type="radio" id="2-stars" name="rating" value="2" />
//   <label for="2-stars" class="star">&#9733;</label>
//   <input type="radio" id="1-star" name="rating" value="1" />
//   <label for="1-star" class="star">&#9733;</label>
// </div>
//       </div>
//     );
//   }







// Task - 1
// // App -> component
// // Declaration
// export default function App() {
//   return (
//     <div className="App">
//       <Welcome name="Krishna" />
//       <Welcome name="Veni" />
//       <Welcome name="Sakthi" />
//     </div>
//   );
// }
// // Welcome

// function Welcome({ name }) {
//   // const name = "Krishna";
//   return (
//     <div className="Welcome">
//       <h1>Hello, {name} 🎄🍏🍟🍋</h1>
//     </div>
//   );
// }

// function Welcome(props) {
//   // const name = "Krishna";
//   console.log(props);
//   return (
//     <div className="come">
//       <h1>Hello, {props.name} 🎄🍏🍟🍋</h1>
//     </div>
//   );
// }

// function Welcome() {
//   const name = "Krishna";
//   return (
//     <div className="Welcome">
//       <h1>Hello, {name} 🎄🍏🍟🍋</h1>
//     </div>
//   );
// }

// Task - 2
// import Emoji from "react-emoji-render";
// export default function App() {
//   // const names = ["Krishna", "Veni", "Kaaviya"];
//   return (
//     <div className="App">
//       <Welcome
//         profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVObLYg8yliuXT3LoPS2YbgAqtBEwvzYXCg&usqp=CAU"
//         name="Krishna"
//       />
//       <Welcome
//         profile="data:)image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEX/mTMSiAf/////lyr//fkAgwAAAIgAAH4AAIUAAIIAAIMAAHMAAHbk5PDg4O7w8Pfp6fP5+f2lpctHR52Njb5BQZu+vtqrq8/ExN20tNSHh7tLS5/19fp/f7djY6mZmcXOzuXW1ugmJpE5OZgNDYtsbK1YWKRRUaF5ebQZGY7R0eWYmMUyMpcgIJBhYa3Bwd8/P5smJpNycrEwMJjLpwQ3AAAEs0lEQVR4nO2ba3eiSBCGnd7dvsgdEQFBxUtMos4kk///37Yaci9PducLnXN4H48K6IfisbqradrJBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAP+Qt8ZiLAZ+CEAyccOOHACQdOON/BSZxnq/n58TxfZXnsOhjxDZwE2Z0yU62llFpPjbrLAtchOXZyf1RTK0NqpZS2G3Kqlvdug3LqJD6SB2nMz1u1jIJoqW5XxpAidXTahFw6WdvMMOYkEpFH4l5EOW2tjbFZs3YYl0MnN4bOvVmcI7Gxu6V92YjovKjIlTm6C8yZk/pC6TALE7u9+PiShDP67FK7Cs2Vk5q6U6NSUdidIqSXjJ5hv0utinJIRo5ic+WEssQsmlgkNjNq6+MnPTObG4tExM2CpFwcxebIyVFLlXdbqS0xS3qen9/jtDv+S0ntqE9x4+RkKEvEr27bnviKxOxJx+p5n5QIyhTjpvo4cRJQDqis70JESq0npZPXVJwpRRZdmtgPqfooJ2NaJ05mWs/Wtgdd2bIja9FuRaISsW1FLelIYvMlWtuvuQjPhZONekmAhAYnolyKxI9rv479RCwpa6JdV6FtOqmNg/hcOKHfv0q6qisiSXJ0KbYpOUm3IqcWFDwX4SKp3CSKAyehkqbs+xG7cy9KJZpd7Me7RqhStMqOVrp+pTSy3xkWB04qGprYnz84WisbLxf7Q+EH9CgOe5F7trksjrZxzWiQUg0foAMne6qxfetIJeVL7i02XmBaegTeZuHRoVL2Y5RobeR++ACHd0JNR75sRzPqS1KvuK2q4qmoqtvCS0Uu56+jeumiHA/vpDT6UG/Koj/vUu03uR88tWmTtk+Bn9/vVXeFLOqi3NQHbcrBIxzeSaO7PiI8LVdpSxsrrwkew+rh4aEKL2Hl2TFLmx6WWfv25WEZ3smNln5fiIPTo3duiqDZBjM7kWRmwbYJNtXOvzv15abwpb4ZPMLhnTzStd3r1EiUPihVtc1UWqZNmxm1S19nHuuj1tvBIxzeCXWbbxMjdRSHYZHOdedEz9MiDOPobTYpetchD8bwTujKzmpofh/3xvN84lKdZc8ue1J0wPOUnB2adR5SkdKDR4g84QzvZMv6k2z0/cn7unNB3el4GZ9kH8cn84f5eMcnGMdyAlzvcHBdzPmj+ZPpOOZPMM92hf+cj+3HJ2Oaj30/b7/r5+3F6Oftu/s7J5sMX93fiU/0taWL8JzeBzzZnav3AU+juw8oqMZSN/v1/eJyXPeL/8+6gnxs6wqw/uQaWKd0hfpx+uV6tun41rMRN+qrdY/DT5u84nJ9bHptfexp1OtjX9ZRT7GO+gNX19sfx7ze3oL/ZVyl///OFv/f+cbACQdOOHDCgRPO5G/wmck/4DOTH+AzcMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHD+BbFYJ4t2z9g0AAAAAElFTkSuQmCC "
//         name="Veni"
//       />
//       <Welcome
//         profile="data:image/jpeg;base64,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 "
//         name="Kaaviya"
//       />

//       {/* {names.map((nm) => (
//         <Msg name={nm} />
//       ))} */}
//     </div>
//   );
// }
// function Welcome({ name, profile }) {
//   const txt = "Hello," + { name } + "😊😊🥗✨🎄";
//   return (
//     <div className="come">
//       <img className="user-profile-pic" src={profile} alt="profile pic" />
//       <Emoji text={txt} />
//       <h1>Hello, {name}😊😊🥗✨🎄</h1>
//     </div>
//   );
// }

{
  /* function Welcome({ name, profile }) {
   const txt = "Hello," + { name } + "😊😊🥗✨🎄";
   return (
   <div className="come">
   <img className="user-profile-pic" src={profile} alt="profile pic" />
   <Emoji text={txt} />
   <h1>Hello, {name}😊😊🥗✨🎄</h1>
   </div>
   );
 } */
}

// // Task - 3
// import Emoji from "react-emoji-render";
// export default function App() {
//   const names = ["Krishna", "Veni", "Sakthi", "Kaaviya"];
//   return (
//     <div className="App">
//       {names.map((nm) => (
//         <Msg name={nm} />
//       ))}
//     </div>
//   );
// }

// function Msg({ name }) {
//   return (
//     <div className="come">
//       <h1>Hello, {name}😀🥗🎄</h1>
//     </div>
//   );
// }

// Task - 4

// export default function App() {
//   const names = ["Krishna", "Veni", "Sakthi", "Kaaviya"];
//   const users = [
//     {
//       name: "Krishna",
//       profile:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVObLYg8yliuXT3LoPS2YbgAqtBEwvzYXCg&usqp=CAU"
//     },
//     {
//       name: "Veni",
//       profile:
//         "data:)image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEX/mTMSiAf/////lyr//fkAgwAAAIgAAH4AAIUAAIIAAIMAAHMAAHbk5PDg4O7w8Pfp6fP5+f2lpctHR52Njb5BQZu+vtqrq8/ExN20tNSHh7tLS5/19fp/f7djY6mZmcXOzuXW1ugmJpE5OZgNDYtsbK1YWKRRUaF5ebQZGY7R0eWYmMUyMpcgIJBhYa3Bwd8/P5smJpNycrEwMJjLpwQ3AAAEs0lEQVR4nO2ba3eiSBCGnd7dvsgdEQFBxUtMos4kk///37Yaci9PducLnXN4H48K6IfisbqradrJBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAP+Qt8ZiLAZ+CEAyccOOHACQdOON/BSZxnq/n58TxfZXnsOhjxDZwE2Z0yU62llFpPjbrLAtchOXZyf1RTK0NqpZS2G3Kqlvdug3LqJD6SB2nMz1u1jIJoqW5XxpAidXTahFw6WdvMMOYkEpFH4l5EOW2tjbFZs3YYl0MnN4bOvVmcI7Gxu6V92YjovKjIlTm6C8yZk/pC6TALE7u9+PiShDP67FK7Cs2Vk5q6U6NSUdidIqSXjJ5hv0utinJIRo5ic+WEssQsmlgkNjNq6+MnPTObG4tExM2CpFwcxebIyVFLlXdbqS0xS3qen9/jtDv+S0ntqE9x4+RkKEvEr27bnviKxOxJx+p5n5QIyhTjpvo4cRJQDqis70JESq0npZPXVJwpRRZdmtgPqfooJ2NaJ05mWs/Wtgdd2bIja9FuRaISsW1FLelIYvMlWtuvuQjPhZONekmAhAYnolyKxI9rv479RCwpa6JdV6FtOqmNg/hcOKHfv0q6qisiSXJ0KbYpOUm3IqcWFDwX4SKp3CSKAyehkqbs+xG7cy9KJZpd7Me7RqhStMqOVrp+pTSy3xkWB04qGprYnz84WisbLxf7Q+EH9CgOe5F7trksjrZxzWiQUg0foAMne6qxfetIJeVL7i02XmBaegTeZuHRoVL2Y5RobeR++ACHd0JNR75sRzPqS1KvuK2q4qmoqtvCS0Uu56+jeumiHA/vpDT6UG/Koj/vUu03uR88tWmTtk+Bn9/vVXeFLOqi3NQHbcrBIxzeSaO7PiI8LVdpSxsrrwkew+rh4aEKL2Hl2TFLmx6WWfv25WEZ3smNln5fiIPTo3duiqDZBjM7kWRmwbYJNtXOvzv15abwpb4ZPMLhnTzStd3r1EiUPihVtc1UWqZNmxm1S19nHuuj1tvBIxzeCXWbbxMjdRSHYZHOdedEz9MiDOPobTYpetchD8bwTujKzmpofh/3xvN84lKdZc8ue1J0wPOUnB2adR5SkdKDR4g84QzvZMv6k2z0/cn7unNB3el4GZ9kH8cn84f5eMcnGMdyAlzvcHBdzPmj+ZPpOOZPMM92hf+cj+3HJ2Oaj30/b7/r5+3F6Oftu/s7J5sMX93fiU/0taWL8JzeBzzZnav3AU+juw8oqMZSN/v1/eJyXPeL/8+6gnxs6wqw/uQaWKd0hfpx+uV6tun41rMRN+qrdY/DT5u84nJ9bHptfexp1OtjX9ZRT7GO+gNX19sfx7ze3oL/ZVyl///OFv/f+cbACQdOOHDCgRPO5G/wmck/4DOTH+AzcMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHD+BbFYJ4t2z9g0AAAAAElFTkSuQmCC "
//     },
//     {
//       name: "Kaaviya",
//       profile:
//         "data:image/jpeg;base64,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 "
//     }
//   ];
//   return (
//     <div className="App">
//       {/* Array of strings -> Array of Component / Transformation */}
//       {/* {names.map((nm) => (<Msg name = {nm} /> ))} */}
//       {users.map((usr) => (
//         <Welcome name={usr.name} profile={usr.profile} />
//       ))}
//       <Msg />
//     </div>
//   );
// }


