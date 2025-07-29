import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { use, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PostIndex = () => {
  const LIMIT = 10;
  const [post, setPost] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [start, setStart] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchPosts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${LIMIT}`
      );
      const data = await response.json();

      setPost((prevPosts) => [...prevPosts, ...data]);
      setStart((prevStart) => prevStart + LIMIT);
      if (data.length < LIMIT) setHasMore(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView>
      <Text>Example of infinite scrolling</Text>

      <FlatList
        data={post}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
        onEndReached={fetchPosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              size="large"
              style={{
                padding: 20,
              }}
            />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default PostIndex;

const styles = StyleSheet.create({});
