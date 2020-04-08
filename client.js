const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

//Processing Employee Bonuses
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

//Function Logic
let checkEmployee = [];
function eachEmployee(number) {
  let bonusPercentage = 0;
  let totalBonus = 0;
  if (employees[number].reviewRating <= 2) {
    console.log(employees[number].name, 'No bonus');
  } else if (employees[number].reviewRating === 3) {
    console.log(employees[number].name, ' receive a base bonus of 4%');
    console.log(bonusPercentage += 0.04);
  } else if (employees[number].reviewRating === 4) {
    console.log(employees[number].name, 'receive a base bonus of 6%');
    console.log(bonusPercentage += 0.06);
  } else if (employees[number].reviewRating === 5) {
    console.log(employees[number].name, 'receive a base bonus of 10%');
    console.log(bonusPercentage += 0.1);
  }
  if (employees[number].employeeNumber.length === 4) {
    console.log(employees[number].name, 'receive a base bonus of 5%');
    console.log(bonusPercentage += 0.05);
  }
  if (employees[number].annualSalary > 65000) {
    console.log(employees[number].name, 'bonus down 1%');
    console.log(bonusPercentage -= 0.01);
  }

  totalBonus = bonusPercentage;
  console.log('Total bonus of ' + employees[number].name + ' is: ' + totalBonus)

  if (bonusPercentage > 0.13) {
    console.log(employees[number].name, 'bonus is > 13% ');
    console.log(employees[number].name, 'bonus now: ', bonusPercentage = 0.13);
  }
  if (bonusPercentage < 0) {
    console.log(employees[number].name, 'bonus is < 0 ');
    console.log(employees[number].name, 'bonus now: ', bonusPercentage = 0);
  }

  let compensation = Number(employees[number].annualSalary) + Number(bonusPercentage * employees[number].annualSalary);
  console.log('Total compensation is: ', compensation)

  employee = {
    name: employees[number].name,
    bonusPercentage: bonusPercentage,
    totalCompensation: compensation,
    totalBonus: totalBonus,
  }
  checkEmployee.push(employee);

  return employee;


}//end eachEmployee
eachEmployee(1);
console.log(checkEmployee);


