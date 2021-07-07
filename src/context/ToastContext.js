import {createContext, useState} from 'react'
import {v4 as uuid} from 'uuid';
import ToastContainer from '../components/ToastContainer';

export const ToastContext = createContext({});

export const ToastProvider = ({children}) => {
  const [messages, setMessages] = useState([])

  const addToast = ({type, title, description}) => {
    console.log("Add Toast")
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description
    }

    setMessages(oldMessages => [...oldMessages, toast]);
  }

  const removeToast = (id) => {
    setMessages(state => state.filter(message => message.id !== id));
  }

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      <ToastContainer messages={messages}/>
      {children}
    </ToastContext.Provider>
  )
}