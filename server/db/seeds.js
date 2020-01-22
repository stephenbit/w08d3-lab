use guests;
db.dropdatabase();

db.bookings.insertMany([
  {
    name: "Shane",
    email: "shane@justshane.com",
    checkedIn: true
  },
  {
    name: "Snoop Dog",
    email: "snoop@dog.com",
    checkedIn: false
  },
  {
    name: "A Penguin",
    email: "a.penguin@thezoo.com",
    checkedIn: true
  },
])
