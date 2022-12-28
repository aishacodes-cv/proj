import React from 'react';

const Switch = () => {
  return <div className="w-auto pl-4">
      <label  className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="sr-only peer" />
          <div className="block bg-primary opacity-20 w-10 h-6 rounded-full transition peer-checked:bg-primary peer-checked:opacity-100"></div>
          <div className="absolute left-[1px] top-[2px] bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-4"></div>
        </div>
      </label>
    </div>
};

export default Switch;
