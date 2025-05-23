import { Text, FlatList, Alert } from "react-native";
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

    //onSelectITem
    const onSelectItem = item => {
        Alert.alert(item.title)
    }

    if (loading) return <Text style={styles.label}>Loading...</Text>
    return <FlatList data={entities} renderItem={(obj) => {
        return <Text onPress={() => {
            onSelectItem(obj.item)
        }} style={styles.label}>{obj.item.title}</Text>
    }} />
}