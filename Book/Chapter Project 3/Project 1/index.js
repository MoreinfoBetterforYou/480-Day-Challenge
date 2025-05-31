const theList = ['Laurence', "Svekis", true, 35, null, undefined, {
    test: "one",
    score: 55
}, ["one", "two"]];
theList.pop();
theList.shift();
theList.unshift("First");
theList[4] = "hello World";
theList[3] = "MIDDLE";
theList.push("LAST");
theList.splice(2, 1);
theList.splice(4, 2);
console.log(theList);