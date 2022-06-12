import User from "../models/User";
import bcrypt from 'bcryptjs'
const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find()
  } catch (error) {

  }
  if (!users) {
    return res.status(404).json({ message: "No User found" })
  }
  return res.status(200).json({ users });
}

const signup = async (req, res, next) => {
  const { name, age, center, scholarship, tel, sdate, edate, payment, gender, courseEnrolled, courseCertificate, salary, designation, location, jdate, cname, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already Exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    name, age, scholarship, center, tel, sdate, edate, payment, gender, courseEnrolled, courseCertificate, salary, designation, location, jdate, cname, email, password: hashedPassword
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Couldnt Find User By This Email" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull", user: existingUser });
};

export { getAllUser, signup, login }