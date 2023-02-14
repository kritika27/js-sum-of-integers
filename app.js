//Implement a JS function that takes a list of integers and a target number as input, 
 //and returns a array of two integers that add up to the target number.

 let a=[7,2,3,4,8,0];
 let target=6;
 
 //sort the array
 //break the array into less than target number
 
 let arr=a.sort((a,b)=>a>b?1:-1);
 
 console.log(arr);
 let finalArr=[];
 for(let i=0;i<=arr.length-1;i++)
   {
     if(arr[i]<target)
       {
         finalArr.push(arr[i]);
       }
   }
 console.log(finalArr);
 
 let sum=0;
 let result=[];
 for(let i=0;i<=finalArr.length-1;i++)
   {
     if(sum>0 && sum<=target && finalArr[i]!==0)
       {
     sum=sum+ finalArr[i];
     if(sum===target)
       result.push(finalArr[i]);
       }
     
   }
   console.log(result);

