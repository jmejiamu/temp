import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearch,
  clearSearches,
  removeOneItem,
} from "@/redux/features/recentSearch/recentSearch";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const RecentSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cocktail, setCocktail] = useState<any>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recentSearches = useSelector(
    (state: RootState) => state.recentSearch.items
  );

  const handleClearAllSearches = () => {
    dispatch(clearSearches());
  };

  useEffect(() => {
    if (!query.trim()) {
      setCocktail(null);
      setError(null);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      setError(null);
      setCocktail(null);

      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query.toLowerCase()}`
        );

        if (!res.ok) {
          throw new Error("Cocktail not found");
        }
        const data = await res.json();
        setCocktail(data.drinks);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query, dispatch]);

  return (
    <SafeAreaView>
      <View className="mx-4">
        <Text className="text-lg font-bold mb-5">Recent Search</Text>
        <TextInput
          placeholder="Search..."
          value={query}
          onChangeText={setQuery}
          className="border p-4 rounded-lg mb-4"
        />
        {loading && (
          <ActivityIndicator
            size="large"
            color="#888"
            style={{ marginVertical: 16 }}
          />
        )}

        <FlatList
          data={cocktail}
          keyExtractor={(item, index) => item.idDrink + index.toString()}
          renderItem={({ item }) => {
            return (
              <View className="py-4">
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      addSearch({
                        name: item.strDrink,
                        image: item.strDrinkThumb,
                        type: item.strAlcoholic,
                        instructions: item.strInstructions,
                        glass: item.strGlass,
                        idDrink: item.idDrink,
                      })
                    );
                    router.push({
                      pathname: "/drink",
                      params: { drink: JSON.stringify(item) },
                    });
                  }}
                >
                  <View className="flex-row items-center">
                    <Image
                      source={{ uri: item.strDrinkThumb }}
                      className="w-14 h-14 rounded-full"
                      resizeMode="cover"
                    />
                    <View className="ml-4">
                      <Text className="text-sm font-bold">{item.strDrink}</Text>
                      <Text className="text-sm text-gray-400">
                        {item.strGlass}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          ListHeaderComponent={
            <View>
              {query.length > 0 && !loading && (
                <Text className="mb-4">Search results for "{query}"</Text>
              )}
            </View>
          }
          ItemSeparatorComponent={() => (
            <View className="border-b border-gray-200" />
          )}
        />

        {query.length === 0 && (
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={({ item }) => {
              return (
                <View className="py-4">
                  <TouchableOpacity
                    onPress={() => {
                      router.push({
                        pathname: "/drink",
                        params: {
                          drink: JSON.stringify({
                            strDrink: item.name,
                            strDrinkThumb: item.image,
                            strAlcoholic: item.type,
                            strInstructions: item.instructions,
                            strGlass: item.glass,
                          }),
                        },
                      });
                    }}
                  >
                    <View className="flex-row items-center">
                      <Image
                        source={{ uri: item.image }}
                        className="w-14 h-14 rounded-full"
                        resizeMode="cover"
                      />
                      <View className="ml-4">
                        <Text className="text-sm font-bold">{item.name}</Text>
                        <Text className="text-sm text-gray-400">
                          {item.glass}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => dispatch(removeOneItem(item.idDrink))}
                        className="flex-1 items-end"
                      >
                        <AntDesign name="delete" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            ListHeaderComponent={
              recentSearches.length > 0 ? (
                <View className="flex-row items-center justify-between ">
                  <Text className="text-md font-bold">Recent</Text>
                  <Button title="Clear all" onPress={handleClearAllSearches} />
                </View>
              ) : null
            }
            ListEmptyComponent={
              <View className="p-2">
                <Text className="text-center  text-gray-400">
                  No recent searches
                </Text>
              </View>
            }
            ItemSeparatorComponent={() => (
              <View className="border-b border-gray-200" />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default RecentSearch;

const styles = StyleSheet.create({});
