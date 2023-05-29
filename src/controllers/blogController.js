const blog = require("../models/blog");
const blogModel = require("../models/blog");
const moment = require("moment");


//
function checkTags(tags) {
  let arr=[];
  for(let i=0;i<tags.length;i++){
    let c=1;
  for(let j=0;j<tags[i].length;j++){
      if(tags[i][j]!=" ")
        c=0;
    }
    if (!(tags[i]==""||c)) {
      arr.push(tags[i]);
    }
}
return arr;
}


const createBlog = async function (req, res) {
  try {
    let data = req.body;
    const authdata = data.authorId;
    let authId = req.decodedToken.authorId;
    if (authdata != authId) {
      return res
        .status(404)
        .send({ status: false, msg: "not a valid author to create a blog" });
      //   if isDeleted true in database or we are passing different attributes in query params
    }
    data.tags=checkTags(data.tags);
    data.subcategory=checkTags(data.subcategory);

    const blog = await blogModel.create(data);
    res.status(201).send({ status: true, data: blog });
  } catch (error) {
    res.status(400).send({ status: false, msg: error.message });
  }
};

const getBlogData = async (req, res) => {
  try {
    let query = req.query;
    let authId = req.decodedToken.authorId;
    if (query["authorId"] != authId && query["authorId"])
      return res.status(404).send({ status: false, msg: "blog not found" });
    query.authorId = authId;
    query.isDeleted = false;
    query.isPublished = true;

    let doc = await blogModel.find(query);
    if (doc.length == 0) {
      return res.status(404).send({ status: false, msg: "Document not found" });
    }
    res.status(200).send({ status: true, msg: doc });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updatedBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    let { title, body, tags, subcategory } = req.body;

     tags=checkTags(tags);
    subcategory=checkTags(subcategory);
    let updateContent = {
      title: title,
      body: body,
      $push: { tags: tags, subcategory: subcategory },
      isPublished: true,
      publishedAt: `${moment()}`,
    };
    // Update the blog fields
    const updateBlog = await blogModel.findOneAndUpdate(
      { _id: blogId, isDeleted: false },
      updateContent,
      { new: true }
    );

    if (!updateBlog)
      return res
        .status(404)
        .send({ status: false, msg: "No such data present" });

    let tagSet = new Set([...updateBlog.tags]);
    let subSet = new Set([...updateBlog.subcategory]);
    updateBlog.tags = Array.from(tagSet);
    updateBlog.subcategory = Array.from(subSet);
    let pushData = await blogModel.findOneAndUpdate(
      { _id: blogId },
      updateBlog
    );

    // Return the updated blog document in the response
    res
      .status(200)
      .send({
        status: true,
        message: "Blog updated successfully",
        data: updateBlog,
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteBlogByPathParam = async (req, res) => {
  try {
    let bId = req.params.blogId;
    let blogData = await blogModel.findOne({ _id: bId, isDeleted: false });

    if (!blogData)
      return res.status(404).send({ status: false, msg: "Document not found" });

    let deletedBlog = await blogModel.findOneAndUpdate(
      { _id: bId },
      { isDeleted: true, deletedAt: `${moment()}` }
    );
    res.status(200).send({ status: true, message: "" });
  } catch (err) {
    res.status(500).send({ status: false, Error: err.message });
  }
};

const deleteBlogByQueryParam = async (req, res) => {
  try {
    
  /* This code is checking if the `authorId` in the query parameters of the request matches the
  `authorId` of the decoded token. If they do not match, it returns a 404 status with a message
  indicating that the filter `authorId` is not matched with the login author. This is a security
  measure to ensure that only the author who created the blog can modify or delete it. */
    let filterData = req.query;
    let authId = req.decodedToken.authorId;
    if (filterData["authorId"] != authId && filterData["authorId"])
      return res
        .status(404)
        .send({
          status: false,
          msg: "Filter AuthorID is not matched with login Author",
        });

    filterData["authorId"] = authId;
    let existData = await blogModel.findOne(filterData);

    if (!existData) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog not Found of login Author" });
      //   if isDeleted true in database or we are passing different attributes in query params
    }
    if (existData.isDeleted)
      return res
        .status(400)
        .send({ status: false, msg: "Blog is already deleted" });

    let deletedBlog = await blogModel.updateMany(
      filterData,
      { isDeleted: true, deletedAt: `${moment()}` },
      { new: true }
    );

    res.status(200).send({ status: true, message: "" });
  } catch (err) {
    res.status(500).send({ status: false, ErrorMsg: err.message });
  }
};

module.exports = {
  createBlog,
  getBlogData,
  updatedBlog,
  deleteBlogByPathParam,
  deleteBlogByQueryParam,
};
