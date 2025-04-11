function generarCalendario(mes, año) {
  const diasMes = document.getElementById('dias-mes');
  const tituloMes = document.getElementById('mes');

  const nombresMeses = [
    'ENERO', 'FEBRERO', 'MARZO', 'ABRIL',
    'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
    'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
  ];

  tituloMes.textContent = nombresMeses[mes];

  diasMes.innerHTML = '';

  const primerDia = new Date(año, mes, 1).getDay();
  const totalDias = new Date(año, mes + 1, 0).getDate();

  for (let i = 0; i < primerDia; i++) {
    diasMes.innerHTML += '<div></div>';
  }

  for (let dia = 1; dia <= totalDias; dia++) {
    diasMes.innerHTML += <div>${dia}</div>;
  }
}

generarCalendario(1, 2025); // 1 = febrero
