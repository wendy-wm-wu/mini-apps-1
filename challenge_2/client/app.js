/////////////AJAX///////////////
function postData(options) {
  $.ajax({
    url: '/upload_json',
    method: 'POST',
    success: (data) => {
      $('form').on('submit', function(e) {
        e.preventDefault(); 
      }); 
      $('#input-box').append(data);
      console.log('success')},
    error: (data) => console.log('Error in retreiving', data)
  }); 
}

//preventing page reload// 

