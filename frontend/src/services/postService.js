export default class PostService {
  static getPosts() {
    return fetch('http://localhost:3001/POSTS')
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  static getPost(id) {
    return fetch(`http://localhost:3001/POSTS/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError)
  }

  static updatePost(post) {
    return fetch(`http://localhost:3001/POSTS/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  static deletePost(post) {
    return fetch(`http://localhost:3001/POSTS/${post.id}`, {
      method: 'DELETE',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(error => this.handleError)
  }

  static addPost(post) {
    delete post.created;
    return fetch('http://localhost:3001/POSTS', {
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