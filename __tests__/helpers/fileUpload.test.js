import { fileUpload } from "../../src/helpers/fileUpload";


describe('Pruebas en fileUpload', () => {

    test('Debe de subir el archivo correctamente a Cloudinary', async () => {

        const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtKhQTPHFeNklilel1pxRMIW3_of7clia3g&usqp=CAU';

        const resp = await fetch(imageURL);
        const blob = await resp.blob();

        const file = new File([blob], 'prueba-imagen.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

    });

});