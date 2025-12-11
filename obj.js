var object={emp_id:101,emp_name:"mahesh",designation:"jr.software engineer",salary:15000};
var obj2=object.years_of_exp=2;
document.write(obj2);
document.write(object.years_of_exp);
object.emp_id=102;
document.write(object.emp_id);
document.write("------------");
delete object.salary;
document.write(object.salary);
