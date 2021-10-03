const filterRelations = ["=","!=","<","<=",">",">="]

export const checkFilterQueryRelation = (filterValue) =>{
    for(let relation of filterRelations){
        if(filterValue.contains(relation))return relation;
    }
}
