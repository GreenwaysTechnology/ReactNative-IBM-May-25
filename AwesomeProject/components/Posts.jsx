import { Text, FlatList, Alert, ActivityIndicator, TouchableHighlight } from "react-native";
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

    if (loading) return <ActivityIndicator size="large" color="#00ff00" />


    return <FlatList data={entities} keyExtractor={item => item.id} renderItem={(obj) => {
        return <TouchableHighlight activeOpacity={0.4} underlayColor={'lightblue'} onPress={() => {
            onSelectItem(obj.item)
        }}>
            <Text style={styles.label}>{obj.item.title}</Text>
        </TouchableHighlight>
    }} />
}