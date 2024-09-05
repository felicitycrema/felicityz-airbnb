import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { openModal } from "../../actions/modalAction";
import Login from "../Login";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };
  return (
    <div className="header">
      <img
        src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
        className="header_logo"
        alt="AirBnB Logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
          <ExpandMoreIcon  className="dropbtn" />
           <div className="dropdown_content"> 
            {userInfo ? (
               <>
                 <span>Account</span>
                 <span>Log out</span>
              </>
             ) : (
             <>
               <span>Sign Up</span>
                <span onClick={openModalHandle}>Log in</span>
               </>
               )}
                <span>Help</span>
                
           </div>
           
         </div>
         
          <AccountCircleIcon />
       </div>

    </div>
   );
 };
 export default Header;




// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import "./Header.css";
// import LanguageIcon from '@mui/icons-material/Language';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { openModal } from "../../actions/modalAction";
// import Login from '../Login';
// const Header = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector(state => state.userLogin)
//   const {userInfo} = userLogin;

//   const openModalHandler = () => {
//     // console.log('Log in clicked');
//     dispatch(openModal("open", <Login />));
//   };

//   return (

//     <header className="header">

//         <img
//           className="header_logo"
//           src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
//           alt="AirBnB Logo"
//         />

//       {/* <div className="header_center">
//         <input type="text" />
//         <SearchIcon />
//       </div> */}

//       <div className="header_center">
//   <div className="input_container">
//     <input type="text" placeholder="Search..." />
//     <SearchIcon className="search_icon" />
//   </div>
// </div>

//       <div className="header_right">
//         <p>Become a host</p>
//         <LanguageIcon />
//         <div className="dropdown">
//           <ExpandMoreIcon  className="dropbtn"/>
//           <div className="dropdown-content">
//             {userInfo ? (
//               <>
//                 <span>Account</span>
//                 <span>Log out</span>
//               </>
//             ) : (
//               <>
//                 <span>Sign Up</span>
//                 <span onClick={openModalHandler}>Log in</span>
//               </>
//               )}
//                <span>Help</span>
//           </div>
//         </div>
//          <AccountCircleIcon />
//       </div>

//     </header>
//   );
// };

// export default Header;
