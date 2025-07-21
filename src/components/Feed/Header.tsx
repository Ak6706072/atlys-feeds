import React from "react";

function Header({ name, time }: { name?: string; time?: string }) {
  return (
    <div className="flex items-start gap-3">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Theresa Webb"
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div>
        <div className="font-semibold text-sm text-gray-900">
          {name || "Theresa Webb"}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {time || "5 mins ago"}
        </div>
      </div>
    </div>
  );
}

export default Header;
