import { CATEGORY } from "@/utils/constants";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as crypto from "expo-crypto";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useNoteStore from "../../store/useNotes";

export default function add() {
  const router = useRouter();
  const { addNote } = useNoteStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddNote = () => {
     addNote({
       id: crypto.randomUUID(),
       title: title.trim(), 
       description: description.trim(), 
       category: selectedCategory,
       date,
       isCompleted: false,
     });
    Alert.alert("Success", "Notes succesfully added.", [
      { text: "Done", style: "cancel", onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-alabaster">
      <Pressable onPress={() => router.back()}>
        <FontAwesome6 name="chevron-left" size={24} color="black" />
      </Pressable>
      <TextInput
        placeholder="Note title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#3830a35e"
        className="text-4xl font-semiBold mt-4 border border-gray-400 rounded-md"
      />
      <TextInput
        placeholder="Type your taught"
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#3830a359"
        className="text-2xl font-semiBold mt-6 border border-gray-400 rounded-md"
      />
      <View className="relative mt-64">
        <TextInput
          placeholder="Date"
          value={date}
          onChangeText={setDate}
          textAlignVertical="center"
          className="border border-gray-400 rounded-md h-14 pl-11 text-xl bg-white shadow"
          placeholderTextColor="#3830a359"
        />
        <Feather
          name="calendar"
          size={16}
          className="text-governorBay absolute top-[1.4rem] left-4"
        />
      </View>
      <View className="bg-white shadow mt-8 rounded-xl p-5">
        <Text className="text-gray-400 font-semiBold">CATEGORY</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-2 mt-4 flex-wrap">
            {CATEGORY.map((category) => {
              const bgClass =
                selectedCategory === category ? "bg-governorBay" : "";
              const textClass =
                selectedCategory === category ? "text-white" : "text-gray-600";

              return (
                <Pressable
                  key={category}
                  className={`border border-gray-300 rounded-full px-8 py-3 ${bgClass}`}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text className={`${textClass}`}>{category}</Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Pressable
        className="bg-governorBay w-full h-16 rounded-2xl mt-16 flex items-center justify-center"
        onPress={() => handleAddNote()}
      >
        <Text className="text-white text-xl font-medium">Add Notes</Text>
      </Pressable>
    </SafeAreaView>
  );
}
