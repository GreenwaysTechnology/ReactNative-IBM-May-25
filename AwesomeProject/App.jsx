import { View } from "react-native"
import { styles } from "./styles/app.style"
import { Counter } from "./components/Counter"

//root Component
function App() {
    return <View style={styles.container}>
       <Counter/>
    </View>
}

export default App
