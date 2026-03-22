import './css/message.css'
interface MessageProps {
    msg: String
}

export default function Message(props: MessageProps) {
    return <div className='Message'>
        {props.msg}
    </div>
}