INSERT INTO salespersons (salesperson_name) 
VALUES ($1);

SELECT salesperson_id from salespersons where salesperson_name = $1;