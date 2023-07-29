const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shreyansh:shreyansh@cluster0.ddn10ip.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        // to fetch data from mongoDB Atlas existing collection food_items
        let fetched_data = await mongoose.connection.db.collection("food_items")
        // using .find() and giving empty object we fetch all entries 
        //and then convert them to an array using toArray()
        let data = await fetched_data.find({}).toArray();
        // food_items is a variable now that can be accessed from any file
        //it is the array of all the food items in the database
        global.food_items = data;
        let foodCategory = await mongoose.connection.db.collection("foodCategory")
        let catData = await foodCategory.find({}).toArray();
        global.foodCategory = catData;


    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

module.exports = mongoDB;
