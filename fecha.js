$('#demo').daterangepicker({
    "singleDatePicker":true,
    "minDate": new Date(), // Fecha mínima es el día actual
    "locale": {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Aplicar",
        "cancelLabel": "Cancelar",
        "fromLabel": "Desde",
        "toLabel": "Hasta",
        "customRangeLabel": "Personalizado",
        "daysOfWeek": ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        "monthNames": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        "firstDay": 1
    }
}, function(start, end, label) {
    // Convertir la fecha de inicio seleccionada a un objeto Date
    var startDate = new Date(start.format('YYYY-MM-DD'));

    // Obtener la fecha actual
    var today = new Date();
    today.setHours(0, 0, 0, 0); // Asegurar que la hora esté en 00:00

    // Restar un día de la fecha seleccionada
    var previousDay = new Date(startDate);
    previousDay.setDate(previousDay.getDate() - 1); // Restar un día

    // Si la fecha anterior es menor a la fecha actual, mostrar la fecha actual
    if (previousDay < today) {
        previousDay = today;
    }

    // Formatear la fecha como DD/MM/YYYY
    var day = ("0" + previousDay.getDate()).slice(-2);
    var month = ("0" + (previousDay.getMonth() + 1)).slice(-2);
    var year = previousDay.getFullYear();
    var formattedDate = day + "/" + month + "/" + year;

    // Mostrar la fecha calculada en el input
    $('#previousDay').val(formattedDate);

    // Mensaje en la consola para verificar
    console.log('Rango de fechas seleccionado: ' + start.format('YYYY-MM-DD') + ' hasta ' + end.format('YYYY-MM-DD'));
});