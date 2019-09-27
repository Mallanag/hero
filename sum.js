

// // var ar=12345;

// // for(var i=0;i<=ar.length;i++){
// //  var sum = sum+ar[i];
// //  console.log(sum);
// // }
// var value = 2568,
//     sum = 0;

// while (value) {
//     sum += value % 10;
    
//     value = Math.floor(value / 10);
// }

// console.log(sum);

// var a = [45, 79, 2, 5, 74, 4, 19, 56, 2, 888];
// var arr=a.sort(function(a,b){
//     return a-b;
// });
// s=a.length;
// console.log(s);
// console.log(arr[0],arr[s-1])
// console.log(arr[1],arr[s-2])
// console.log(arr[3],arr[s-4])

//     var a=[4,3,1,9,4]
//     var n=5;

//     var min;
//     for(var i=0;i<n-1;i++){
//         min=i;
//         for(var j=i+1;j<n;j++){
//             if(a[j]=a[min]){
//                 min=j;
//             }
//         }
//         swap(a[min],a[i]);
//     }


// function swap(a,b){
// temp=a;
// a=b;
// b=temp;
// }
// console.log(a)

// function selection_sort(A) {
//     var len =A.length;
//     for (var i = 0; i < len - 1; i = i + 1) {
//         var j_min = i;
//         for (var j = i + 1; j < len; j = j + 1) {
//             if (A[j] < A[j_min]) {
//                 j_min = j;
//             } else {}
//         }
//         if (j_min !== i) {
//             swap(A, i, j_min);
//         } else {}
//     }
//     console.log(A)
// }

// function swap(A, x, y) {
//     var temp = A[x];
//     A[x] = A[y];
//     A[y] = temp;
// }
// selection_sort([7,6,3,2,8])


 
// for(var i=0;i<br.length;i++){
    
// }
 
 
// ar=[1,3,5];
// s=[];
// d=0;
// a=0;
// for(var i=0;i<ar.length;i++){
//     d=d+ar[i];
// }
// for(var j=0;j<ar.length;j++){

//     a=d-ar[j];
//     s.push(a);

// }
// console.log(s)
//var a=[1,2,3,3,1,2,4]
var b=[]
var a=[2,4,2,3,1,3,7,4]
function non(a){
for(var i=0;i<a.length;i++)
{
for(var j=0;j<a.length;j++)
{
 if(a[i]==a[j] && i!=j) break;
 if(j==a.length-1){
     return a[i];
 } 
}
}
}
console.log(non(a))