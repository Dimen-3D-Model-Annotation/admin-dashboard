"use client";

import React, { useState } from "react";
import {
  FaShareSquare,
  FaLock,
  FaRegQuestionCircle,
  FaEdit,
} from "react-icons/fa";
import { MdOutlineSmsFailed, MdCancel, MdMarkEmailRead } from "react-icons/md";

function Support() {
  const [cards, setCards] = useState([
    {
      id: 1,
      icon: <MdMarkEmailRead className="w-8 h-8" />,
      title: "How do I change my account email?",
      content:
        "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email.",
      isEditing: false,
    },
    {
      id: 2,
      icon: <MdOutlineSmsFailed className="w-8 h-8" />,
      title: "What should I do if my payment fails?",
      content:
        "If your payment fails, you can use the (COD) payment option, if available. Refunds for failed payments will be credited within 7-10 days.",
      isEditing: false,
    },
    {
      id: 3,
      icon: <MdCancel className="w-8 h-8" />,
      title: "What is your cancellation policy?",
      content:
        "You can now cancel an order when it is in packed/shipped status. Any paid amount will be credited to the original payment mode.",
      isEditing: false,
    },
    {
      id: 4,
      icon: <FaShareSquare className="w-8 h-8" />,
      title: "How can I share a project file with others?",
      content:
        "Open the file you want to share, click the 'Share' button in the top-right corner, and enter the email addresses of your collaborators. Assign them the appropriate permissions (View or Edit) before sending the invite.",
      isEditing: false,
    },
    {
      id: 5,
      icon: <FaLock className="w-8 h-8" />,
      title: "Is my personal data secure?",
      content:
        "Yes, we prioritize your data security by using state-of-the-art encryption and following GDPR compliance regulations.",
      isEditing: false,
    },
    {
      id: 6,
      icon: <FaRegQuestionCircle className="w-8 h-8" />,
      title: "How can I contact support?",
      content:
        "You can contact support via our 24/7 chat service or email us at support@example.com. Our team will assist you promptly.",
      isEditing: false,
    },
  ]);

  const handleEditToggle = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
    );
  };

  const handleContentChange = (id, newContent) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, content: newContent } : card
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-row overflow-hidden">
      <div className="flex-grow bg-[#121316] text-white p-4 overflow-y-auto">
        <div className="grid lg:grid-cols-3 gap-20 mt-5 mb-15 ml-5 mr-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl bg-custom-purple shadow-sm p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-custom-gray h-16 w-16 flex items-center justify-center text-white p-3 rounded-full">
                    {card.icon}
                  </div>
                  <div className="ml-4 text-lg font-bold">{card.title}</div>
                </div>
                <button
                  className="text-gray-300 hover:text-white"
                  onClick={() => handleEditToggle(card.id)}
                >
                  <FaEdit className="w-4 h-4" />
                </button>
              </div>
              {card.isEditing ? (
                <textarea
                  className="w-full bg-gray-700 text-white text-sm p-2 rounded"
                  value={card.content}
                  onChange={(e) => handleContentChange(card.id, e.target.value)}
                />
              ) : (
                <div className="text-sm text-gray-300">{card.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;
