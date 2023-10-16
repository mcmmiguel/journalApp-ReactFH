import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dmrhtcc5z',
    api_key: '823788935155713',
    api_secret: 'Hab8dsrdPLC1V2zsqTLptEFvdq4',
    secure: true,
});


describe('Pruebas en fileUpload', () => {

    test('Debe de subir el archivo correctamente a Cloudinary', async () => {

        const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtKhQTPHFeNklilel1pxRMIW3_of7clia3g&usqp=CAU';

        const resp = await fetch(imageURL);
        const blob = await resp.blob();

        const file = new File([blob], 'prueba-imagen.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        const cloudinaryResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
        console.log({ cloudinaryResp });

    });

    test('Debe de retornar Null', async () => {

        const file = new File([], 'prueba-imagen.jpg');

        const url = await fileUpload(file);

        expect(url).toBe(null);

    });

});