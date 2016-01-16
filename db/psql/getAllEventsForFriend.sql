-- $1 the friend id
SELECT * FROM events
  WHERE friend_id = $1;