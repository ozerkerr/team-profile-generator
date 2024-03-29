
const makeTeam = (team) => {
  const generateManagerCard = manager => {
    return  `
    <div class="card" style="width: 18rem; margin: 16px">
      <div class="card-body"  style="background-color: #8399C9;">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-title">Manager</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <a href="mailto:${manager.email}"><li class="list-group-item">Email: ${manager.email}</li></a>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
    </div>
  `
  };
  const generateEngineerCard = engineer => {
    return  `
    <div class="card" style="width: 18rem; margin: 16px">
      <div class="card-body"  style="background-color: #8399C9;">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-title">Engineer</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <a href="mailto:${engineer.email}"><li class="list-group-item">Email: ${engineer.email}</li></a>
        <a href="https://github.com/${engineer.getGithub()}" target="_blank"><li class="list-group-item">Github: ${engineer.getGithub()}</li></a>
      </ul>
    </div>
  `
  };
  const generateInternCard = intern => {
    return  `
    <div class="card" style="width: 18rem;  margin: 16px">
      <div class="card-body"  style="background-color: #8399C9;">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-title">Intern</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <a href="mailto:${intern.email}"><li class="list-group-item">Email: ${intern.email}</li></a>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  `
  };

  const hmtl = [];

  hmtl.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
  )

  hmtl.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer))
  )

  hmtl.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateInternCard(intern))
  )

  return hmtl.join("");

};

module.exports = team => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Profile Generator</title>
  </head>
  
  <body>
  
    <h1 style="height: 100px; padding-top: 16px; text-align: center; background-color: #8399C9;">TEAM PROFILE GENERATOR</h1>
    <section style="display: flex; flex-direction: row; flex-wrap: wrap; padding: 16px; justify-content: center;">
      ${makeTeam(team)}
    </section>
  
  </body>
  
  </html>`
}