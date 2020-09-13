import React, { useState, useContext, createContext } from 'react';

const UserConext = createContext([
  {
    firstName: 'Manu',
    lastName: 'Kem',
    suffix: 1,
    email: 'manukem@gmail.com',
  },
  (obj) => obj,
]);

const ContextComponent = () => {
  const userState = useState({
    firstName: 'Mar',
    lastName: 'San',
    suffix: 1,
    email: 'marsan@gmail.com',
  });

  return (
    <UserConext.Provider value={userState}>
      <h1>First Level</h1>
      <LevelTwo />
    </UserConext.Provider>
  );
};

const LevelTwo = () => (
  <div>
    <h2>Second Level</h2>
    <LevelThree />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>Third Level</h3>
    <LevelFour />
  </div>
);

const LevelFour = () => (
  <div>
    <h4>Fourth Level</h4>
    <LevelFive />
  </div>
);

const LevelFive = () => {
  const [user, setUser] = useContext(UserConext);
  return (
    <div>
      <h5>
        Fifth Level |
        {` ${user.firstName} ${user.lastName}, the ${user.suffix} born`}
      </h5>
      <button
        onClick={() =>
          setUser(Object.assign({}, user, { suffix: ++user.suffix }))
        }
      >
        Increment
      </button>
    </div>
  );
};

export default ContextComponent;
