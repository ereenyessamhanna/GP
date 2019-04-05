class Expense { 
    id;
    cost ;
    title;
    constructor(expData){
        this.id= null;
        this.cost = "";
        this.title = "";
        if(expData){
            this.parse(expData);
        }

    }
    parse(expData)
    {
        if (expData.id){
            this.id = expData.id;
        }
        if (expData.cost){
            this.id = expData.cost;
        }
        if (expData.title){
            this.id = expData.title;
        }

    }
}
export  {Expense};