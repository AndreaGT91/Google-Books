const mongoose = require("mongoose");
const db = require("../models/book");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  { 
    title: "Fantastic Beasts and Where to Find Them",
    authors: ["J.K. Rowling", "Newt Scamander"],
    description: "The 2017 edition of this essential companion to the Harry Potter stories included a new foreword from J.K. Rowling (writing as Newt Scamander) and 6 new beasts! A set textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world. Scamander's years of travel and research have created a tome of unparalleled importance. Some of the beasts will be familiar to readers of the Harry Potter books - the Hippogriff, the Basilisk, the Hungarian Horntail... Others will surprise even the most ardent amateur Magizoologist. Dip in to discover the curious habits of magical beasts across five continents... At least 15% of the net retail price* of this eBook will be available to Comic Relief and Lumos Foundation for their work with children and young people to help them have a better life. 20% of these monies will be used by Comic Relief and 80% will be used by Lumos Foundation. * The net retail price means the price paid by the consumer less applicable sales taxes Comic Relief is a registered charity in the UK with charity nos. 326568 (England/Wales) and SC039730 (Scotland). Lumos Foundation is a registered charity in the UK with no. 1112575. Please note: This is the 2017 edition of the Hogwarts Library ebook, featuring bespoke cover artwork from Olly Moss and a new foreword from J.K. Rowling. The official screenplay of the 2016 Warner Bros. movie - Fantastic Beasts and Where to Find Them: The Original Screenplay - is available separately.",
    images: "http://books.google.com/books/content?id=ASImDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=ASImDQAAQBAJ&dq=harry+potter&hl=&source=gbs_api"
  }
];

db
  .remove({})
  .then(() => db.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
