export class TaskController{
    constructor(service,router) {
        this.service=service;
        this.router=router;
        this.configRoutes();
    }

    configRoutes (){
        this.router.get("/task",async ctx=>{
            await this.getAllTasks(ctx)
        })
    }

    async getAllTasks({request,response}){
        try{
            const {page,pageSize,filter,sort} = request.query;
            const taskList = await this.service.getAllTasks({page,pageSize},filter,sort)
            response.body={getAllTasks: taskList}
            response.status=202;
        }catch (e) {
            console.log(e)
            response.body={error: "Internal server error"};
            response.status=505;
        }
    }

}

//   const ifModifiedSince = ctx.request.get('If-Modif ied-Since');
//   if (ifModifiedSince && new Date(ifModifiedSince).getTime() >= lastUpdated.getTime() - lastUpdated.getMilliseconds()) {
//     ctx.response.status = 304; // NOT MODIFIED
//     return;
//   }
//   const text = ctx.request.query.text;
//   const page = parseInt(ctx.request.query.page) || 1;
//   ctx.response.set('Last-Modified', lastUpdated.toUTCString());
//   const sortedItems = items
//     .filter(item => text ? item.text.indexOf(text) !== -1 : true)
//     .sort((n1, n2) => -(n1.date.getTime() - n2.date.getTime()));
//   const offset = (page - 1) * pageSize;
//   // ctx.response.body = {
//   //   page,
//   //   items: sortedItems.slice(offset, offset + pageSize),
//   //   more: offset + pageSize < sortedItems.length
//   // };
//   ctx.response.body = items;
//   ctx.response.status = 200;