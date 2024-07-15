const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	let res=[]
	let sum=0
	for(let i=0;i<arr.length;i++){
		sum=sum+arr[i]
		if(sum>n){
			ans.push(res)
			sum=arr[i]
			res=[]
		}
		res.push(arr[i])	
	}
	ans.push(res)
	return ans
};

const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
