const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    code: { type: Number, require },
    url: { type: String, require },
    creator: { type: String, require },
    product_name: { type: String, require },
    generic_name: { type: String, require },
    quantity: { type: String, require },
    packaging: { type: String, require },
    packaging_tags: { type: String, require },
    serving_size: { type: String, require },
    energy_100g: { type: Number, require },
    energy_from_fat_100g: { type: String, require },
    fat_100g: { type: Number, require },
    saturated_fat_100g: { type: Number, require },
    monounsaturated_fat_100g: { type: Number, require },
    polyunsaturated_fat_100g: { type: Number, require },
    omega_3_fat_100g: { type: Number, require },
    omega_6_fat_100g: { type: Number, require },
    trans_fat_100g: { type: Number, require },
    cholesterol_100g: { type: Number, require },
    carbohydrates_100g: { type: Number, require },
    sugars_100g: { type: Number, require },
    fiber_100g: { type: Number, require },
    proteins_100g: { type: Number, require },
    salt_100g: { type: Number, require },
    sodium_100g: { type: Number, require },
  },
  {
    timestamps: true,
  }
);

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;
