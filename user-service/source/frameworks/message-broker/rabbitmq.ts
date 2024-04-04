import amqp from 'amqplib'
import { IUserSchema } from '../../adapters/interfaces/IUserSchema'
import { IUserCase } from '../../adapters/interfaces/IUserCase'
import dotenv from 'dotenv';
dotenv.config()


export class rabbitMQ{
    private Connection = amqp.connection
    private Channel = amqp.channel
    async initilize(){
        try{
            const rabbitUrl = process.env.RABBIT_MQ!
            this.Connection = await amqp.connect(rabbitUrl)
            this.Channel = await this.Connection.createChannel()
            console.log('RabbitMQ connection established');
        }catch(e){
            console.log(e);
            process.exit(1);
        }
    }
}