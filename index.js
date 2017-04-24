function getData(){
    var endpoint = 'https://controllerdata.lacity.org/resource/f3p3-3myx.json'
    
   fetch(endpoint)
    .then(function(data){
        return data.json()
    }) // turn data into JSOn
    .then(function(json){
        console.log(json)
        var finalHTML = ''
        json.forEach(function(item){
            var cardItem = `
                    <div class="col s6 m4">
                      <div class="card">
                        <div class="card-image">
                          <img src="http://www.thebluediamondgallery.com/wooden-tile/images/salary.jpg">
                          <span class="card-title">${item.department_title}</span>
                        </div>
                        <div class="card-content">
                          <p>
                  
                           The average salary for males  is ${item.male_average_salary}
                            and the female average salary is ${item.female_average_salary}
                          </p>
                        </div>
                        <div class="card-action">
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                    </div>
            `
            finalHTML += cardItem
        })
        
       var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
    }) // do something with data
    .catch(function(error){
        console.log(error)
    }) // catch any errors
}