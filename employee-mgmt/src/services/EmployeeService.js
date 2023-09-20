import axios from 'axios'

const EMPLOYEES_API_BASE_URL = "http://localhost:8090/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEES_API_BASE_URL);
    }
    saveEmployee(request){
        return axios.post(EMPLOYEES_API_BASE_URL,request)
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEES_API_BASE_URL + '/' + id);
    }
    updateEmployee(id,employee){
        return axios.post(EMPLOYEES_API_BASE_URL + '/' + id, employee)
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEES_API_BASE_URL + '/' + id);
    }
}
let lEmployeeService = new EmployeeService();
export default lEmployeeService;