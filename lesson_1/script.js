const student = {
  name: "Anna",
  age: 20,
  city: "Yerevan",
  skills: ["HTML", "CSS", "JavaScript"]
};

function getStudentInfo(student) {
  const  {name, age, city, skills}  = student
  const status = age >= 18 ? "Adult" : "Minor"
  console.log(`${name} is ${age} years old and lives in ${city}. Status: ${status}`)
  skills.includes("React") ? console.log("Doesn't know React") : console.log("Knows React")
}

getStudentInfo(student)