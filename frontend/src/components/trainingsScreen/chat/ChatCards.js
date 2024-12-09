import React from "react";
import { View, Text } from "react-native";

import ChatCard from "./ChatCard";
import { chatData } from "../../../constants/chatData";

const ChatCards = () => {
  return (
    <View className="mt-3">
      <Text className="text-textPrimary text-2xl font-[500] ">
        Chats with coaches
      </Text>

      <View className="mt-3">
        {chatData.map((chat, index) => (
          <ChatCard
            key={index}
            image={chat.image}
            name={chat.name}
            message={chat.message}
            activity={chat.activity}
            time={chat.time}
            unread={chat.unread}
          />
        ))}
      </View>
    </View>
  );
};

export default ChatCards;
