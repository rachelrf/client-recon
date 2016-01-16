INSERT INTO events (friend_id, name, date) 
  VALUES ($1, $2, $3)
  RETURNING *;