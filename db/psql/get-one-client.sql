-- $1 userId
-- $2 friendId
SELECT * FROM client
	INNER JOIN salesperson_client
	ON (salesperson_client.client_id = client.client_id)
	WHERE (salesperson_client.salesperson_id = $1 AND salesperson_client.client_id = $2)