import fs from 'fs';
import path from 'path';


/////////////////////////////////////////////////////////////////////////////
/////////////////////// Traer ojetos segun ID ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const dataFilePath = path.join(process.cwd(), 'data.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Leer el archivo JSON
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);

    const { id } = req.query;
    if (id) {
      const item = data.find((d) => d.id === parseInt(id));
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Objeto no encontrado' });
      }
    } else {
      res.status(200).json(data);
    }
  } else if (req.method === 'POST') {
    // Escribir en el archivo JSON
    const newData = req.body;
    fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
    res.status(200).json({ message: 'Datos actualizados con éxito' });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////// Esto seria para 1 solo objeto ////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//Esto seria para 1 solo objeto
// Definimos la ruta al archivo JSON
// const dataFilePath = path.join(process.cwd(), 'data.json');

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     // Leer el archivo JSON
//     const fileContents = fs.readFileSync(dataFilePath, 'utf8');
//     const data = JSON.parse(fileContents);
//     res.status(200).json(data);
//   } else if (req.method === 'POST') {
//     // Escribir en el archivo JSON
//     const newData = req.body;
//     fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
//     res.status(200).json({ message: 'Datos actualizados con éxito' });
//   } else {
//     res.status(405).json({ message: 'Método no permitido' });
//   }
// }
