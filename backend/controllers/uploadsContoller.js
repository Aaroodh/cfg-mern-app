import path from "path"
import { StatusCodes } from "http-status-codes"

import cloudinary from 'cloudinary'
import fs from "fs"

const uploadProductImageLocal = async (req, res) => {
    if (!req.files) {
      throw new CustomError.BadRequestError('No File Uploaded');
    }
    const productImage = req.files.image;
    if (!productImage.mimetype.startsWith('image')) {
      throw new CustomError.BadRequestError('Please Upload Image');
    }
    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
      throw new CustomError.BadRequestError('Please upload image smaller 1MB');
    }
    const imagePath = path.join(
      __dirname,
      '../public/uploads/' + `${productImage.name}`
    );
    await productImage.mv(imagePath);
    return res
      .status(StatusCodes.OK)
      .json({ image: { src: `/uploads/${productImage.name}` } });
  };

const uploadProductImage = async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(200).json({ image: { src: result.secure_url } });
};

export  {
  uploadProductImage,
};