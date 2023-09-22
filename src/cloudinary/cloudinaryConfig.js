import dotenv from 'dotenv'
import cloudinary from 'cloudinary'

dotenv.config()

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true 
})

export function deleteThreadContent(folder) {

    function deleteFolder(folder) {
        cloudinary.v2.api.delete_folder(folder)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function deleteAllImagesInFolder(folder) {
        cloudinary.api
            .delete_resources_by_prefix(`${folder}/`, {type: 'authenticated'})
            .then(result => {
                console.log(result)
                deleteFolder(folder)
            })
    }

    deleteAllImagesInFolder(folder)

}