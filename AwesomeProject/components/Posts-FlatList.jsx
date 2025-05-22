import { Text,  FlatList } from "react-native";
import { styles } from "../styles/app.style"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getPosts } from "../api/post.thunk"

export function Post() {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (loading) return <Text style={styles.label}>Loading...</Text>

    // return (
    //     <ScrollView>
    //         {entities.map((post) => (
    //             <Text key={post.id}>{post.title}</Text>
    //         ))}
    //     </ScrollView>
    // )

    return <FlatList data={entities} renderItem={(obj) => {
        return <Text style={styles.label}>{obj.item.title}</Text>
    }} />
}