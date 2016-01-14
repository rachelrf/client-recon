-- $2 is the client_id
-- $3 are the columns that need to be updated, can be array or single value
-- $4 ar the values corresponding the colums, must be same length as $2
UPDATE clients
  SET ($3^) = ($4^)
  WHERE client_id = $2
  RETURNING *;
