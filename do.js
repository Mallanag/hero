function ImmediateNextLargestNumber(n){
    next=1
    for(var i=0;i<n.length-1;i++)
    {
      for(j=i+1;j<n.length;j++){
        if(n[i]<n[j])
        {
          console.log(n[i]+"-->"+n[j])
          break;
        }
      }
    }
    return  n[j]+"-->"+next
   }
 console.log(ImmediateNextLargestNumber([5,7,6,8,4,10,12]))