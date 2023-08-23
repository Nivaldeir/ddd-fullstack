CREATE TABLE
  public.passengers (
    passenger_id uuid NOT NULL,
    name character varying (255) NOT NULL,
    email character varying (255) NOT NULL,
    document character varying (255) NULL
  );

ALTER TABLE
  public.passengers
ADD
  CONSTRAINT passengers_pkey PRIMARY KEY (passenger_id)

CREATE TABLE
  public.drivers (
    driver_id uuid NOT NULL,
    name character varying (255) NOT NULL,
    email character varying (255) NOT NULL,
    document character varying (255) NOT NULL,
    car_plate character varying (255) NOT NULL
  );

ALTER TABLE
  public.drivers
ADD
  CONSTRAINT drivers_pkey PRIMARY KEY (driver_id)