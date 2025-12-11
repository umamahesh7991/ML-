var object={emp_id:101,emp_name:"mahesh",designation:"jr.software engineer",salary:15000};
var obj2=object.years_of_exp=2;
document.write(obj2);
document.write(object.years_of_exp);
object.emp_id=102;
document.write(object.emp_id);
document.write("------------");
delete object.salary;
document.write(object.salary);
var address={
    d_no:13-24-3,
    location: {
        street:"bhanoji colony",
        city:"visakhapatnam",
        state:"andhra pradesh"
    },
    pincode:530026,
    wish:function f1(){
        document.write("Welcome to home town");
    },
};
//  var fcall=address.wish();
var fcall=address["wish"]();
var f1=address["location"]["city"];
// document.write(address.location.city);
document.write(f1);
// document.write("------------ ");
// document.write(fcall);
