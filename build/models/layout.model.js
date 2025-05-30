"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const faqSchema = new mongoose_1.Schema({
    question: { type: String },
    answer: { type: String },
});
const CategorySchema = new mongoose_1.Schema({
    title: { type: String },
});
const BannerImageSchema = new mongoose_1.Schema({
    public_id: { type: String },
    url: { type: String },
});
const LayoutSchema = new mongoose_1.Schema({
    type: { type: String },
    faq: [faqSchema],
    categories: [CategorySchema],
    banner: {
        image: { type: BannerImageSchema },
        title: { type: String },
        subTitle: { type: String },
    },
});
const LayoutModel = (0, mongoose_1.model)("Layout", LayoutSchema);
exports.default = LayoutModel;
