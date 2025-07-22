import React from 'react';
import Header from './Components/Header';
import LoginCard from './Components/LoginCard';

const App = () => {
  const headerText = "Login Page";
  const users = [
    { name: "Ali", email: "ali@gmail.com", password: "1234" },
    { name: "Sarim", email: "sarim@gmail.com", password: "abcd" },
    { name: "Shahzaib", email: "shahzaib@gmail.com", password: "12345" }
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <Header title={headerText} />
      <LoginCard users={users} />
    </div>
  );
};

export default App;
