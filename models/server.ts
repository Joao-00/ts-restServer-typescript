import express, {Application} from 'express';


//tambien se puede exportar colocando el export al principio de la clase (export class Server{})
class Server {

    private app: Application;
    private port: string;


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }


    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }


}

export default Server;