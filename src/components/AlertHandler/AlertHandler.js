import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { COLORS } from "../../store/reducers/notificationSlice";
const AlertHandler = () => {
    const notificationState = useSelector(state=>state.notification)
    let bg = ''
    if(notificationState.color === COLORS.success) bg='bg-notification-success'
    if(notificationState.color === COLORS.warning) bg='bg-notification-warning'
    if(notificationState.color === COLORS.error) bg='bg-notification-error'
    return ReactDOM.createPortal(
        <div className={`absolute right-0 m-1 p-5 opacity-90 `+bg}>
            {notificationState.message}
        </div>,
        document.getElementById('notification')
    )
}

export default AlertHandler