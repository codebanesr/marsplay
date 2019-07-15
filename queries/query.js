module.exports = {
  comments:
    "INSERT INTO comments(id, post_id, name, email, body) VALUES(${id}, ${postId}, ${name}, ${email}, ${body})",
  users:
    "INSERT INTO users(email, id, name, phone_number, username, website, city, street, suite, zipcode, latitude, longitude) VALUES(${email}, ${id}, ${name}, ${phone}, ${username}, ${website}, ${address.city}, ${address.street}, ${address.suite}, ${address.zipcode},${address.geo.lat}, ${address.geo.lng})",
  posts:
    "INSERT INTO posts(user_id, id, title, body) VALUES(${userId}, ${id}, ${title}, ${body})",
  photos:
    "INSERT INTO photos(id, album_id, title, url, thumbnail_url) VALUES(${id}, ${albumId}, ${title},${url} ${thumbnailUrl})",
  albums:
    "INSERT INTO albums(id, user_id, title) VALUES(${id}, ${userId}, ${title})",
  todos:
    "INSERT INTO todo(id, user_id, title, completed) VALUES(${id}, ${userId}, ${title}, ${completed})"
};
