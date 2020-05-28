
  
  
  function animalSearch() {

    function httpGetAsync(theUrl, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.responseText);
        }
      };
      xmlHttp.open('GET', theUrl, true);
      xmlHttp.send(null);
      return;
    }
  
    function imgCallback(responseText) {
      var response = JSON.parse(responseText);
      const div = document.getElementById('root');
      
      div.innerHTML = "";
      for (var i = 0; i <= 30; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', response.results[i].media[0].gif.url);
        div.appendChild(img);
      }
  
      return;
    }
    
    var search_term = document.getElementById('input'); 
    
    const search_url = `https://api.tenor.com/v1/search?q=${search_term.value}&key=LIVDSRZULELA&limit=30`;

    httpGetAsync(search_url, imgCallback);
    search_term = '';
    
  }