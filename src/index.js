module.exports = function longestConsecutiveLength(array) {

    if (array.length == 0) return 0;

    const searcharray = new Set(array);
    let max = 1;
    let startlm = 0;
    const setelem = new Set();

    for (let key of searcharray) {
        if (!searcharray.has(key-1) && searcharray.has(key+1)) setelem.add(key);
    }

    if (setelem.length == 0) return 1;
    
    for (let key of setelem) {
    	startlm = key;                 
        let endlm   = startlm;          
        while(searcharray.has(endlm)){
            endlm++;                  
        }
        if(max > endlm-startlm){
        	 max = max;
        }else{
        	 max = endlm-startlm;
        }
      } 
   return max;
}