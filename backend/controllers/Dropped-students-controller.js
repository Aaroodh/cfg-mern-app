import DroppedStudents from '../models/Dropped-Students';
import bcrypt from 'bcryptjs'
 const getAllUser = async(req,res,next)=>{
      let users;
      try {
          users = await DroppedStudents.find()
      } catch (error) {
          
      }
       if (!users) {
           return res.status(404).json({message:"No User found"})
       }
       return res.status(200).json({ users });
}

 const signup = async (req, res, next) => {
    const {name, age, center, tel, gender, reason, email, password} = req.body;
    let existingUser;
    try {
      existingUser = await DroppedStudents.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
  
    const user = new DroppedStudents({
        name, age, center, tel, gender, reason, email,
        password : hashedPassword
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
      existingUser = await DroppedStudents.findOne({ email });
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

export {getAllUser , signup,login}