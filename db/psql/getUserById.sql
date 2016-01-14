-- $1 = salesperson(ie USER) id
SELECT * FROM salespersons
	WHERE salespersons.salesperson_id = $1;