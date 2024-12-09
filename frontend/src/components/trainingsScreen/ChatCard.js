import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MessageReadSvg from "../../../assets/svgs/trainingsScreen/MessageReadSvg";

const ChatCard = ({ image, name, message, activity, time, unread }) => {
  return (
    <TouchableOpacity className="flex-row items-center mb-3">
      <Image
        source={{ uri: "https://via.placeholder.com/60" }}
        className="w-[60] h-[60] rounded-full"
      />
      <View className="flex-1 ml-3">
        <Text className="text-textPrimary font-medium text-base">{name}</Text>
        <Text className="text-textSecondary text-sm">{message}</Text>
        <View className="flex-row flex-wrap mt-1">
          {activity.map((act, index) => (
            <Text
              key={index}
              className="bg-cardBg text-textSecondary text-xs px-2 py-1 rounded-full mr-1"
            >
              {act}
            </Text>
          ))}
        </View>
      </View>
      <View
        className={`  ${
          unread === 0 ? "flex-row items-center gap-[2]" : "flex items-end"
        }`}
      >
        {unread === 0 && <MessageReadSvg />}
        <Text className="text-textSecondary text-sm">{time}</Text>
        {unread > 0 && (
          <View className="bg-orangeAccent w-5 h-5 rounded-full flex items-center justify-center">
            <Text className="text-white text-xs font-bold">{unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;
