use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Shane",
    email: "shane@justshane.com",
    checkedIn: true
  },
  {
    name: "Snoop Dog",
    email: "snoop@kennel.com",
    checkedIn: false
  },
  {
    name: "A Penguin",
    email: "a.penguin@thezoo.com",
    checkedIn: true
  },
  {
    name: "Seal",
    email: "seal@aldi.com",
    checkedIn: false
  },
  {
    name: "Mr Brain",
    email: "alfred.brain@mrbrainsfaggots.com",
    checkedIn: false
  },
  {
    name: "Captain Caveman",
    email: "hairyback69@thecave.com",
    checkedIn: false
  },
  {
    name: "Гари Потер",
    email: "Gary@Potter.com",
    checkedIn: true
  },
  {
    name: "Barney Ruble",
    email: "barney@ivlad.com",
    checkedIn: true
  },
  {
    name: "Fred Flintpound",
    email: "Fred@bedrock.com",
    checkedIn: false
  }
])
