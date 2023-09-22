const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
// Configura Multer para guardar archivos en una carpeta
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/uploads"),
    filename: (req, file, cb) => {
      cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
     
    },
  });
  
  const upload =
    multer({
      storage,
      dest: path.join(__dirname, "../public/uploads"),
      fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
          return cb(null, true);
        }
        cb("Error: Archivo no soportado",error);
      },
    }).single("imagen_producto")

    module.exports=upload