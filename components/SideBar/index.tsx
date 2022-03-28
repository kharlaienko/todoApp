import React from 'react';

const SideBar = () => {
   return (
      <aside className="shrink-0 w-[256px] border border-solid dark:border-gray-600">
         <div className="p-3 h-full flex flex-col justify-center">
            <div>all</div>
            <div>groups</div>
            <div>list of groups</div>
         </div>
      </aside>
   );
};

export default SideBar;
