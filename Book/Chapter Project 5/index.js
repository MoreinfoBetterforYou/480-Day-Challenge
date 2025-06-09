let multiplicationTable = [];
let value = 15;

for (let i = 0; i <= value; i++){
    let row = [];
    for (let j = 0; j <= value; j++){
        row.push(i * j);
    }
    multiplicationTable.push(row);
}
console.table(multiplicationTable);