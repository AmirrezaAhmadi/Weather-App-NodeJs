$(document).ready(function() {
    $('#cityInput').on('input', function() {
      const query = $(this).val();
      if (query.length > 2) {
        $.ajax({
          url: '/autocomplete',
          data: { city: query },
          success: function(data) {
            let suggestions = '';
            data.forEach(city => {
              suggestions += `<li class="suggestion-item">${city.name}, ${city.country}</li>`;
            });
            $('#suggestions').html(suggestions).show();
          },
          error: function() {
            $('#suggestions').html('<li>Error fetching suggestions</li>').show();
          }
        });
      } else {
        $('#suggestions').html('').hide();
      }
    });
  
    $(document).on('click', '.suggestion-item', function() {
      $('#cityInput').val($(this).text());
      $('#suggestions').html('').hide();
    });
  });
  