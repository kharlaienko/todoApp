import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

const Layout: React.FC = ({ children }) => {
   return (
      <div className="dark:text-gray-200 h-screen overflow-hidden flex">
         <SideBar />
         <div className="grow h-full">
            <div className="h-full overflow-hidden flex flex-col">
               <Header />
               <div className="my-5 overflow-y-auto">
                  <div className="px-5">{children}</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Layout;
