
//HackerRank

function compareTriplets(a: number[], b: number[]): number[] {
  let bobPoints = 0
  let alicePoints = 0
  
  for(let i = 0; i < a.length; i++){
      if(a[i] > b[i]){
          alicePoints++
      }
      
      if(a[i] < b[i]){
          bobPoints++
      }
  }
  
  return [alicePoints, bobPoints]
}