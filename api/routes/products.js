import express from "express";
import asyncHandler from "express-async-handler";
import * as data from "../data.js";
import Products from "../models/products.js";
import { isAuth, isAdmin } from "../utils.js";

const router = express.Router();

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     try {
//       const products = await Products.find();
//       res.json(products);
//     } catch (error) {
//       res.status(400).json({ message: "product get error !! " });
//     }
//   })
// );
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Products.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Products.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Products.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(
  "/seed",
  // isAuth,
  // isAdmin,
  asyncHandler(async (req, res) => {
    console.log(data.products);
    const createdProducts = await Products.insertMany(data.products);
    res.send({ createdProducts });
  })
);

router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(404).send("product does does not exist");
  }
});


export default router;
