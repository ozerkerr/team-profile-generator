
const makeTeam = (team) => {
  const generateManagerCard = manager => {
    return  `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <a href="mailto:${manager.email}"><li class="list-group-item">${manager.email}</li></a>
        <li class="list-group-item">${manager.OfficeNum}</li>
      </ul>
    </div>
  `
  };

  const hmtl = [];

  hmtl.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
  )

  return hmtl.join("");

  module.exports = teamHtml => {
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
    
      <h1>TEAM PROFILE GENERATOR</h1>
      <div>
        ${makeTeam(team)}
      </div>
    
    </body>
    
    </html>`
  }
};