// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'User Name',
    email: 'user@example.com',
    bio: 'Summary of buying and selling activities...',
    boughtItems: [
      { id: 1, title: 'Fan', description: 'Portable fan', price: '2000' }
    ],
  });

  const [reviews,setReviews]=useState([
    {productId: 1,username:'Akash',rating:4,comment:'Good Product'},
    {productId: 1,username:'Riya',rating:3,comment:'Descent Product'},
    {productId: 2,username:'Sam',rating:3,comment:'Very Nice Product'},
    {productId: 2,username:'Kartik',rating:3,comment:'Descent Product'},
    {productId: 2,username:'Tanvi',rating:3,comment:'Very nice quality Product'},
    {productId: 3,username:'Kartik',rating:3,comment:'Good Product'}
])

  const addBoughtItem = (item) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      boughtItems: [...prevProfile.boughtItems, item],
    }));
  };

  return (
    <UserContext.Provider value={{ profile, addBoughtItem , reviews}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
