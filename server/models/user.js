const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    name: {
        fname: { type: String, required: true },
        lname: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["mentor", "mentee", "admin"], required: true },
    bio: { type: String },
    // Mentor-specific fields
    expertise: [{ type: String }],
    yearsOfExperience: { type: Number },
    calendlyLink: { type: String },
    availability: { type: String },
    // Mentee-specific fields
    interestedIn: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);