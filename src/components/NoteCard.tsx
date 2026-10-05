import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, View } from "react-native";
import { INote } from "../../types/app.types";

export default function NoteCard({ note }: { note: INote }) {
  return (
    <View className="border border-gray-300 mt-8  rounded-xl p-8">
      <View className="flex-row justify-between">
        <Text className="bg-governorBay/15  text-governorBay/90 text-lg font-semibold rounded-xl px-4 py-2">
          {note.category.toUpperCase()}
        </Text>
        {note.isCompleted ? (
          <Ionicons
            name="checkmark-circle-sharp"
            size={24}
            className="text-governorBay/60"
          />
        ) : (
          <Pressable>
            <Entypo name="circle" size={24} className="text-gray-400" />
          </Pressable>
        )}
      </View>
      <Text className="text-xl  mt-6 capitalize">{note.title}</Text>
      <Text className="text-xl text-gray-700 mt-6 capitalize">
        {note.description}
      </Text>
      <View className="flex-row justify-between mt-8">
        <View className="flex-row gap-2">
          <Feather name="calendar" size={16} className="text-gray-400" />
          <Text className="text-gray-400 font-medium">{note.date}</Text>
        </View>
        <Pressable>
          <MaterialIcons
            name="delete-outline"
            size={24}
            className="text-gray-400"
          />
        </Pressable>
      </View>
    </View>
  );
}
