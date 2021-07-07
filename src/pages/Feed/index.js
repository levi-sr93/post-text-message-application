import {useEffect, useState} from 'react';
import {BsPencilSquare} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import BoxMessage from '../../components/BoxMessage';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth'
import { useToast } from '../../hooks/useToast';
import FeedServices from '../../services/FeedServices'
import {TIMERS} from '../../utils/constants'
import {Container, Content,NavSection, CreateMessageSection, MessagesSection, NoMessages} from './styles'
function Feed() {
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfPosts, setNumberOfPosts] = useState(0)
  const [feedMessages, setFeedMessages] = useState([]);
  const [myPost, setMyPost] = useState('');
  const [textAreaVisible, setTextAreaVisible] = useState(false);

  const {user, userToken, logout} = useAuth();
  const {addToast} = useToast();


  useEffect(() => {
    const timer = setInterval(() => {
      FeedServices.getFeedPosts(userToken)
        .then(data => {
          setFeedMessages(data.posts)
          setNumberOfPosts(data.count)
        })
        .catch(error => {
          setIsLoading(false)
          console.log(error);
          addToast({
            type: 'error',
            title: 'Failed to load Messages',
            description: 'Something went wrong during the load messages.'
          });
        }).finally(() => {
          setIsLoading(false)
        })
    }, TIMERS.FETCH_MESSAGES)
    
    return () => clearInterval(timer);
  
  }, [addToast, userToken])


  function handleSubmit(){
    if(myPost.length === 0) {
      addToast({
        type: 'error',
        title: 'Type something to publish',
        description: 'You should type something on the text field in order to publish'
      });
      return 
    }
    setIsLoading(true)
    FeedServices.postMessage(userToken, myPost)
    .then(() => {
      setIsLoading(false)
      setTextAreaVisible(false)
      setMyPost('')
      addToast({
        type: 'success',
        title: 'Success !',
        description: 'You text was published with success'
      })
    })
    .catch(error => {
      setIsLoading(false)
      console.log('erro no submit', error);
      addToast({
        type: 'error',
        title: 'Something went wrong !',
        description: 'We can not publish your message'
      })
    })
    .finally(() => {
      FeedServices.getFeedPosts(userToken)
        .then(data => {
          setFeedMessages(data.posts)
          setNumberOfPosts(data.count)
        }).catch(error => {
          addToast({
            type: 'error',
            title: 'Failed to load Messages',
            description: 'Something went wrong during the load messages.'
          });
        })
      setIsLoading(false)
    })   
  }

  function handleLogout(){
    logout();
    addToast({
      type: 'success',
      title: 'Logout Successfully',
      description: 'Hope to see you soon'
    })
  }

  if(isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <Container>
      <Content>
        <NavSection>
        <span>
          Hey, {" "}
          <strong> {" "} {user}</strong> 
        </span>
          <button onClick={handleLogout}><FiLogOut size={20} /> Logout</button>
        </NavSection>
        
        <h1>Feed Messages</h1>
        <p>Total of messages: {numberOfPosts}</p>

        <CreateMessageSection>
          <button 
            onClick={() => setTextAreaVisible(!textAreaVisible)}>
               <BsPencilSquare size={20}/>{textAreaVisible ? 'Cancel Post' : 'Type a message'}
          </button>
          {textAreaVisible && (
            <>
            <textarea
            name="myPost"
            id="myPost"
            cols="100"
            rows="10"
            value={myPost}
            onChange={(e) => setMyPost(e.target.value)} />
            
            <button onClick={handleSubmit} >Publish</button>
          </>
          )}
        </CreateMessageSection>

        {numberOfPosts === 0 ? (
          <MessagesSection>
            <NoMessages>No messages in the Feed. 😭 <br /> <span>Try publish something! ✍️ </span></NoMessages>
          </MessagesSection>
        ) : (
          <MessagesSection>
            {feedMessages?.map(message => (
              <BoxMessage key={String(message.seq)} {...message} />
            ))}
          </MessagesSection>
        )}

      </Content>
    </Container>
  )
}

export default Feed;
