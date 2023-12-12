document.addEventListener('DOMContentLoaded', function() {
    // init burger menu
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, options);

    // init date picker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: 'dd mm, yy',
      i18: {
        done: 'Select'
      }
    });

    // select init
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
  });