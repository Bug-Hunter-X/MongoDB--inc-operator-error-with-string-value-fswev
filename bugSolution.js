```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65156515651")},{$inc:{counter: 1}});
```