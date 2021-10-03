import {UserRepository} from "../repository/UserRepository";
import {TaskRepository} from "../repository/TaskRepository";
import {UserService} from "../service/UserService";
import {TaskService} from "../service/TaskService";
import {UserController} from "../controller/UserController";
import {TaskController} from "../controller/TaskController";



const configRepository = async () =>{
    const {MongoClient} = require('mongodb');
    const uri = "mongodb+srv://DbUser123:p0rOh6tWN7Z21rS6@mobilecluster.5tzzs.mongodb.net/chores_mobile_db?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const repoObj = {userRepository:null,taskRepository:null}
    try{
        await client.connect()
        repoObj.userRepository = new UserRepository(client);
        repoObj.taskRepository = new TaskRepository(client)
    }catch (e){
        console.error(e);
        client.close();
    }
    return repoObj;
}

const configService = ({userRepository,taskRepository}) => {
    const serviceObj ={userService: new UserService(userRepository),taskService: new TaskService(taskRepository)};
    return serviceObj;
}


const configController =({serviceObj:{userService,taskService},router})=>{
    const controllerObj = {userController: new UserController(userService,router),taskController: new TaskController(taskService,router)}
    return controllerObj
}

export const configServer = async (router) => {
    const repoObj = await configRepository();
    if(repoObj!==undefined){
        const serviceObj = configService(repoObj);
        if(serviceObj!==undefined){
            const controllerObj = configController({serviceObj,router});
            return controllerObj;
        }
    }
}