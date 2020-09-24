'use strict';

function countSameElements(collection) {
// 在此写代码
    var str = [];
    var n=1;
    for(let i = 0; i < collection.length ; i++)
    {   
        if(collection[i].length!=1)
        {
            let s = collection[i]
            str[str.length] = collection[i];
            collection[i] = s[0];
            n++;
        }
    }

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
     
    for(let i = 0; i < str.length ; i++)
    {
        var c = str[i].split('-');
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j].key == c[0])
            {
                let n = arr[j].count
                arr[j].count = parseInt(c[1])+ n - 1;
            }
        }     
    }
    return arr;
}
