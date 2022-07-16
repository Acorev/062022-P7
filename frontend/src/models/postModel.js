export default class Post {
  constructor(
    pseudo,
    userId,
    imageUrl = '',
    likes,
    likeId,
    message = '',

  ) {
    this.pseudo = pseudo;
    this.userId = userId;
    this.imageUrl = imageUrl;
    this.likes = likes;
    this.likeId = likeId;
    this.message = message;

  }
}