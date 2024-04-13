// CRUD Operation
use("CrudDb")


db.createCollection("courses")

/*
db.courses.insertOne({
    name: "Ashish Sharma Learn web dev courese",
    price: 0,
    assigment: 12,
    projects: 45
})

db.courses.insertMany([
    {
        "name": "Ashish Sharma Learn web dev courese",
        "price": 0,
        "assignment": 12,
        "projects": 45
    },
    {
        "name": "John Doe Introduction to Programming",
        "price": 10,
        "assignment": 8,
        "projects": 30
    },
    {
        "name": "Emma Smith Advanced JavaScript",
        "price": 25,
        "assignment": 15,
        "projects": 50
    },
    {
        "name": "Alex Johnson HTML and CSS Fundamentals",
        "price": 15,
        "assignment": 10,
        "projects": 35
    },
    {
        "name": "Sara Williams Python for Beginners",
        "price": 20,
        "assignment": 10,
        "projects": 40
    },
    {
        "name": "Michael Brown Responsive Web Design",
        "price": 30,
        "assignment": 20,
        "projects": 60
    },
    {
        "name": "Jessica Taylor Frontend Development Bootcamp",
        "price": 50,
        "assignment": 25,
        "projects": 70
    },
    {
        "name": "David Martinez Full Stack Web Development",
        "price": 60,
        "assignment": 30,
        "projects": 80
    },
    {
        "name": "Emily Garcia Web Design Principles",
        "price": 40,
        "assignment": 20,
        "projects": 55
    },
    {
        "name": "Daniel Wilson JavaScript Frameworks",
        "price": 35,
        "assignment": 18,
        "projects": 65
    }
]);

// let a = db.courses.find({price: 0})
// console.log(a.toArray());

let a = db.courses.findOne({price: 0})
console.log(a.toArray());
*/

// UPDATE
db.courses.updateOne({price: 0}, {$set:{price: 100}})

db.courses.updateMany(
    { "price": 0 },
    { $set: { "price": 1000 } }
);


// DELETE
// db.courses.deleteOne({ "price": 100 });

db.courses.deleteMany({ "price": 1000 });
