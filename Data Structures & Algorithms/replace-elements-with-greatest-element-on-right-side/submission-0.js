class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let arrMax=-1;
     
        for(let i=arr.length-1;i>=0;i--){
            const currentArr=arr[i];
            arr[i]=arrMax;
            arrMax=Math.max(currentArr,arrMax);
           

        }
        return arr;
    }
}
