import Toast from './Toast'
import { Container } from './styles';

const ToastContainer = ({messages}) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} toastData={message} />
      ))}
    </Container>
  )
}

export default ToastContainer;