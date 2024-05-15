import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/userrole.css';

const UserRole = () => {
  return (
    <div className="userrole">
      <div className="logo" />
      <form>
        <h2>User Role</h2>
            <Link to="/PlayerDashBoard">
              <button id="player-btn">Player</button>
            </Link>
            <Link to="/CoachDashBoard">
              <button id="coach-btn">Coach</button>
            </Link>
            <div className="uline"></div>
            <Link to="/login">
              <button id="back-btn">Back To Login</button>
            </Link>
       
      </form>
    </div>
  )
}

export default UserRole

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/userrole.css';
// import { db } from '../../firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { auth } from '../../firebase'; // Import the auth object from firebase

// const UserRole = () => {
//   const [registeredRole, setRegisteredRole] = useState('');
//   const navigate = useNavigate();

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const q = query(collection(db, 'users'), where('userId', '==', auth.currentUser.uid));
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         const role = doc.data().role;
//         console.log("Fetched Role from Firestore:", role);
//         setRegisteredRole(role.trim());
//       });
//     } catch (error) {
//       console.error('Error fetching user role:', error.message);
//     }
//   };

//   fetchData();
// }, []);


//   const handleRoleSelection = (selectedRole) => {
//     console.log("Registered Role:", registeredRole);
//     console.log("Selected Role:", selectedRole);
  
//     if (registeredRole.trim() === selectedRole.trim()) {
//       console.log("Roles match. Navigating...");
//       if (selectedRole === 'player') {
//         console.log("Navigating to PlayerDashboard");
//         navigate('/PlayerDashBoard');
//       } else if (selectedRole === 'coach') {
//         console.log("Navigating to CoachDashboard");
//         navigate('/CoachDashBoard');
//       } else {
//         console.log("Unknown role:", selectedRole);
//       }
//     } else {
//       console.log("Roles don't match.");
//       window.alert('Please select the correct user role.');
//     }
//   };
  
  

//   return (
//     <div className="userrole">
//       <div className="logo" />
//       <form>
//         <h2>User Role</h2>
//         <button id="player-btn" onClick={() => handleRoleSelection('player')}>Player</button>
//         <button id="coach-btn" onClick={() => handleRoleSelection('coach')}>Coach</button>
//         <div className="uline"></div>
//         <Link to="/login">
//           <button id="back-btn">Back To Login</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default UserRole;


