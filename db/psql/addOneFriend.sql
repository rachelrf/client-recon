INSERT INTO friends (user_id, name, email, phone, birthday, zipcode, image_url, interests, twitter_username, instagram_username, tumblr_username) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  RETURNING *;