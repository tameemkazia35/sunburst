var data;

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, '#f9f9f9');
 //Highcharts.getOptions().colors.splice(1, 0, '#decbe4');
Highcharts.getOptions().colors.splice(2, 0, '#ccebc5'); 
 
/* Highcharts.setOptions({
    colors: ['#decbe4', '#decbe4', '#decbe4', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#decbe4']
});  */

var TPD_emp = [{dataId:'department-TPD-Abdulaziz_alrashdi', name:'Abdulaziz Alrashdi', filename:'department-TPD-Abdulaziz_alrashdi.json'},
{dataId:'department-TPD-Aida_almansouri', name:'Aida Almansouri', filename:'department-TPD-Aida_almansouri.json'},
{dataId:'department-TPD-Ali_Almushgri', name:'Ali Almushgri', filename:'department-TPD-Ali_Almushgri.json'},
{dataId:'department-TPD-Essa_alzaabi', name:'Essa Alzaabi', filename:'department-TPD-Essa_alzaabi.json'},
{dataId:'department-TPD-Mariam_Almazroui', name:'Mariam Almazroui', filename:'department-TPD-Mariam_Almazroui.json'},
{dataId:'department-TPD-Mubarak_Alhumairi', name:'Mubarak Alhumairi', filename:'department-TPD-Mubarak_Alhumairi.json'},
{dataId:'department-TPD-Noura_AlKhalili', name:'Noura AlKhalili', filename:'department-TPD-Noura_AlKhalili.json'},
{dataId:'department-TPD-Reem_Alzaabi', name:'Reem Alzaabi', filename:'department-TPD-Reem_Alzaabi.json'},
{dataId:'department-TPD-Safiya_Alhamadi', name:'Safiya Alhamadi', filename:'department-TPD-Safiya_Alhamadi.json'},
{dataId:'department-TPD-Saif_Aldahri', name:'Saif Aldahri', filename:'department-TPD-Saif_Aldahri.json'},
{dataId:'department-TPD-Saleh_Alburaiki', name:'Saleh Alburaiki', filename:'department-TPD-Saleh_Alburaiki.json'},
{dataId:'department-TPD-Suhail_almazroui', name:'Suhail Almazroui', filename:'department-TPD-Suhail_almazroui.json'},
{dataId:'department-TPD-Shama_Almansouri', name:'Shama Almansouri', filename:'department-TPD-Shama_Almansouri.json'}
];

 var defaultJson = 'json/orgnization.json';
 jQuery.getJSON(defaultJson, function(_data) {
               //data = _data;
			   
               renderChart(_data);
 });

 function renderChart(data){
              // var chart = new Highcharts.Chart(options);
			  var chart = Highcharts.chart('container', {

    chart: {
        height: '100%'
    },

    title: {
        text: 'الخطة الإستراتيجية 2018-2020',
        style: {
            fontSize:10
        }
    },
    subtitle: {
        text: ''
    },
  
    series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.id}',
            style: {
                fontWeight: 'light',
                textOutline: 0,
                fontSize: 8
            },
            rotationMode: 'vertical',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 10
            }
        },
        levels: [{
            level: 1,

            levelIsConstant: false,
            dataLabels: {
                format: '{point.name}',
                rotationMode: 'parallel',
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 64
                }
            }
        }, {
            level: 2,
            colorByPoint: true,
            // dataLabels:{
            //     rotationMode: 'parallel',
            // }
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            }
        }, {
            level: 4,
            //color: '#ccebc5',
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
        }]

    }],
    // navigation: {
    //     buttonOptions: {
            
    //         theme: {
    //             id:'myButton',
    //             'stroke-width': 1,
    //             stroke: 'silver',
    //             r: 0,
    //             states: {
    //                 hover: {
    //                     fill: '#a4edba'
    //                 },
    //                 select: {
    //                     stroke: '#039',
    //                     fill: '#a4edba'
    //                 }
    //             }
    //         }
    //     }
    // },

    tooltip: {
        headerFormat: "",
        pointFormat: '<b>{point.name}</b> is <b>{point.value} %</b>'
    }
});
}

			

$("#btnPrint").on('click', function (event) {

    chart.print();

});

$("#btnJpeg").on('click', function (event) {
    chart.exportChart({
        type: "image/jpeg"
    });
});

$("#btnPng").on('click', function (event) {
    chart.exportChart({
        type: "image/png"
    });
});

$("#btnPdf").on('click', function (event) {
    chart.exportChart({
        type: "application/pdf"
    });
});

$("#btnSvg").on('click', function (event) {
    chart.exportChart({
        type: "application/svg"
    });
});

$(document).on('click',".emp-menu li a", function(){
	 $(this).parents(".dropdown").find('.append-text').html($(this).find('span').text());
    $(this).parents(".dropdown").find('.append-text').val($(this).data('value'));
	debugger;
	var _jsonURL =  'json/emp/'+$(this).attr('data-value')+'.json';
	jQuery.getJSON(_jsonURL, function(_data) {
            //data = _data;
            renderChart(_data);
});
});

$(".department-menu li a").click(function(){
	$('.department-emp').css('display','none');
    $(this).parents(".dropdown").find('.append-text').html($(this).find('span').text());
    $(this).parents(".dropdown").find('.append-text').val($(this).data('value'));
    if($(this).find('span').text() == "HR DEPARTMENT"){
        jQuery.getJSON('json/department-HR.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "IT DEPARTMENT"){
        jQuery.getJSON('json/department-IT.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	
	
	if($(this).find('span').text() == "ECD DEPARTMENT"){
        jQuery.getJSON('json/department-ECD.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "CHD DEPARTMENT"){
        jQuery.getJSON('json/department-CHD.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "LEG DEPARTMENT"){
        jQuery.getJSON('json/department-LEG.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "FINANCE DEPARTMENT"){
        jQuery.getJSON('json/department-Finance.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "HSE DEPARTMENT"){
        jQuery.getJSON('json/department-HSE.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "RSS DEPARTMENT"){
        jQuery.getJSON('json/department-RSS.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "BED DEPARTMENT"){
        jQuery.getJSON('json/department-BED.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "PC GS DEPARTMENT"){
        jQuery.getJSON('json/department-PCGS.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	
	if($(this).find('span').text() == "CCD DEPARTMENT"){
        jQuery.getJSON('json/department-CCD.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	if($(this).find('span').text() == "AAM DEPARTMENT"){
        jQuery.getJSON('json/department-AAM.json', function(_data) {
            //data = _data;
            renderChart(_data);
});
    }
	
	if($(this).find('span').text() == "TPD DEPARTMENT"){
        jQuery.getJSON('json/department-TPD.json', function(_data) {
			if(TPD_emp.length > 0){
				$('.department-emp').css('display','inline-flex');
				var _html = '';
				for(i = 0; i < TPD_emp.length; i++){
					_html = _html + "<li><a class='dropdown-item' href='#' data-value='"+TPD_emp[i].dataId+"'><span>"+TPD_emp[i].name+"</span><br><small>TPD Department Board</small></a></li>";
				}
				$('.emp-menu').append(_html);
			}
            //data = _data;
            renderChart(_data);
});
    }
  });


  function gotoorg(){
    var defaultJson = 'json/orgnization.json';
    jQuery.getJSON(defaultJson, function(_data) {
                  //data = _data;
                  renderChart(_data);
                  $(this).parents(".dropdown").find('.append-text').val('Objectives');
    });
  };