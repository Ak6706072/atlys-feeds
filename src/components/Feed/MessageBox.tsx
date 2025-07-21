import React from "react";

type MessageBoxProps = {
  description: string;
  imogi?: string | React.ReactNode;
};

function MessageBox({ description, imogi }: MessageBoxProps) {
  return (
    <div className="mt-[12px] flex items-start gap-3">
      <div className="p-[12px] w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-full">
        <div className="text-[35px]">{imogi || "😇"}</div>
      </div>
      <div className="text-md text-gray-800 leading-relaxed w-[95%]">
        {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`}
      </div>
    </div>
  );
}

export default MessageBox;
