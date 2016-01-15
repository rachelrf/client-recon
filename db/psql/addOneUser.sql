INSERT INTO users (name, id) 
  VALUES ($1, $2)
  RETURNING *;