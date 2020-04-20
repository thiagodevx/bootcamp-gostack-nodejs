import multer from 'multer'
import path from 'path'

const avatarFolter = path.resolve(__dirname, '../../avatars')
const multerConfiguration = {
  avatarFolter,
  storage: multer.diskStorage({
    destination: avatarFolter,
    filename: (request, file, callback) => {
      const fileTimestamp = Date.now().toString()
      const filename = `${fileTimestamp}-${file.originalname}`
      return callback(null, filename)
    }
  })
}

export default multerConfiguration
