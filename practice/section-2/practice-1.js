'use strict';

function countSameElements(collection) {
 // 在此写代码
    var arr = [];
    var t ;
    t=0;
    let j = 1;
    for(let i = 0; i < collection.length ; i++)
    {
        
        if(collection[i]==collection[i+1])
        {
            j++;
            continue;
        }
        else
        {
            arr[t]={
                key: collection[i], 
                count: j
            }
            j=1;
            t++;
        
        }          
    }  
    return arr;
}