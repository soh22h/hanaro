const commands = [
    "addEmployee 1 101 'Alice'",
    "addEmployee 1 102 'Bob'",
    "addEmployee 1 103 'Alice'", // 중복 이름
    "addEmployee 2 201 'Charlie'",
    "addEmployee 2 202 'Alice'", // 다른 부서에 같은 이름
    "removeDuplicates 1",
    "getEmployees 1",
    "getEmployees 2"
];

let employees = [];

function manageEmployees(command) {
    const [c, deptID, empID = '', empName = ''] = command.split(' ');

    if(c == 'addEmployee') {
        let employeeInfo = {deptID: parseInt(deptID), empID : parseInt(empID), empName : empName};
        employees.push(employeeInfo);
    } else if(c == 'removeDuplicates') {
        const set = new Set();
        let empNames = employees.filter((e) => e.deptID == parseInt(deptID)).map((e) => {
            set.has(e.empName) ? employees. set.add(e.empName)
        });
        // let duplicatedNames = empNames - [... new Set(empNames)];
    } else if(c == 'getEmployees') {
        return [... employees.filter((e) => e.deptID == parseInt(deptID)).map((e) => e.empName)]
    } else {
        return;
    }
}

commands.forEach((c) => {
    console.log(manageEmployees(c));
    console.log(employees);
});



// function manageEmployees(commands) {
//     const departments = new Map();

//     for (let command of commands) {
//         const [action, deptID, empID, empName] = command.match(/(\w+)\s+(\d+)\s+(\d+)?\s*'?(.*?)'?$/).slice(1);
//         const departmentID = parseInt(deptID);

//         if (action === "addEmployee") {
//             const employeeName = empName;
//             if (!departments.has(departmentID)) {
//                 departments.set(departmentID, new Set());
//             }
//             departments.get(departmentID).add(employeeName);
//         } else if (action === "removeDuplicates") {
//             if (departments.has(departmentID)) {
//                 const uniqueNames = new Set(departments.get(departmentID));
//                 departments.set(departmentID, uniqueNames);
//             }
//         } else if (action === "getEmployees") {
//             if (departments.has(departmentID)) {
//                 departments.set(departmentID, Array.from(departments.get(departmentID)));
//             }
//         }
//     }

//     const result = {};
//     for (let [deptID, employees] of departments.entries()) {
//         result[`department${deptID}`] = Array.from(employees);
//     }
    
//     return result;
// }