// CLoser

// // PRACTICAL - 1
// var function1 = ()=>{
//     count = 0;
//     return ()=>{
//         count++;
//         console.log(count);
//     }
// }
// var f = function1()
// f()
// f()
// f()
// f()
// f()
// f()



// Practical 2
var statemanegment = (name)=>{

    return {
        name: ()=>{
            return name;
        },
        setname: (nm)=>{
            name = nm;
        }
    }
}

var {name , setname} = statemanegment("Ashu");

console.log(name());
setname("ruppu");
console.log(name());
