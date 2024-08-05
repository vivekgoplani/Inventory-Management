// const Store = require("../models/store");

// // Add Store
// const addStore = async (req, res) => {
//     console.log(req.body)
//   const addStore = await new Store({
//     userID : req.body.userId,
//     name: req.body.name,
//     category: req.body.category,
//     address: req.body.address,
//     city: req.body.city,
//     image: req.body.image
//   });

//   addStore.save().then((result) => {
//       res.status(200).send(result);
//     })
//     .catch((err) => {
//       res.status(402).send(err);
//     });
// };

// // Get All Stores
// const getAllStores = async (req, res) => {
//   const findAllStores = await Store.find({"userID": req.params.userID}).sort({ _id: -1 }); // -1 for descending;
//   res.json(findAllStores);
// };

// module.exports = { addStore, getAllStores };



const Store = require("../models/store");

// Add Store
const addStore = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const newStore = new Store({
      userID: req.body.userId,
      name: req.body.name,
      category: req.body.category,
      address: req.body.address,
      city: req.body.city,
      image: req.body.image
    });

    const result = await newStore.save();
    res.status(200).send(result);
  } catch (err) {
    console.error("Error saving store:", err);
    res.status(500).send({ error: "Error saving store", details: err });
  }
};

// Get All Stores
const getAllStores = async (req, res) => {
  try {
    const findAllStores = await Store.find({ userID: req.params.userID }).sort({ _id: -1 });
    res.json(findAllStores);
  } catch (err) {
    console.error("Error fetching stores:", err);
    res.status(500).send({ error: "Error fetching stores", details: err });
  }
};

module.exports = { addStore, getAllStores };
