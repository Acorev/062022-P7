export default class Post {
  constructor(
    userId,
    Picture,
    likes,
    likeId,
    message = '',

  ) {
    this.userId = userId;
    this.Picture = Picture;
    this.likes = likes;
    this.likeId = likeId;
    this.message = message;

  }
}