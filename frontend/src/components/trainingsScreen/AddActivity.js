import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import ActivityPlus from "../../../assets/svgs/trainingsScreen/ActivityPlusSvg";

const AddActivity = () => {
  return (
    <TouchableOpacity className="bg-cardBg flex-row justify-between items-center px-5 py-[15] rounded-[25px]">
      <Text className="text-textPrimary text-base">Add new activity</Text>
      <ActivityPlus />
    </TouchableOpacity>
  );
};

export default AddActivity;
