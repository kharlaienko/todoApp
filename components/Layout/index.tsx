import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
   const header = useRef<HTMLDivElement>(null);
   const [heightOfHeader, setHeightOfHeader] = useState(0);
   const [title, setTitle] = useState('Header');
   const click = () => {
      setTitle(prev => prev + ' adasdsadasd');
   };

   useEffect(() => {
      if (header.current) {
         setHeightOfHeader(header.current?.offsetHeight);
      }
   }, [title]);

   return (
      <div className="dark:text-white h-screen overflow-hidden flex">
         <aside className="bg-red-900 shrink-0 w-[256px]">Aside</aside>
         <div className="grow h-full">
            <div className="h-full overflow-hidden flex flex-col">
               <div ref={header} onClick={click}>
                  <Header title={title} />
               </div>
               <div className="py-5 overflow-y-auto">
                  <div className="px-5">{children}</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Layout;
