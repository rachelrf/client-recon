-- $1 is the client_id
-- $2 are the columns that need to be updated, can be array or single value
-- $3 are the values corresponding the columns, must be same length as $2
UPDATE clients
  SET ($2^) = ($3^)
  WHERE client_id = $1
  RETURNING *;
