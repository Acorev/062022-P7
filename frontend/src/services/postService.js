export default class PostService {

  // Chargement des posts
  static getPosts() {
    return fetch('http://localhost:5500/api/posts', {
      method: "GET",
      headers: {
        "Accept": "*/*",
        "Authorization": `Bearer ${localStorage.token}`,
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Chargement d'un post
  static getPost(id) {
    return fetch(`http://localhost:5500/api/posts/${id}`, {
      method: "GET",
      headers: {
        "Accept": "*/*",
        "Authorization": `Bearer ${localStorage.token}`,
      }
    })
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError)
  }

  // Modifier un post
  static updatePost(post) {
    return fetch(`http://localhost:5500/api/posts/${post._id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        "Accept": "*/*",
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Effacer un post
  static deletePost(post) {
    return fetch(`http://localhost:5500/POSTS/${post.id}`, {
      method: 'DELETE',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  // Nouveau post
  static addPost(post) {
    delete post.created;
    return fetch('http://localhost:5500/POSTS', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }


  static isEmpty(data) {
    return Object.keys(data).length === 0;
  }

  static handleError(error) {
    console.log(error);
  }
}