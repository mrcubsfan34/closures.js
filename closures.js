function retirement(retirementAge) {
   var a = ' years left until retirement';
   return function(yearOfBirth) {
      var age = 2018 - yearOfBirth;
      console.log((retirementAge - age) + a);
   }
}

var retirementUS = retirement(65);
retirement(1982);

var retirementGermany = retirement(66);
retirement(1976);

var retirementIceland = retirement(67);
retirement(1979);

retirementUS(1982);
retirementGermany(1976);
retirementIceland(1979);








