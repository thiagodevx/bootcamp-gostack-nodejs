import multer from 'multer'

const multerConfiguration = {
  storage: multer.diskStorage({ destination: '' })
}
