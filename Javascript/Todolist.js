let command = prompt('what would you like to do?');
const arr = [];
while (command !== 'quit') {
    if (command == 'new') {
        let add = prompt('enter a new todo');
        arr.push(add);
        console.log(`${add} added to the list`);
    } else if (command == 'list') {
        console.log('*********');
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i} : ${arr[i]}`);
        }
        console.log('*********');
    } else if (command == 'delete') {
        const del = parseInt(prompt('enter the index that you want to delete'));
        if (!Number.isNaN(del)) {
            arr.splice(del, 1);
        } else {
            console.log('Unknow index');
        }
    }
    command = prompt('what would you like to do?');
}
console.log('OK, YOU QUIT OUT OF THE APP');
