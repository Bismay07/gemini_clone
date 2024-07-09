"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import InputForm from "./Input";
import { ScrollShadow } from "@nextui-org/react";
import { Context } from "@/context/ContextProvider";
import ChatCard from "./ChatCard";

const ChatBody = () => {
  const { onSubmit, displayResult, loading } = useContext(Context);
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const handleSend = (message) => {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    onSubmit({ role: "user", content: message }, setMessages, messages);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-[85%] pt-4 overflow-scroll mb-6 overflow-x-hidden no-scrollbar justify-center">
      <ScrollShadow hideScrollBar className="h-[100%] w-[80%] justify-center">
        <div className="w-[100%] justify-center">
          <div className="w-[100%] h-[80vh] overflow-auto" ref={chatContainerRef}>
            {!displayResult ? (
              <div className="text-left mt-12">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-pink-700">
                  Hello, Bismay Bibhu Prakash
                </h1>
                <p className="mt-2 text-softTextColor text-4xl font-bold">
                  How can I help you?
                </p>
              </div>
            ) : (
              messages.map((m, index) => (
                <ChatCard
                  key={index}
                  index={index}
                  role={m.role}
                  text={m.content}
                  renderNow={loading}
                />
              ))
            )}
          </div>
        </div>
      </ScrollShadow>
      <div className="absolute bottom-4">
        <InputForm onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatBody;
