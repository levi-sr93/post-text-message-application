import { format } from "date-fns/esm";
import enUS from "date-fns/esm/locale/en-US/index.js";
import apiClient from "./apiClient";

class FeedServices {
  constructor(){
    this.apiClient = apiClient
  }

  async fetchMessages(userToken) {
    try {
      const response = await this.apiClient.get('/feed', {
        headers: {
          'ens-auth-token': userToken,
          Accept: 'application/json',
          'Content-Type': 'Application/json'
        }
      })

      return response.data;

    } catch (error) {
      throw new Error('Error during fetch messages', error)
    }
  }

  async postMessage(userToken, postMessage){
    try {
      const response = await this.apiClient.post('/feed',
        {
          "message": postMessage        
        },
        {
          headers: {
            'ens-auth-token': userToken,
            Accept: 'application/json',
            'Content-Type': 'Application/json'
          },
        }
      )

    
      return response.data;
    
    } catch (error) {
      throw new Error('Error during fetch messages', error)
    }
  }
  
  async getFeedPosts(userToken) {
    try {
      const response = await this.apiClient.get(`/feed?startSeq=${100}&limit=${100}&order=${'desc'}`,
        {
          headers: {
            'ens-auth-token': userToken,
            Accept: 'application/json',
            'Content-Type': 'Application/json'
          },
        }
      )
      
      const data = response.data;
      const formattedPostsArr = data.posts.map((post) => {
        return {
          seq: post.seq,
          user: post.user,
          date: format(new Date(post.date), "MM/dd/yyyy 'at' HH:mm", {
            locale: enUS
          }),
          message: post.message
        }
      })

      data.posts = formattedPostsArr;


      return data;
      // return messages;
    } catch (error) {
      throw new Error('Error during fetch messages', error)
    }
  }
}


const authService = new FeedServices()
export default authService;
