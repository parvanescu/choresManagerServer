const DB_NAME= "chores_mobile_db";
const TASK_COLLECTION = "tasks";

export class TaskRepository{
    constructor(client) {
        this.client=client;
        this.collection = client.db(DB_NAME).collection(TASK_COLLECTION)
    }

    async getAllTasks({page,pageSize},filtersList,sortingList){
        const filterQuery = {}
        const sortingQuery = {}
        if(filtersList){
            filtersList.forEach(filter=>{

            })
        }
        if(sortingList){

        }
        const cursor = this.collection.find({}).skip((page-1)*pageSize).limit(pageSize)
        const taskList = await cursor.toArray();
        return taskList;
    }

    getTaskById(id){

    }

    createTask(task){

    }

    deleteTask(id){

    }

    updateTask(id){

    }


}