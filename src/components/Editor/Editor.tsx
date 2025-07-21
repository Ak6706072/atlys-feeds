import React from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Trash2,
  Smile,
  Send,
  ChevronDown,
} from "lucide-react";

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
  handleAdd: () => void;
};

const Editor = (props: EditorProps) => {
  const { value, onChange, handleAdd } = props;

  return (
    <div className="bg-gray-100 p-[8px] mb-[30px] rounded-2xl">
      <div className="w-full rounded-2xl border border-gray-200 shadow-sm p-2 bg-white">
        <div className="flex items-center justify-between px-2 py-1">
          <div className="flex items-center space-x-1">
            <button className="flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
              Paragraph <ChevronDown size={14} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <Bold size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <Italic size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <Underline size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <List size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <ListOrdered size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <Quote size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <Code size={16} />
            </button>
          </div>
          <button className="p-1 rounded hover:bg-red-100">
            <Trash2 size={16} className="text-red-500" />
          </button>
        </div>

        <div className="flex items-start gap-2 px-2 py-1">
          <Smile size={18} className="text-gray-500 mt-1" />
          <textarea
            rows={5}
            placeholder="How are you feeling today?"
            className="w-full resize-none border-none focus:outline-none text-sm placeholder-gray-400"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>

        <hr />
        <div className="flex justify-between items-center px-2 pt-1">
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <span className="text-xl">+</span>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path d="M6 10a1 1 0 102 0 1 1 0 00-2 0zM10 10a1 1 0 102 0 1 1 0 00-2 0zM14 10a1 1 0 102 0 1 1 0 00-2 0z" />
              </svg>
            </button>
          </div>
          <button
            className="p-1 text-blue-500 hover:text-blue-700"
            onClick={handleAdd}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
