-- $1 the user id
SELECT * FROM friends
  -- INNER JOIN users
  -- ON friends.userId = users.id
  WHERE userId = $1;