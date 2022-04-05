import React, { useState } from 'react';

const Header: React.FC = () => {
   const [title, setTitle] = useState('Header');

   return (
      <div className="border-b border-solid dark:border-gray-500 border-gray-900 p-4">
         <h1 className="text-4xl">{title}</h1>
      </div>
   );
};

export default Header;
