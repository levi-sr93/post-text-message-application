import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Container, MessageHeader, MessageBody } from "./styles";
const BoxMessage = ({date, message, user, seq}, props) => {

  const [readMore, setReadMore] = useState(false);

  const {user: currentUser} = useAuth()
  
  return (
    <Container isAuthor={currentUser === user}>
      <MessageHeader>
        <h3>{user === currentUser ? 'You' : user}</h3>
        <time>{date}</time>
      </MessageHeader>

      <MessageBody  >
        
        <p>{
            readMore 
            ? message
            : !readMore && message?.length < 200 
            ? message  
            : `${message?.substring(0, 200)}...`  }
          {message?.length > 200 && (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read More'}
            </button>
          )}
        </p>
      </MessageBody>
    </Container>
  )
}

export default BoxMessage;