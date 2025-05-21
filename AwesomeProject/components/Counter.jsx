import { Button, Text, View } from "react-native"
import { styles } from "../styles/app.style"
import { useState } from "react"

export function Counter(props) {
    const [count, setCount] = useState(0)
    return <View>
        <Text style={styles.label}>{count}</Text>
        <Button
            onPress={() => {
                setCount(count + 1)
            }}
            title="+"
            color="#841584" />
    </View>
}