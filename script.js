var data;
/*var data = [{
    'id': '1',
    'parent': '',
    'name': 'الخطة الإستراتيجية 2018-2020'
}, {
    'id': '1.1',
    'parent': '1',
    'name': 'خدمات تقاعدية تثري تجربة المتعاملين',
}, 

 

{
    'id': '2.1',
    'parent': '1.1',
    'name': 'الرضا العام عن خدمات الصندوق',
    'value': 55
    
},
{
    'id': '2.2',
    'parent': '1.1',
    'name': 'التميز في رحلة المتعامل',
    'value': 45
},

{
    'id': '2.2.1',
    'parent': '2.2',
    'name': '% فعالية قنوات الخدمة',
    'value': 28.69
},
{
    'id': '2.2.2',
    'parent': '2.2',
    'name': '% جودة الخدمات (الوقت، الدقة)',
    'value': 16.31
},

{
    'id': '2.1.1',
    'parent': '2.1',
    'name': 'الرضا العام عن خدمات الصندوق',
    'value': 19.25
},

{
    'id': '2.1.2',
    'parent': '2.1',
    'name': 'نتيجة مركز الاتصال الحكومي',
    'value': 16.5
}, {
    'id': '2.1.3',
    'parent': '2.1',
    'name': 'نتيجة الاستبيان الحكومي',
    'value': 19.25
},

{
    'id': '2.1.1.1',
    'parent': '2.1.1',
    'name': '% الانجاز من حزمة إدارة تقنية المعلومات الخاص بالمتعامل السري',
    'value': 4.43
},

{
    'id': '2.1.1.2',
    'parent': '2.1.1',
    'name': '% الانجاز من حزمة إدارة الاتصال المؤسسي الخاص بالمتعامل السري',
    'value': 4.24
}, {
    'id': '2.1.1.3',
    'parent': '2.1.1',
    'name': 'الانجاز من حزمة دائرة المعاشات الخاص بالمتعامل السري',
    'value': 8.86
}, {
    'id': '2.1.1.4',
    'parent': '2.1.1',
    'name': 'الانجاز من حزمة وحدة الخدمات العامة الخاص بالمتعامل السري',
    'value': 1.73
},
{
    'id': '2.1.2.1',
    'parent': '2.1.2',
    'name': '% حل الحالات من أول مكالمة',
    'value': 2.48
},
{
    'id': '2.1.2.2',
    'parent': '2.1.2',
    'name': '% دقة الرد',
    'value': 3.30
},
{
    'id': '2.1.2.3',
    'parent': '2.1.2',
    'name': '% امتثال الجهة لاتفاق مستوى الخدمة',
    'value': 2.48
},
{
    'id': '2.1.2.4',
    'parent': '2.1.2',
    'name': '% مؤشر القبول',
    'value': 4.13
},
{
    'id': '2.1.2.5',
    'parent': '2.1.2',
    'name': '% متوسط فترة الرد',
    'value': 4.13
},
 {
    'id': '2.1.3.1',
    'parent': '2.1.3',
    'name': '% الانجاز من معيار توفر المعلومات',
    'value': 2.89
},
 {
    'id': '2.1.3.2',
    'parent': '2.1.3',
    'name': '% الانجاز من نتيجة معيار الوصول إلى الجهة',
    'value': 2.89
},
 {
    'id': '2.1.3.3',
    'parent': '2.1.3',
    'name': '% الانجاز من ر معيار قنوات تقديم الخدمة',
    'value': 2.89
},
 {
    'id': '2.1.3.4',
    'parent': '2.1.3',
    'name': '% الانجاز من معيار الفترة اللازمة لتقديم الخدمة',
    'value': 2.89
},
 {
    'id': '2.1.3.5',
    'parent': '2.1.3',
    'name': '% الانجاز من معيار الموظفون',
    'value': 3.85
},
 {
    'id': '2.1.3.6',
    'parent': '2.1.3',
    'name': '% الانجاز من معيار إدارة الشكاوى و المقترحات',
    'value': 3.85
},
{
    'id': '2.2.1.1',
    'parent': '2.2.1',
    'name': '% فعالية الموقع الالكتروني',
    'value': 6.75
},
{
    'id': '2.2.1.2',
    'parent': '2.2.1',
    'name': '% فعالية الموقع الالكتروني',
    'value': 3.38
},
{
    'id': '2.2.1.3',
    'parent': '2.2.1',
    'name': '% فعالية الموقع الالكتروني',
    'value': 1.69
},
{
    'id': '2.2.1.4',
    'parent': '2.2.1',
    'name': '% فعالية التطبيقات الذكية',
    'value': 5.06
},
{
    'id': '2.2.1.5',
    'parent': '2.2.1',
    'name': '% فعالية التطبيقات الذكية',
    'value': 3.38
},
{
    'id': '2.2.1.6',
    'parent': '2.2.1',
    'name': '% فعالية التطبيقات الذكية',
    'value': 3.38
},
{
    'id': '2.2.1.7',
    'parent': '2.2.1',
    'name': '% فعالية الواجهة الأمامية خدمة العملاء',
    'value': 3.38
},
{
    'id': '2.2.1.8',
    'parent': '2.2.1',
    'name': '% فعالية الواجهة الأمامية خدمة العملاء',
    'value': 1.69
},
{
    'id': '2.2.2.1',
    'parent': '2.2.2',
    'name': '% الالتزام الزمني بتقديم الخدمات',
    'value': 3.38
},
{
    'id': '2.2.2.2',
    'parent': '2.2.2',
    'name': '% الالتزام بدقة الخدمات',
    'value': 1.69
},
{
    'id': '2.2.2.3',
    'parent': '2.2.2',
    'name': '% فعالية مركز الاتصال',
    'value': 5.63
},
{
    'id': '2.2.2.4',
    'parent': '2.2.2',
    'name': '% فعالية مركز الاتصال',
    'value': 5.63
},
];
*/
// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, '#f9f9f9');
 //Highcharts.getOptions().colors.splice(1, 0, '#decbe4');
Highcharts.getOptions().colors.splice(2, 0, '#ccebc5'); 
 
/* Highcharts.setOptions({
    colors: ['#decbe4', '#decbe4', '#decbe4', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#decbe4']
});  */

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

$(".department-menu li a").click(function(){
    $(this).parents(".dropdown").find('.append-text').html($(this).find('span').text());
    $(this).parents(".dropdown").find('.append-text').val($(this).data('value'));
    if($(this).find('span').text() == "HR DEPARTMENT"){
        jQuery.getJSON('json/department-HR.json', function(_data) {
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