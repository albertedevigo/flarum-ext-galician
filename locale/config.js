moment.locale('gl', {
	months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	monthsShort : 'Xan_Feb_Mar_Abr_Mai_Xun_Xul_Ago_Set_Out_Nov_Dec'.split('_'),
	weekdays : 'Domingo_Segunda-Feira_Terza-Feira_Cuarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	weekdaysShort : 'Dom_Seg_Ter_Cua_Qui_Sex_Sáb'.split('_'),
	weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	longDateFormat : {
		LT : 'HH:mm',
		LTS : 'HH:mm:ss',
		L : 'DD/MM/YYYY',
		LL : 'D [de] MMMM [de] YYYY',
		LLL : 'D [de] MMMM [de] YYYY [ás] HH:mm',
		LLLL : 'dddd, D [de] MMMM [de] YYYY [ás] HH:mm'
	},
	calendar : {
		sameDay: '[Hoxe ás] LT',
		nextDay: '[Mañá ás] LT',
		nextWeek: 'dddd [ás] LT',
		lastDay: '[Onte ás] LT',
		lastWeek: function () {
		return (this.day() === 0 || this.day() === 6) ?
		'[Último] dddd [ás] LT' : // Saturday + Sunday
		'[Última] dddd [ás] LT'; // Monday - Friday
	},
	sameElse: 'L'
	},
	relativeTime : {
		future : 'en %s',
		past : 'fai %s',
		s : 'poucos segundos',
		m : 'un minuto',
		mm : '%d minutos',
		h : 'unha hora',
		hh : '%d horas',
		d : 'un día',
		dd : '%d días',
		M : 'un mes',
		MM : '%d meses',
		y : 'un ano',
		yy : '%d anos'
	},
	ordinalParse: /\d{1,2}º/,
	ordinal : '%dº'
});
