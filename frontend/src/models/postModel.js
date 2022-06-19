export default class Post {
  constructor(
    id,
    name = '...',
    message = '',
    Picture,
  ) {
    this.id = id;
    this.name = name;
    this.message = message;
    this.Picture = Picture;
  }
}