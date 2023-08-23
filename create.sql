drop schema curso cascade;
create schema curso;

create table curso.passenger (
	passenger_id uuid primary key,
	name text,
	email text,
	document text
);

create table curso.driver (
	driver_id uuid primary key,
	name text,
	email text,
	document text,
	car_plate text
);

create table curso.ride (
	ride_id uuid primary key,
	passenger_id uuid,
	driver_id uuid,
	transaction_id uuid,
	from_lat numeric,
	from_long numeric,
	to_lat numeric,
	to_long numeric,
	status text,
	request_date timestamp,
	accept_date timestamp,
	start_date timestamp,
	end_date timestamp,
	price numeric
);

create table curso.transaction (
	transaction_id uuid primary key,
	name text,
	email text,
	amount numeric
);

create table curso.users(
	USER_ID uuid PRIMARY KEY
	email text,
	password text,
	pasword_type text,
	salt text
);