INSERT INTO friends (userId, name, email, birthday, zipcode, imageUrl, interests, twitterUrl, instagramUrl, tumblrUrl) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  RETURNING *;