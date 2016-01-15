INSERT INTO salespersons (salesperson_name, salesperson_id) 
VALUES ($1, $2);

SELECT salesperson_id from salespersons where salesperson_name = $1;