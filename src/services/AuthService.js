import apiClient from "./apiClient";

class AuthService {
  constructor(){
    this.apiClient = apiClient
  }

  async signIn(username, password) {
    try {
      const response = await this.apiClient.post('/auth', {
        username,
        password
      })
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  signOut() {
    console.log("Exiting...")
    localStorage.removeItem('@message-app:token');
    localStorage.removeItem('@message-app:username')
    return {}
  }
}

const authService = new AuthService()
export default authService;
