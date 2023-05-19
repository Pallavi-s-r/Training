
const UserModel = require('../model/model');

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const createdUser = await UserModel.create(data);
    res.send({ msg: createdUser });
    console.log('User created:', createdUser);
  } catch (err) {
    res.status(500).send({ error: 'Failed to create user' });
    console.error('Error creating user:', err);
  }
};

const getData = async (req, res) => {
  try {
    const userData = await UserModel.find();
    if (userData.length === 0) {
      console.log('No user data present');
      res.send({ msg: 'No user data present' });
    } else {
      console.log('User data retrieved:', userData);
      res.send({ msg: userData });
    }
  } catch (err) {
    console.error('Error retrieving user data:', err);
    res.status(500).send({ error: 'Failed to retrieve user data' });
  }
};

const getByName = async (req,res)=>{
    let name = await UserModel.findOne({name:"Shivam Singh"});
    res.send({msg:name});
}

const updateAge = async (req,res)=>{
    const { age } = req.body;
    let newData = await UserModel.findOneAndUpdate( { name: "Shivam Singh" },
    { $set: { age: age } },
    { new: true });
    res.send({msg:newData});
}

const updateStatus = async (req,res)=>{
    // const { age } = req.body;
    let newData = await UserModel.updateOne( { name: "Pallavi Singh" },
    { $set: { maritialStatus: true } },
    { new: true });
    res.send({msg:newData});
}

const updateStatus2 = async (req, res) => {
    try {
      const { address } = req.body;
      const updatedUsers = await UserModel.updateMany(
        { name: "Pallavi Singh"}, // Filter criteria
        { $set: { address: address } } ,{new:true}// Update operation
      );
      res.send({ msg: updatedUsers });
    } catch (err) {
      res.status(500).send({ error: 'Failed to update users' });
      console.error('Error updating users:', err);
    }
  };
  const deleteUserByName = async (req, res) => {
    try {
      const { name } = req.params;
  
      const result = await UserModel.deleteOne({ name: name });
  
      if (result.deletedCount > 0) {
        res.send({ msg: 'User deleted successfully' });
      } else {
        res.send({ msg: 'User not found' });
      }
    } catch (err) {
      res.status(500).send({ error: 'Failed to delete user' });
      console.error('Error deleting user:', err);
    }
  };
  
module.exports.createUser = createUser;
module.exports.getData = getData;
module.exports.getByName = getByName;
module.exports.updateAge = updateAge;
module.exports.updateStatus = updateStatus;
module.exports.updateStatus2 = updateStatus2;
module.exports.deleteUserByName = deleteUserByName;