-- $1 the user id
SELECT * FROM friends
  -- INNER JOIN users
  -- ON friends.user_id = users.id
  WHERE user_id = $1;