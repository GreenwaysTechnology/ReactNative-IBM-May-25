import { StyleSheet, View, Text, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from "react";

export const Error = props => {
    return <>
        <Text>{props.error}</Text>
    </>
}

export const Spinner = props => {
    return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size='large' color="#0000ff" />
    </View>
}

export const Posts = props => {
    let initalState = {
        isLoaded: false,
        items: [],
        error: null
    }
    const [posts, setPosts] = useState(initalState)

    async function fetchPosts() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const values = await (await fetch(url)).json()
            setPosts({ ...posts, isLoaded: true, items: posts.items.concat(values) })
        }
        catch (err) {
            setPosts({ ...posts, isLoaded: true, error: err })
        }
    }
    //useEffect : ComponentDidMount 
    useEffect(() => {
        // Todo: setTimeout should be removed once the code is tested
        setTimeout(() => {
            fetchPosts()
        }, 5000)
    }, [])

    const onSelect = (item) => {
        props.navigation.navigate('PostsDetails', item)
    }

    const { error, isLoaded, items } = posts
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <TouchableHighlight activeOpacity={0.4} underlayColor='yellow' onPress={() => { onSelect(item) }} >
                    <View>
                        <Text style={styles.item}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            }}
        />
    }

}
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: '#000'

    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    }
})