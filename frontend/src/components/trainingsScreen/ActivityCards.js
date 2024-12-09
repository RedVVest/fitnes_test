import React from "react";
import { View, Text } from "react-native";

import ActivityCard from "./ActivityCard";
import TrainingActivitiesSvg from "../../../assets/svgs/trainingsScreen/TrainingActivitiesSvg";

const ActivityCards = () => {
  return (
    <View className="mt-3">
      <View className="flex-row items-center gap-[7] ml-3">
        <TrainingActivitiesSvg />
        <Text className="text-textSecondary text-lg font-medium">
          Today's Activities
        </Text>
      </View>
      <View className="flex-row flex-wrap justify-between mt-3 ">
        <ActivityCard activity="Gym" planed_duration={85} done_duration={85} />
        <ActivityCard
          activity="Stretching"
          planed_duration={20}
          done_duration={8}
        />
        <ActivityCard
          activity="Running"
          planed_duration={60}
          done_duration={0}
        />
      </View>
    </View>
  );
};

export default ActivityCards;
