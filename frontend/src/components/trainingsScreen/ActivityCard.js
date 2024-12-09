import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ActivityCard = ({ activity, duration }) => {
  return (
    <View className="bg-cardBg rounded-xl p-4 mx-2 mb-3 flex-row justify-between items-center">
      <View>
        <Text className="text-textPrimary text-base font-medium">
          {activity}
        </Text>
        <Text className="text-textSecondary text-sm">{duration} min</Text>
      </View>
      <Ionicons name="chevron-down" size={20} color="#A3A3A3" />
    </View>
  );
};

export default ActivityCard;
