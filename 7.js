const userMap = new Map();

function add(name, age, email){
    userMap.set(name, { age, email });
}
function update(name, age, email) {
    if (userMap.has(name)) {
        userMap.get(name).age = age;
        userMap.get(name).email = email;
    }
}
function deleteRecord(name) {
    userMap.delete(name);
}

add("Pritam", 20, "abc@gmail.com");
add("Avi", 21, "xyz@gmail.com");
console.log(userMap);

update("Pritam", 21, "cba@gmai.com");
console.log(userMap);

deleteRecord("Avi");
console.log(userMap);
