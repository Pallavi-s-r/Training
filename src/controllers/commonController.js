const { type } = require("express/lib/response")
const UserModel= require("../models/userModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")



// const basicCode= async function(req, res) {
    
//     let contentTypeHeader = req.headers.content-type
//     console.log("The headers received in this request are: ", req.headers)
//     console.log("The content type header is: ", contentTypeHeader)


//     req.headers.month = "December"
//     req.batch = "Californium"

//     console.log("The headers modified from this request are: ", req.headers)
//     // let tokenDataInHeaders= req.headers.token
//     // console.log(tokenDataInHeaders)
//     res.header("year", "2022")
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")

//     console.log("The request object looks like this: ", req)
//     res.send({ msg: "This is coming from controller (handler)"})
    
// }

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

const createUser= async function (req, res) {
    // if (!req.header('isFreeAppUser')) {
    //     return res.status(400).json({ error: 'Missing mandatory header: isFreeAppUser' });
    //   }
    // let data= req.body
    // let savedData= await UserModel.create(data)
    // res.send({msg: savedData})
    const createUser = async function (req, res) {
        const isFreeAppUser = req.header('isFreeAppUser');
        if (!isFreeAppUser) {
          return res.status(400).json({ error: 'Missing mandatory header: isFreeAppUser' });
        }
      
        const user = await userModel.create(req.body);
        res.send({msg: user},{timeout : 30000});
      };
      
      module.exports.createUser = createUser;
}

const createOrder = async function (req, res) {
  // Check if the isFreeAppUser header is present
  if (!req.header('isFreeAppUser')) {
    return res.status(400).json({ error: 'Missing mandatory header: isFreeAppUser' });
  }

  let order = req.body;
  if (order.userId) {
    if (order.productId) {
      const user_Id = await UserModel.findById(order.userId);
      const product_Id = await ProductModel.findById(order.productId);
      if (user_Id) {
        if (product_Id) {
          if (order.isFreeAppUser) {
            order.amount = 0;
            data = await OrderModel.create(order);
            return res.send(data);
          } else {
            userBal = user_Id.balance - product_Id.price;
            if (userBal > 0) {
              let x = await UserModel.findOneAndUpdate(
                { _id: req.body.userId },
                { $set: { balance: userBal } },
                { new: true }
              );
              order.amount = product_Id.price;

              data = await OrderModel.create(order);
              // console.log(x);
              return res.send({ response: data });
            } else {
              return res.send("User doesn't have enough balance");
            }
          }
        } else {
          return res.send("Enter valid ProductId");
        }
      } else {
        return res.send("Enter valid UserId");
      }
    } else {
      return res.send("ProductId is required");
    }
  } else {
    return res.send("UserId is required");
  }
};

module.exports.createOrder = createOrder;

module.exports.createProduct= createProduct;
module.exports.createUser= createUser;





// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode