const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  homeView,
  contactView,
  aboutView,
  faqsView,
} = require("../controllers/MainControllers.js");

router.get("/", homeView);
router.get("/contact", contactView);
router.get("/about", aboutView);
router.get("/faqs", faqsView);

module.exports = router;
