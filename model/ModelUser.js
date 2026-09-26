import mongoose from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },

    created_date: {
      type: String,
      required: true,
    },

    updated_date: {
      type: String,
      required: true,
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

Userschema.pre("save", async function () {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

Userschema.statics.findByCredentials = async function (Email, password) {
  try {
    const user = await this.findOne({ Email });

    if (!user) {
      throw new Error("unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("unable to login");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

Userschema.methods.generateAuthToken = async function () {
  try {
    const user = this;

    const token = JWT.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    if (!token) {
      throw new Error("failed to generate token");
    }

    user.tokens = user.tokens.concat({ token });

    await user.save();

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Modeluser = mongoose.model("user", Userschema);

export default Modeluser;
