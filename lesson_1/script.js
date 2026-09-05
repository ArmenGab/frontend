const student = {
  name: "Anna",
  age: 20,
  city: "Yerevan",
  skills: ["HTML", "CSS", "JavaScript"]
};

const getStudentInfo = (student) => {
  let {name, age, city, skills}  = student
  let status = age >= 18 ? "Adult" : "Minor"
  console.log(`${name} is ${age} years old and lives in ${city}. Status: ${status}`)
  skills.includes("React") ? console.log("Knows React") : console.log("Doesn't know React")
}

getStudentInfo(student)