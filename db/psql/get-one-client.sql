-- $1 userId
-- $2 friendId
SELECT * FROM clients
	INNER JOIN clients_salespersons
	ON (clients_salespersons.client_id = clients.client_id)
	WHERE (clients_salespersons.salesperson_id = $1 AND clients_salespersons.client_id = $2)