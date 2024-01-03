
const obj = {
    a: 10, 
    x: () => {
        console.log(this);
    },
}
obj.x();

const obj2 = {
    a: 10, 
    x: function (){
        const y = () =>{
            console.log(this);
        }
        y();
    }
}
obj2.x();