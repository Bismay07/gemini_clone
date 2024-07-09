import React from "react";
import { BrainCircuit, User } from "lucide-react";

const ChatCard = ({ role, text, renderNow }) => {
  return (
    <div className={`relative mb-2 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div className="flex flex-col border-1 border-gray-700 rounded-lg bg-secondary w-[50vh] p-4">
        {role === "user" ? (
          <User size={30} className="justify-end right-0 px-1.5" />
        ) : (
          <BrainCircuit size={35} className="px-2" />
        )}
        <p className="text-md font-bold text-gray-500" dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  );
};

export default ChatCard;
