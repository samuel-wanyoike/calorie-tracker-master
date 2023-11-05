const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   // write logic here 


   calories_burnt_weekly = (2*parseInt(cycling)) + (2*parseInt(running)) + (2*parseInt(swimming))
   calories_burnt_monthly = calories_burnt_weekly * 4;
   calories_gained_monthly = (30*parseInt(extraCalorieInTake));

   netCaloriesLost = calories_burnt_monthly - calories_gained_monthly


   let calories_into_pound = 1000;


   weightLostInAMonth = netCaloriesLost/calories_into_pound;

   if (running === 0 && swimming === 0) {
     
      weightLostInAMonth = -1;
   }

   return weightLostInAMonth;
   
}



module.exports = calculateWeightLostInAMonth


