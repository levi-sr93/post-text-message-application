import { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';
import {useToast} from '../../../hooks/useToast';

import { Container } from "./styles";

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />
}

const Toast = ({toastData}) => {
  const {removeToast} = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toastData.id);
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  },[removeToast, toastData.id])

  return (
    <Container type={toastData.type}>
      {icons[toastData.type || 'info']}

      <div>
        <strong>{toastData.title}</strong>
        <p>{toastData.description}</p>

      </div>
      <button type="button" onClick={() => removeToast(toastData.id)}>
        <FiXCircle size={18} />
      </button>
  </Container>
  )
}
export default Toast;