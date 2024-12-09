import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TrainingChevrone from "../../../../assets/svgs/trainingsScreen/TrainingChevrone";
import CircularProgress from "../../../../assets/svgs/trainingsScreen/CircularProgress";

const ActivityCard = ({ activity, planed_duration, done_duration }) => {
  const progress = (done_duration / planed_duration) * 100;

  return (
    <TouchableOpacity className="bg-cardBg  w-[43vw] rounded-[25px] p-5 mb-2">
      <View className="flex-row items-center gap-1">
        <CircularProgress
          progress={progress}
          radius={15}
          strokeWidth={4}
          color={
            progress > 80 ? "#374FD3" : progress > 30 ? "#56AAFB" : "#6CE4DD"
          }
        />
        <Text className="text-textSecondary text-sm">
          {planed_duration} min
        </Text>
      </View>
      <View className="flex-row justify-between items-center mt-[9]">
        <Text className="text-textPrimary text-base">{activity}</Text>
        <TrainingChevrone />
      </View>
    </TouchableOpacity>
  );
};

export default ActivityCard;
