import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, View } from "react-native";
import { useNoteStore } from "../../store/useNotes";
import { INote } from "../../types/app.types";

export default function NoteCard({ note }: { note: INote }) {

  // console.log("note keys:", Object.keys(note));
  // console.log("note values:", note);

  const { deleteNote, markNoteAsCompleted } = useNoteStore();
  return (
    <View className="border border-gray-300 mt-8  rounded-xl p-8 bg-white">
      <View className="flex-row justify-between">
        <Text className="bg-governorBay/15  text-governorBay/90 text-lg font-semibold rounded-xl px-4 py-2">
          {note.category.toUpperCase()}
        </Text>
        {note.isCompleted ? (
          <Ionicons name="checkmark-circle-sharp" size={24} color="#3830a3" />
        ) : (
          <Pressable onPress={() => markNoteAsCompleted(note.id)}>
            <Entypo name="circle" size={24} color="#9ca3af" />
          </Pressable>
        )}
      </View>
      <Text className="text-xl text-gray-700 mt-6 capitalize">
        {note.title}
      </Text>
      <Text className="text-xl text-gray-700 mt-6 capitalize">
        {note.description}
      </Text>
      <View className="flex-row justify-between mt-8">
        <View className="flex-row gap-2">
          <Feather name="calendar" size={16} color="#9ca3af" />
          <Text className="text-gray-400 font-medium">{note.date}</Text>
        </View>
        <Pressable
          onPress={() => deleteNote(note.id)}
          className="flex-row gap-2"
        >
          <MaterialIcons name="delete-outline" size={24} color="#9ca3af" />
        </Pressable>
      </View>
    </View>
  );
}
