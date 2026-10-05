import NoteCard from "@/components/NoteCard";
import SafeAreaView from "@/components/SafeAreaView";
import { CATEGORY } from "@/utils/constants";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import "../../global.css";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // Set category
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-alabaster">
      <View className="flex-1">
        <TextInput
          className="bg-white border border-gray-300 h-14 rounded-full p-4 w-full"
          placeholder="Search your taught....."
          placeholderTextColor="#393E46"
          value={searchText}
          onChangeText={setSearchText}
        />
        {/* search by category */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            paddingHorizontal: 4,
          }}
          style={{ minHeight: 50, maxHeight: 50, marginTop: 16 }}
        >
          {CATEGORY.map((item) => {
            const isSelected = selectedCategory === item;

            return (
              <Pressable
                key={item}
                onPress={() => handleCategoryClick(item)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 28,
                  borderRadius: 999,
                  backgroundColor: isSelected ? "#3830a3" : "#ffffff",
                  borderWidth: 1,
                  borderColor: isSelected ? "#3830a3" : "#d1d5db",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? "#ffffff" : "#4b5563",
                    fontSize: 14,
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <FlatList
          data={[
            {
              id: "1",
              title: "first note",
              category: "work",
              isCompleted: false,
              description: "this is the first note",
              date: "2023-06-01",
            },
            {
              id: "2",
              title: "second note",
              category: "personal",
              isCompleted: true,
              description: "this is the second note",
              date: "2023-06-02",
            },
            {
              id: "3",
              title: "third note",
              category: "work",
              isCompleted: false,
              description: "this is the third note",
              date: "2023-06-03",
            },
            {
              id: "4",
              title: "fourth note",
              category: "personal",
              isCompleted: true,
              description: "this is the fourth note",
              date: "2023-06-04",
            },
          ]}

          keyExtractor={(note) => note.id}
          renderItem={({ item }) => <NoteCard note={item} />}
          contentContainerStyle={{ paddingBottom: 100, marginTop: 16 }}
          showsVerticalScrollIndicator={false}
        />
        <Pressable className="absolute bottom-4 right-5 bg-governorBay p-5 rounded-2xl shadow-2xl">
          <MaterialIcons name="add" size={30} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
