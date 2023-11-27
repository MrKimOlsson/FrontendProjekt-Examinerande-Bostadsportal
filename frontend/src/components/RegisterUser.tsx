// import React, { useState } from "react";
// import { createUser } from "../api/createUser";
// import { useNavigate } from "react-router-dom";
// import '../utils/styles/registerForm.scss';
// import { API_URL } from "../api/config";

// const RegisterUser = () => {
//   const navigate = useNavigate();

//   const [users, setUsers] = useState<TUser[]>([]);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleCreateUser(e: React.FormEvent) {
//     e.preventDefault();

//     // Basic validation
//     if (!firstName || !lastName || !email) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       // Create the user
//       const user = await createUser(firstName, lastName, email, address, phone, password);
//       setUsers([...users, user]);

//       // Make a request to your server to get a JWT
//       const response = await fetch(`${API_URL}/users`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }

//       const data = await response.json();
//       const { token } = data;

//       // Store the token in localStorage
//       localStorage.setItem('token', token);

//       // Navigate back to /home after successful registration
//       navigate('/');
//     } catch (error) {
//       alert('Registration failed');
//     }
//   }

//   return (
//     <div className="container">
//       <form onSubmit={handleCreateUser} id="registerForm">
//           <label htmlFor="firstName">First name</label>
//           <input
//             id="firstName"
//             value={firstName}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setFirstName(e.target.value);
//             }}
//           />
    
//           <label htmlFor="lastName">Last name</label>
//           <input
//             id="lastName"
//             value={lastName}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setLastName(e.target.value);
//             }}
//           />
    
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             value={email}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setEmail(e.target.value);
//             }}
//           />
    
//           <label htmlFor="address">Address</label>
//           <input
//             id="address"
//             value={address}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setAddress(e.target.value);
//             }}
//           />
    
//           <label htmlFor="phone">Phone</label>
//           <input
//             id="phone"
//             value={phone}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setPhone(e.target.value);
//             }}
            
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             value={password}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setPassword(e.target.value);
//             }}
//           />
    
//           <button>Create User</button>
//         </form>
//     </div>
//   )
// }

// export default RegisterUser