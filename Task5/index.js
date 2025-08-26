

function sum0To100Array(){

    let array=[];
    let sum=0;
    for(var i=1;i<=100;i++){
        array.push(i);
    }
    for(var i=0;i<100;i++){
        if(array[i]%2==0){
        sum+=array[i];
     console.log(array[i]);}
    }
     console.log(array.slice(20,24));
  console.log(sum);

}