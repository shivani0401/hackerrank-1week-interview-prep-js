function truckTour(petrolpumps) {
    let start = 0;
   let petrol = 0;
   let distance = 0;
 
   for (let i = 0; i < petrolpumps.length; i++) {
     petrol += petrolpumps[i][0] - petrolpumps[i][1];
     distance += petrolpumps[i][0] - petrolpumps[i][1];
 
     // If the current petrol becomes negative, it means the truck cannot start from the current petrol pump.
     // In that case, move the starting point to the next petrol pump and reset petrol and distance.
     if (petrol < 0) {
       start = i + 1;
       petrol = 0;
       distance = 0;
     }
   }
 
   // If the total distance covered is greater than or equal to 0, return the starting point.
   // Otherwise, return -1 (indicating no possible starting point).
   return distance >= 0 ? start : -1;
 }