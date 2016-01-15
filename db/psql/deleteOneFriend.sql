-- $1 userId
-- $2 friendId
DELETE FROM clients
  WHERE (id = $1)