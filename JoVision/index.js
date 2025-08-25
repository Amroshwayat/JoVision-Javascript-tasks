

function sum0To100Array(){

    let array=[];
    let sum=0;
    for(var i=1;i<=100;i++){
        array.push(i);
    }
    for(var i=0;i<100;i++){
        sum+=array[i];
    }
  console.log(sum);

}