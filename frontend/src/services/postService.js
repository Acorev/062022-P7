export default class PostService {

  // Chargement des posts
  static async getPosts() {
    return await fetch('http://localhost:5500/api/posts', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Chargement d'un post
  static async getPost(id) {
    return await fetch(`http://localhost:5500/api/posts/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Modifier un post
  static async updatePost(post) {
    return await fetch(`http://localhost:5500/api/posts/${post._id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Effacer un post
  static async deletePost(id) {
    return await fetch(`http://localhost:5500/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Nouveau post
  static async addPost(post) {
    return await fetch('http://localhost:5500/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`,
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  static handleError(error) {
    console.log(error);
  }
}