import React from "react";
import { View, Text, Image } from "react-native";

const ChatCard = ({ name, message, activity, time, unread }) => {
  return (
    <View className="flex-row items-center mb-4">
      <Image
        source={{ uri: "https://via.placeholder.com/50" }}
        className="w-12 h-12 rounded-full"
      />
      <View className="flex-1 ml-4">
        <Text className="text-textPrimary font-medium">{name}</Text>
        <Text className="text-textSecondary text-sm">{message}</Text>
        <View className="flex-row flex-wrap mt-1">
          {activity.map((act, index) => (
            <Text
              key={index}
              className="bg-cardBg text-textSecondary text-xs px-2 py-1 rounded-full mr-2"
            >
              {act}
            </Text>
          ))}
        </View>
      </View>
      <View>
        <Text className="text-textSecondary text-sm">{time}</Text>
        {unread > 0 && (
          <View className="bg-accent w-5 h-5 rounded-full flex items-center justify-center">
            <Text className="text-white text-xs font-bold">{unread}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ChatCard;
