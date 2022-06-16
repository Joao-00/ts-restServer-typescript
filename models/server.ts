import express, {Application} from 'express';
import userRoutes from '../routes/usuario';


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

        //definir mis rutas
        this.routes();
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