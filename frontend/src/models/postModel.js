export default class Post {
  constructor(
    pseudo,
    userId,
    Picture,
    likes,
    likeId,
    message = '',

  ) {
    this.pseudo = pseudo;
    this.userId = userId;
    this.Picture = Picture;
    this.likes = likes;
    this.likeId = likeId;
    this.message = message;

  }
}