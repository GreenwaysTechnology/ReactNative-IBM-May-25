import { useDispatch, useSelector } from 'react-redux'
import { Button, Text } from 'react-native'
import { increment } from '../slices/review.slice'
import { styles } from "../styles/app.style"

const Review = () => {
    const review = useSelector(appState => {
        return appState.reviewReducer
    })
    const dispatch = useDispatch()
    const onLike = () => {
        dispatch(increment())
    }
    return <>
        <Text style={styles.label}>Like {review.like}</Text>
        <Button title="Like" onPress={onLike} />
    </>
}
export { Review }