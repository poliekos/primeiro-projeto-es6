
class list{
   constructor(){

    
    this.data =[];

}
add(value){
    this.data.push(value);
    console.log(this.data);
}
pop(){
    this.data.pop();
    this.print();

}
print(){
 console.log(this.data);
}
}


class todoslist extends list{
 print(){
     console.log("IMprimindo todoslist");
     super.print();
 }
}

class Math{
    static soma(valueA, valueB){
        return valueA + valueB;
    }
}

const minhalista = new todoslist();
console.log(Math.soma(5,8));

const minhalista2 = new todoslist();

document.getElementById('novotodo').onclick = function(){
    minhalista.add('Antedigimon');
}
document.getElementById('remover').onclick = function(){
    minhalista.pop();
}