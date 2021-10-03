import {checkFilterQueryRelation, filterRelations} from "../utils";

export class TaskService{
    constructor(repository) {
        this.repository = repository;
    }

    async getAllTasks(pagination, filter, sort) {
        const filtersList = filter.split(",").map(filterValue=>{
            let filterRelation = checkFilterQueryRelation(filterValue);

            const [field,value]=filterValue.split(filterRelation);
            return {field,value}
        });

        const sortingList = sort.split(",").map(sort=>{
            const sortOrder = sort.slice(0,1)
            const sortField = sort.slice(1)
            return {field:sortField,order:sortOrder}
        })

        return await this.repository.getAllTasks(pagination,filtersList,sortingList);
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