-- $1 friend id
DELETE FROM friends
  WHERE id = $1;