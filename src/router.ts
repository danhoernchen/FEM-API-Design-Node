import { error } from "console";
import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./utils/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  getUpdate,
  getUpdates,
  updateUpdate,
  deleteUpdate,
} from "./handlers/update";
const router = Router();

// Product Routes
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete("/product/:id", deleteProduct);

// Update Routes
router.get("/update", getUpdates);
router.get("/update/:id", getUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  handleInputErrors,
  updateUpdate
);
router.post(
  "/update",
  [
    body("title").optional().isString(),
    body("body").optional().isString(),
    handleInputErrors,
  ],
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

// Update Content Routes
router.get("/updcontent", () => {});
router.get("/updcontent/:id", () => {});
router.put(
  "/updcontent/:id",
  [body("name").exists().isString(), body("description").exists().isString()],
  () => {}
);
router.post(
  "/updcontent",
  [
    body("updateId").exists().isString(),
    body("name").exists().isString(),
    body("description").exists().isString(),
  ],
  () => {}
);
router.delete("/updcontent/:id", (req, res) => {});

export default router;
