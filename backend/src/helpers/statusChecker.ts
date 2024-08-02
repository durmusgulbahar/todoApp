import { Status } from "../interfaces/ITask";


class StatusChecker{

    async isValidStatus(status:any){
        return status=="To Do" || status=="Done";
    }
}

export default StatusChecker;