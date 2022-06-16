import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

//tambien se puede exportar colocando el export al principio de la clase (export class Server{})
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //metodos iniciales
        this.middlewares();
        this.routes();
    }

    //TODO: conectar base de datos

    

    middlewares(){
        //CORS
        this.app.use(cors());
        //lectura del body
        this.app.use(express.json());
        //carpeta publica
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }


    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }


}

export default Server;