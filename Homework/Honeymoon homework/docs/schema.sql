
create table if not exists itinerary_items (
  id bigint generated always as identity primary key,
  destination text not null,
  day_number int not null,
  activity text not null,
  accommodation text not null,
  notes text
);


alter table itinerary_items disable row level security;

insert into itinerary_items
(destination, day_number, activity, accommodation, notes)
values
('Paris', 1, 'Romantic city walk', 'Boutique hotel', 'Evening dinner by the Eiffel Tower'),
('Paris', 2, 'Louvre museum visit', 'Boutique hotel', 'Book tickets in advance'),
('Maldives', 3, 'Beach relaxation', 'Luxury water villa', 'Snorkelling in the afternoon'),
('Maldives', 4, 'Spa day', 'Luxury water villa', 'Couples massage booked'),
('New Zealand', 5, 'Hiking adventure', 'Mountain lodge', 'Pack warm clothing'),
('New Zealand', 6, 'Lake cruise', 'Mountain lodge', 'Morning departure');
