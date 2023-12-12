document.addEventListener('DOMContentLoaded', function() {
    // init burger menu
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // init date picker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: 'dd mmmm, yy',
      i18: {
        done: 'Select'
      }
    });

    // select init
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // callapsible init
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });