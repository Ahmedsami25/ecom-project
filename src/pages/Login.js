import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const [users, setUsers] = useState()
    const [name, setName] = useState()
    const [pass, setPass] = useState()


    useEffect(() => {
        axios.get('https://dummyjson.com/users').then((resp) => setUsers(resp.data.users)).catch((err) => console.log(err))

    }, []
    )

    // console.log(users.data)
    const navigate = useNavigate()

    const handlelogin = () => {
        const user = users?.filter((r) => {
            if (r.username == name) {
                if (r.password == pass) {
                        navigate('/products')
                    return r
                }
            }
        }

        )
                if (user.length == 0){ 
                    document.querySelector('.wrong').innerHTML = 'wrong username or pasword'
                }

    }

    return (

        <div className="loginclasss">
            <p className="wrong"></p>
            <div className="loginclass">
           <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)}></input>  
            <input type="password" placeholder="password" onChange={(e) => setPass(e.target.value)}></input> 
             <button onClick={()=>handlelogin()}>Login</button> 
            </div>


        </div>
    )

}

/////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// export const ParentComponent = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Your login logic here

//     // Update isLoggedIn state variable
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Your logout logic here

//     // Update isLoggedIn state variable
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       <Login handleLogin={handleLogin} />
//     </div>
//   );
// };

// export const Login = ({ handleLogin }) => {
//   const [users, setUsers] = useState();
//   const [name, setName] = useState();
//   const [pass, setPass] = useState();

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/users")
//       .then((resp) => setUsers(resp.data.users))
//       .catch((err) => console.log(err));
//   }, []);

//   const navigate = useNavigate();

//   const handlelogin = () => {
//     const user = users?.filter((r) => {
//       if (r.username === name) {
//         if (r.password === pass) {
//         //   handleLogin(); // Call the handleLogin function passed as a prop
//           navigate("/products");
//           return r;
//         }
//       }
//     });

//     if (user.length === 0) {
//       document.querySelector(".wrong").innerHTML = "wrong username or pasword";
//     }
//   };

//   return (
//     <div>
//       <p className="wrong"></p>
//       <input
//         type="text"
//         placeholder="username"
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => setPass(e.target.value)}
//       ></input>
//       <button onClick={() => handlelogin()}>Login</button>
//     </div>
//   );
// };

// export const Nav = ({ isLoggedIn, handleLogout }) => {
//   return (
//     <div>
//       {isLoggedIn ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <NavLink to="login">Login</NavLink>
//       )}
//       <NavLink to="products">Products</NavLink>
//       <NavLink to="cart">Cart</NavLink>
//     </div>
//   );
// };