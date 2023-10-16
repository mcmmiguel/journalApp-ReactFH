
export const fileUpload = async (file) => {

    if (!file) throw new Error('There is no files');

    const cloudURL = 'https://api.cloudinary.com/v1_1/dmrhtcc5z/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'reactFH-Journal');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData,
        });

        if (!resp.ok) throw new Error('Cannot be able to upload image');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

};