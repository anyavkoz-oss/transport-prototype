'use strict';
// One data profile per research link. No account, tracking, or cross-profile storage.
const participantProfiles={
  '01':{
    // Future profiles inherit a scheduled service that becomes briefly delayed.
    scheduleDelay:{serviceId:0},
    label:'Участник 01',city:'Санкт-Петербург',address:'Улица Маркина, 16А',
    favoriteStop:'Улица Воскова',map:'participant-01-map.png',mapSize:[1828,1440],
    origin:[1145,476],stopNames:['Улица Воскова','Введенская улица','Улица Шамшева'],
    platforms:[[789,625],[806,786],[446,223]],
    walks:[
      [[1145,476],[1122,449],[1070,508],[1005,581],[938,647],[881,697],[791,681],[789,625]],
      [[1145,476],[1122,449],[1070,508],[1005,581],[938,647],[881,697],[804,738],[806,786]],
      [[1145,476],[1122,449],[1180,377],[984,288],[923,329],[815,324],[800,344],[632,325],[462,304],[446,223]]
    ],
    // Geometry is registered to the supplied map; walking/arrival times are fixtures.
    meters:[410,480,670],
    services:[
      {n:'14',to:'метро Выборгская',stop:0,first:95,gap:480},
      {n:'230',to:'станции Пискарёвка',stop:0,first:35,gap:660},
      ...[['10','Крестовского острова'],['14','Крестовского острова'],['25','метро Чёрная речка'],['128','сквера Столыпина'],['227','Арцеуловской аллеи'],['249','станции Ручьи'],['275','улицы Жени Егоровой']].map(([n,to],i)=>({n,to,stop:1,first:60+i*65,gap:600+i*30})),
      ...[['10','Балтийского вокзала'],['14','метро Выборгская'],['25','Крестовского острова'],['128','Наличной улицы'],['185','метро Чкаловская'],['227','Крестовского острова'],['230','Уральской улицы'],['249','метро Приморская'],['275','метро Василеостровская']].map(([n,to],i)=>({n,to,stop:2,first:45+i*55,gap:600+i*30}))
    ],
    roadPaths:[
      [[755,1440],[780,1050],[793,880],[789,625],[803,350],[821,0]],
      [[800,0],[785,350],[778,620],[781,786],[768,880],[744,1440]],
      [[483,0],[462,125],[446,223],[445,400],[445,680],[438,1440]]
    ],
    sources:[
      'https://yandex.ru/maps/2/saint-petersburg/stops/4678552723/',
      'https://yandex.ru/maps/2/saint-petersburg/stops/stop__10066439/',
      'https://yandex.ru/maps/2/saint-petersburg/stops/stop__10077284/'
    ]
  }
};
// Respondent 1 has an isolated pair of locations; arrival times remain research fixtures.
participantProfiles['respondent-01']={
  label:'Респондент 1',city:'Зеленоград',address:'Зеленоград, к1126',restrictAddresses:true,
  favoriteStop:'Московская государственная академия делового администрирования',favoriteByDefault:false,frequentStopIndex:1,rowPreviewFrequentStops:[0],
  map:'respondent-01-zelenograd-map.png',mapSize:[1850,1502],origin:[888,110],
  mapExtension:{file:'respondent-01-zelenograd-extension.svg',bounds:[[-1800,-1600],[3800,3100]]},
  stopNames:['Улица Болдов Ручей','Московская государственная академия делового администрирования','Филаретовская улица'],
  stopShortNames:['Улица Болдов Ручей',null,'Филаретовская улица'],platforms:[[1380,465],[625,1010],[1785,1185]],
  walks:[
    [[888,110],[888,220],[1015,247],[1175,320],[1340,350],[1370,410],[1380,465]],
    [[888,110],[850,172],[790,240],[710,320],[650,550],[680,700],[730,950],[625,1010]],
    [[888,110],[888,220],[1015,247],[1175,320],[1340,350],[1370,410],[1380,465],[1400,650],[1440,880],[1460,1145],[1680,1160],[1785,1185]]
  ],meters:[400,650,1000],
  services:[
    {n:'4',to:'улицы Болдов Ручей',stop:0,first:35,gap:105,scheduleOnly:false},
    {n:'4',to:'улицы Болдов Ручей',stop:0,first:170,gap:180,scheduleOnly:true},
    {n:'4',to:'улицы Болдов Ручей',stop:1,first:45,gap:150,scheduleOnly:false},
    {n:'9',to:'МЦД Зеленоград-Крюково',stop:1,first:110,gap:180,scheduleOnly:false},
    {n:'9',to:'МЦД Зеленоград-Крюково',stop:1,first:180,gap:180,scheduleOnly:true},
    {n:'11',to:'Северной',stop:2,first:45,gap:150,scheduleOnly:false},
    {n:'29',to:'МЦД Зеленоград-Крюково · 8A',stop:2,first:110,gap:180,scheduleOnly:false},
    {n:'11',to:'Северной',stop:2,first:180,gap:180,scheduleOnly:true}
  ],
  stopWaypoints:[3,3,3],roadPaths:[
    [[1460,1180],[1440,880],[1400,650],[1380,465],[1370,370],[1450,220],[1640,0]],
    [[0,1370],[200,1260],[450,1120],[625,1010],[800,990],[1150,1100],[1460,1180],[1850,1190]],
    [[625,1010],[1150,1100],[1510,1170],[1785,1185],[1950,1190],[2100,1250]]
  ],sources:['https://yandex.ru/maps/213/moscow/stops/stop__9650012/','https://yandex.ru/maps/213/moscow/stops/stop__9650010/','https://yandex.ru/maps/213/moscow/stops/stop__9650068/'],
  alternate:{
    city:'Заречье, Московская область',address:'Торговая улица, с2',frequentStopIndex:-1,pinBelowStops:[0],
    nearestMetro:{name:'Говорово',line:'Солнцевская линия',badge:'8А',color:'#ffc61a',pos:[548.93,1132.994],source:'https://yandex.com/maps/org/gudrufing_krovlya_fasady/1134625903/?lang=ru'},
    map:'respondent-01-zarechye-map.png',mapSize:[2758,1482],origin:[2010,720],
    stopNames:['Торговый центр','Заречье-парк · к Яблоневому саду','Заречье-парк · к метро Кунцевская'],
    stopShortNames:['Торговый центр','Заречье-парк','Заречье-парк'],
    stopHints:['','',''],
    platforms:[[2054,783],[997,715],[892,609]],
    walks:[
      [[2010,720],[2010,758],[2054,783]],
      [[2010,720],[2010,758],[1820,815],[1640,850],[1560,915],[1350,800],[1100,720],[997,715]],
      [[2010,720],[2010,758],[1820,815],[1640,850],[1560,915],[1350,800],[1100,720],[997,715],[940,660],[892,609]]
    ],meters:[70,540,560],
    services:[
      {n:'205',to:'Яблоневого сада',stop:0,first:35,gap:120,scheduleOnly:false},
      {n:'205',to:'метро Кунцевская',stop:0,first:105,gap:180,scheduleOnly:false},
      {n:'205',to:'Яблоневого сада',stop:0,first:170,gap:180,scheduleOnly:true},
      {n:'205',to:'Яблоневого сада',stop:1,first:35,gap:150,scheduleOnly:false},
      {n:'Sk3',to:'метро Говорово',stop:1,first:105,gap:180,scheduleOnly:false},
      {n:'205',to:'Яблоневого сада',stop:1,first:170,gap:180,scheduleOnly:true},
      {n:'205',to:'метро Кунцевская',stop:2,first:40,gap:150,scheduleOnly:false},
      {n:'Sk3',to:'ТМК',stop:2,first:110,gap:180,scheduleOnly:false},
      {n:'205',to:'метро Кунцевская',stop:2,first:175,gap:180,scheduleOnly:true}
    ],stopWaypoints:[3,3,3],roadPaths:[
      [[1450,965],[1640,850],[1820,815],[2054,783],[2170,760],[2220,620],[2190,400]],
      [[0,540],[400,570],[750,645],[997,715],[1300,805],[1580,950],[1750,1130]],
      [[1750,1110],[1430,850],[1130,690],[892,609],[550,535],[0,500]]
    ],
    sources:["https://yandex.ru/maps/21653/zarech'e/stops/stop__9650492/","https://yandex.ru/maps/21653/zarech'e/stops/6113272335/","https://yandex.ru/maps/21653/zarech'e/stops/6924743814/"]
  }
};
// Torgovaya detail cards from the participant's 21 October screenshots.
// Arrival-board services/directions remain separate from these route details.
{
  const p=participantProfiles['respondent-01'].alternate;
  for(const r of p.services){
    if(r.n==='205'&&r.to==='Яблоневого сада'){
      r.routeHeading=['Метро Кунцевская · 1А_1В','Яблоневый сад'];
      r.routeOverview=[{name:'Метро Кунцевская · 1А_1В'},{skipped:20},{name:'Заречье-парк'},
        {name:'Торговый центр',minute:0},{name:'Апелляционный суд',minute:3},{skipped:5},
        {name:'МЦД Аминьевская · 2А',minute:11},{name:'Яблоневый сад',minute:13}];
    }else if(r.n==='205'){
      r.routeHeading=['Яблоневый сад','Метро Кунцевская · 1С'];
      r.routeOverview=[{name:'Яблоневый сад'},{name:'Метро Аминьевская · 3А'},{name:'ТЭЦ № 25'},
        {name:'Стройуправление ТЭЦ № 25'},{name:'Промзона Очаково'},{name:'Апелляционный суд'},
        {name:'Торговый центр'},{name:'Заречье-парк'},{skipped:18},
        {name:'МЦД Кунцевская · 7А'},{name:'Метро Кунцевская · 1С'}];
    }else if(r.n==='Sk3'&&r.to==='ТМК'){
      r.routeHeading=['Метро Говорово · 1А','ТМК'];
      r.routeOverview=[{name:'Метро Говорово · 1А'},{skipped:11},{name:'Княжеская улица'},
        {name:'Заречье-парк',minute:0},{name:'Каштановая улица',minute:2},{skipped:16},
        {name:'Школа СКОЛКА'},{name:'ТМК'}];
    }else if(r.n==='Sk3'){
      r.routeHeading=['Сибур','Метро Говорово · 1В'];
      r.routeOverview=[{name:'Сибур'},{skipped:18},{name:'Каштановая улица'},{name:'Заречье-парк'},
        {name:'Княжеская улица'},{skipped:8},{name:'Улица 50 лет Октября'},{name:'Метро Говорово · 1В'}];
    }
    for(const item of r.routeOverview||[])item.current=item.name===p.stopShortNames[r.stop];
  }
}
// Respondent 2: source route numbers/directions, simulated research arrivals.
// Geometry uses the wider supplied screenshots, with enough surrounding map for swipes.
participantProfiles['respondent-02']={
  label:'Респондент 2',city:'Москва',address:'Волоколамское шоссе, 75АкА9',restrictAddresses:true,
  nearestMetro:{name:'Спартак',line:'Таганско-Краснопресненская линия',badge:'7',color:'#8e479b',pos:[632.846,496.89],map:'metro-moscow-vector.svg',mapSize:[2038,1594],schemeScale:.518,schemeOffset:[220,54]},
  trainStation:{name:'Тушинская',map:'respondent-02-tushinskaya-map.png',mapSize:[2650,1780],pos:[2158,617],origin:[811,816],originDotRadius:17,source:'https://yandex.ru/maps/213/moscow/stops/station__lh_9600741/',
    departures:[
      {number:'7248/7247',name:'Электричка',from:'Подольск',to:'Нахабино',sourceTime:'20:28',offset:3},
      {number:'7360/7359',name:'Электричка',from:'Нахабино',to:'Подольск',sourceTime:'20:31',offset:6},
      {number:'6212/6211',name:'Электричка',from:'Шарапова Охота',to:'Дедовск',sourceTime:'20:34',offset:9}
    ]},
  routeHeadings:{'с348':['Метро Тушинская · 5А','Улица Фабрициуса','Метро Тушинская · 4В']},
  favoriteStop:'Чкаловский бульвар',favoriteByDefault:false,frequentStopIndex:0,
  map:'respondent-02-spartak-map.png',mapSize:[2748,1488],origin:[1165,410],
  stopNames:['Чкаловский бульвар','Небесный бульвар','Небесный бульвар · у Чкаловского бульвара'],
  stopShortNames:['Чкаловский бульвар','Небесный бульвар','Небесный бульвар'],
  stopHints:['','','У Чкаловского бульвара'],
  platforms:[[1626,970],[1208,718],[1546,754]],
  walks:[
    [[1165,410],[1150,445],[1180,520],[1205,600],[1250,665],[1390,725],[1590,780],[1610,870],[1626,970]],
    [[1165,410],[1150,445],[1180,520],[1205,600],[1185,655],[1208,718]],
    [[1165,410],[1150,445],[1180,520],[1205,600],[1250,665],[1390,725],[1546,754]]
  ],meters:[650,280,480],
  services:[0,1,2].flatMap(stop=>[
    {n:'с348',to:'улицы Фабрициуса',stop,first:35+stop*10,gap:115,scheduleOnly:false},
    {n:'с348',to:'улицы Фабрициуса',stop,first:175+stop*10,gap:180,scheduleOnly:true}
  ]),stopWaypoints:[3,3,3],roadPaths:[
    [[1635,1488],[1630,1295],[1628,1120],[1626,970],[1618,840],[1610,780],[1430,745],[1260,670],[1190,570],[1150,440],[1100,250]],
    [[1626,970],[1610,780],[1390,755],[1208,718],[1180,620],[1150,440],[1100,250],[1000,200]],
    [[1150,440],[1200,660],[1390,735],[1546,754],[1620,760],[1650,650],[1660,400],[1630,0]]
  ],sources:[
    'https://yandex.ru/maps/213/moscow/stops/4278543769/',
    'https://yandex.ru/maps/213/moscow/stops/4304222108/',
    'https://yandex.ru/maps/213/moscow/stops/4286895719/'
  ],
  alternate:{
    city:'Москва',address:'1-й Кожевнический переулок, 8',frequentStopIndex:-1,
    nearestMetro:{name:'Павелецкая',line:'Замоскворецкая линия',badge:'2',color:'#48b85e',pos:[1120.802,958.428]},
    map:'respondent-02-kozhevnicheskaya-map.png',mapSize:[2000,1462],origin:[818,993],
    stopNames:['Кожевническая улица','Кожевническая улица · обратное направление','Новоспасский мост'],
    stopShortNames:['Кожевническая улица','Кожевническая улица','Новоспасский мост'],
    stopHints:['Автобусы и трамваи','Обратное направление','Автобусы и трамваи'],mixedStops:[0,1,2],
    platforms:[[490,805],[350,795],[910,792]],
    walks:[
      [[818,993],[820,960],[760,960],[735,920],[720,820],[650,820],[550,820],[490,805]],
      [[818,993],[820,960],[760,960],[735,920],[720,820],[550,820],[470,820],[450,782],[350,795]],
      [[818,993],[820,960],[760,960],[735,920],[720,820],[840,816],[910,792]]
    ],meters:[390,470,420],
    services:[0,1,2].flatMap(stop=>[
      {n:'А',mode:'tram',to:stop===1?'метро Чистые пруды':'МЦД Калитники',stop,first:35,gap:180,scheduleOnly:false},
      {n:'913',to:'метро Павелецкая',stop,first:95,gap:180,scheduleOnly:false},
      {n:'с932',to:'метро Тульская',stop,first:175,gap:210,scheduleOnly:true},
      {n:'38',mode:'tram',to:stop===1?'Черёмушек':'ДК Компрессор',stop,first:140,gap:240,scheduleOnly:false},
      {n:'с932',to:'метро Тульская',stop,first:220,gap:240,scheduleOnly:false}
    ]),stopWaypoints:[3,3,3],roadPaths:[
      [[0,794],[170,799],[350,802],[490,805],[710,802],[910,792],[960,815],[970,865],[1010,910],[1055,895],[1140,750],[1290,550],[1480,300]],
      [[1480,300],[1140,750],[910,790],[350,795],[170,790],[0,786]],
      [[0,794],[350,802],[650,802],[910,792],[960,815],[970,865],[1010,910],[1055,895],[1140,750],[1290,550],[1480,300]]
    ],sources:[
      'https://yandex.ru/maps/213/moscow/stops/stop__9645613/',
      'https://yandex.ru/maps/213/moscow/stops/stop__9645566/',
      'https://yandex.ru/maps/213/moscow/stops/stop__9645890/'
    ]
  }
};
// Full loop, including the 25 intermediate stops collapsed in the reference.
// Stop order: https://kudikina.ru/msk/bus/s348_2/A (checked 21 October 2026).
{
  const p=participantProfiles['respondent-02'];
  const fullItinerary=[
    'Метро Тушинская · 5А','Лётная улица','Небесный бульвар','Чкаловский бульвар','Аэроклубная улица',
    'Метро Спартак · 2А','Стадион Спартак · 1В','Улица Братьев Старостиных','Метро Тушинская · 5F',
    'Клуб имени Чкалова','Канал имени Москвы','Тушинская улица','Улица Циолковского','Улица Мещерякова',
    'Восточный мост','Культурный центр «Салют»','Улица Фабрициуса','Бассейн','Клуб «Бригантина»',
    'Восточный мост','Улица Мещерякова','Улица Циолковского','Тушинская улица','Канал имени Москвы',
    'Клуб имени Чкалова','Метро Тушинская · 5E','Лётная улица','Стадион Спартак · 1А',
    'Метро Спартак · 4А','Аэроклубная улица','Небесный бульвар','Метро Тушинская · 4В'
  ];
  for(const r of p.services){
    if(r.n!=='с348')continue;
    r.fullItinerary=fullItinerary;r.itineraryIndex=[3,2,30][r.stop];
  }
}
// Updated participant screenshots, 20 October 2026: the map is supplied without
// stop symbols; all stop pins and route geometry are registered to this image.
{
  const p=participantProfiles['respondent-02'].alternate;
  p.map='respondent-02-kozhevnicheskaya-retouched.png';p.mapSize=[3076,2492];p.groupStopRoutes=true;
  // Similarity transform from the two unchanged river-pier symbols in both maps.
  const dx=724,dy=701,tx=1238,ty=1249.5;
  const a=(tx*dx+ty*dy)/(dx*dx+dy*dy),b=(ty*dx-tx*dy)/(dx*dx+dy*dy);
  const register=([x,y])=>[+(1647.5+a*(x-983)-b*(y-383)).toFixed(2),+(236.5+b*(x-983)+a*(y-383)).toFixed(2)];
  p.origin=register(p.origin);p.platforms=p.platforms.map(register);
  p.walks=p.walks.map(path=>path.map(register));p.roadPaths=p.roadPaths.map(path=>path.map(register));
  p.routeHeadings={
    '913':['3-й Павелецкий проезд','Метро Павелецкая · 2А','3-й Павелецкий проезд'],
    'с932':['3-й Павелецкий проезд','Метро Тульская, северный вход · 2С','3-й Павелецкий проезд'],
    'А':['Метро Чистые пруды · 1А','МЦД Калитники · 1А'],
    '38':['Черёмушки','Дом культуры Компрессор']
  };
  // Latest Kozhevnicheskaya snapshot; Novospassky has westbound trams.
  const directions=stop=>({
    '913':'Метро Павелецкая · 2А',
    'с932':'Метро Тульская, северный вход · 2С',
    'А':stop===0?'МЦД Калитники · 1А':'Метро Чистые пруды · 1А',
    '38':stop===0?'Дом культуры Компрессор':'Черёмушки'
  });
  const arrivalMinutes=[{'913':[3,9,21],'А':[8,16,35],'38':[9,27,48],'с932':[12]},
    {'913':[5,12,25],'А':[2,12,20],'38':[2,13,52],'с932':[16]},
    {'913':[4,14,23],'38':[5,14,28],'А':[8,24,33],'с932':[13]}];
  for(const r of p.services){
    r.to=directions(r.stop)[r.n];r.directionLabel=`до «${r.to}»`;
    const times=arrivalMinutes[r.stop][r.n];
    if(times){r.first=times[0]*60;r.gap=((times[1]||times[0]+20)-times[0])*60;r.sourceArrivals=times;}
    // Detail-only data transcribed from the 21 October screenshots. Keep the
    // arrival boards above unchanged; retain the source's collapsed sections.
    const overview={
      '38':[{name:'Черёмушки'},{skipped:20},{name:'Павелецкий вокзал · 3А'},
        {name:'Кожевническая улица'},{name:'Новоспасский мост'},{skipped:12},
        {name:'Метро Авиамоторная · 10В'},{name:'Дом культуры Компрессор'}],
      '913':[{name:'3-й Павелецкий проезд'},{skipped:11},{name:'Павелецкий вокзал · 3А'},
        {name:'Кожевническая улица',minute:0},{name:'Новоспасский мост',minute:1},{skipped:7},
        {name:'3-й Павелецкий проезд, 7',minute:10},{name:'3-й Павелецкий проезд',minute:11}],
      'А':[{name:'Метро Чистые пруды · 1А'},{skipped:10},{name:'Павелецкий вокзал · 3А'},
        {name:'Кожевническая улица'},{name:'Новоспасский мост'},{skipped:7},
        {name:'Октябрьское трамвайное депо'},{name:'МЦД Калитники · 1А'}],
      'с932':[{name:'3-й Павелецкий проезд'},{skipped:35},{name:'Павелецкий вокзал · 3А'},
        {name:'Кожевническая улица',minute:0},{name:'Новоспасский мост',minute:1},{skipped:7},
        {name:'3-й Павелецкий проезд, 7'},{name:'3-й Павелецкий проезд'}]
    };
    r.routeOverview=overview[r.n];
    // Other platforms use the matching travel direction, with their own current stop.
    if(r.mode==='tram'&&r.stop!==0){
      r.routeOverview.reverse();
      r.routeHeading=p.routeHeadings[r.n].slice().reverse();
    }
    const current=r.stop===2?'Новоспасский мост':'Кожевническая улица';
    r.routeOverview=r.routeOverview.map(item=>({...item,...(item.name===current?{current:true}:{})}));
    // Reverse vehicles that head west; keep each platform's exact waypoint.
    if((r.mode==='tram'&&r.stop===2)||(r.mode!=='tram'&&r.n!=='с932'&&r.stop!==1)){
      r.path=p.roadPaths[r.stop].slice().reverse();r.stopWaypoint=r.path.length-1-3;
    }
  }
  // Carousel and map share stop indices: reorder every stop-bound field together.
  const order=p.meters.map((_,i)=>i).sort((a,b)=>p.meters[a]-p.meters[b]);
  const newIndex=oldIndex=>order.indexOf(oldIndex);
  for(const key of ['stopNames','stopShortNames','stopHints','platforms','walks','meters','stopWaypoints','roadPaths','sources']){
    p[key]=order.map(i=>p[key][i]);
  }
  p.mixedStops=p.mixedStops.map(newIndex);
  p.frequentStopIndex=newIndex(p.frequentStopIndex);
  for(const r of p.services)r.stop=newIndex(r.stop);
}

// Source snapshot: Yandex Maps, 20 October 2026. Names/directions are real;
// the research arrival clock remains simulated (including the delay scenario).
{
  const p=participantProfiles['respondent-01'];
  const academy='Московская государственная академия делового администрирования';
  const toKryukovo=[academy,'Центр реабилитации','РТС-2','Корпус № 1012','Исторический музей','10-й микрорайон'];
  const fromKryukovo=['МЦД Зеленоград-Крюково','МЦД Зеленоград-Крюково · 8D','Универсам','Поликлиника № 105','Солнечная аллея','МИЭТ','Парк Победы','Магазин Товары для дома','Дом быта','Магазин Океан','Кинотеатр Электрон','1-й торговый центр','Берёзка','Автокомбинат'];
  const onward={
    '4':['Улица Болдов Ручей',...toKryukovo,'МЦД Зеленоград-Крюково · 8A'],
    '9':[...toKryukovo,...fromKryukovo,'41-й километр'],
    '11':['Филаретовская улица','Октябрьская','Панфиловский проспект',...fromKryukovo,'Северная'],
    '29':['Филаретовская улица','12-й микрорайон','Берёзовая аллея','Дом мебели','1-й торговый центр','Кинотеатр Электрон','Магазин Детский мир','Магазин Океан','Дом быта','Магазин Товары для дома','Парк Победы','МИЭТ','Солнечная аллея','Поликлиника № 105','Универсам','МЦД Зеленоград-Крюково · 8A']
  };
  // Arrival-board labels transcribed from the participant's Maps screenshots.
  const directions={'4':'Улица Болдов Ручей','9':'МЦД Зеленоград-Крюково','11':'МЦД Зеленоград-Крюково','29':'Кинотеатр Электрон'};
  for(const r of p.services){
    r.to=directions[r.n];
    r.directionLabel=`до «${r.to}»`;
    const names=onward[r.n],start=names.indexOf(p.stopNames[r.stop]);
    r.itinerary=names.slice(Math.max(0,start));
    r.source=p.sources[r.stop];
  }
  // Bus-detail data from the participant's 21 October screenshots. The hidden
  // portions of 9/11 were checked against wikiroutes.info/msk?routes=5528 / 5531.
  // Keep arrival-board labels, services and research timing above unchanged.
  p.routeHeadings={
    '4':['МЦД Зеленоград-Крюково · 8В','Улица Болдов Ручей','МЦД Зеленоград-Крюково · 8А'],
    '9':['41-й километр','МЦД Зеленоград-Крюково','41-й километр'],
    '29':['МЦД Зеленоград-Крюково · 8В','Кинотеатр Электрон','МЦД Зеленоград-Крюково · 8А'],
    '11':['Северная','МЦД Зеленоград-Крюково','Северная']
  };
  const fullItineraries={
    '4':['МЦД Зеленоград-Крюково · 8В','Панфиловский проспект','Октябрьская','12-й микрорайон','Корпус № 1108','Улица Болдов Ручей',...toKryukovo,'МЦД Зеленоград-Крюково · 8А'],
    '9':['41-й километр','Северная','Автокомбинат','Берёзка','Дом мебели','Берёзовая аллея','12-й микрорайон','Филаретовская улица',...onward['9']],
    '29':['МЦД Зеленоград-Крюково · 8В','10-й микрорайон','Исторический музей','Корпус № 1012','Центр реабилитации',academy,...onward['29'].slice(0,-1),'МЦД Зеленоград-Крюково · 8А'],
    '11':['Северная','Автокомбинат','Берёзка','1-й торговый центр','Кинотеатр Электрон','Магазин Детский мир','Магазин Океан','Дом быта','Магазин Товары для дома','Парк Победы','МИЭТ','Солнечная аллея','Поликлиника № 105','Универсам','10-й микрорайон','Исторический музей','Корпус № 1012','Центр реабилитации',academy,...onward['11']]
  };
  for(const r of p.services){
    r.fullItinerary=fullItineraries[r.n];
    r.itineraryIndex=r.fullItinerary.indexOf(p.stopNames[r.stop]);
    if(r.n==='4'){
      r.itineraryNotes={5:'Промежуточная конечная'};
      r.itineraryMinutes={5:0,6:2,11:7,12:9};
    }
    if(r.n==='11')r.itineraryMinutes={19:0,20:2};
  }
  p.nearestMetro={name:'Зеленоград — Крюково',line:'МЦД-3',badge:'D3',color:'#e15d29',pos:[396,189],map:'metro-moscow-vector.svg',mapSize:[2038,1594],schemeScale:.518,schemeOffset:[220,54],source:'https://yandex.ru/metro/moscow?scheme_id=sc34974011'};
  p.trainStation={name:'Зеленоград — Крюково',map:'respondent-01-kryukovo-map-v2.png',mapSize:[1870,1542],pos:[920,1005],origin:[1211,376],originDotRadius:16,source:'https://yandex.ru/maps/213/moscow/stops/station__lh_9600212/',
    // Screenshot at 19:39: preserve identities and intervals on the device clock.
    departures:[
      {number:'7359/7360',name:'Электричка',from:'Ипподром',to:'Зеленоград-Крюково',sourceTime:'19:40',offset:1,noBoarding:true},
      {number:'7483/7484',name:'Электричка',from:'Зеленоград-Крюково',to:'Ипподром',sourceTime:'19:42',offset:3},
      {number:'6533',name:'Электричка',from:'Клин',to:'Москва (Ленинградский вокзал)',sourceTime:'19:47',offset:8},
      {number:'7361/7362',name:'Электричка',from:'Ипподром',to:'Зеленоград-Крюково',sourceTime:'19:50',offset:11,noBoarding:true},
      {number:'7485/7486',name:'Электричка',from:'Зеленоград-Крюково',to:'Ипподром',sourceTime:'19:52',offset:13},
      {number:'7941',name:'Экспресс-электричка',from:'Тверь',to:'Москва (Ленинградский вокзал)',sourceTime:'19:53',offset:14,express:true}
    ]};
}
// Respondent 3: the two supplied stop links are the source of the boards.
// Geometry is registered to the original screenshots; arrivals use the research clock.
participantProfiles['respondent-03']={
  label:'Респондент 3',city:'Москва',address:'Бакунинская улица, 62–68с1',restrictAddresses:true,
  favoriteStop:'Балакиревский переулок',favoriteByDefault:false,frequentStopIndex:0,
  map:'respondent-03-bakuninskaya.png',mapSize:[2744,1490],origin:[1457,1053],
  mapExtension:{file:'respondent-03-bakuninskaya-extension.svg',bounds:[[0,0],[3400,2700]]},
  stopNames:['Балакиревский переулок'],platforms:[[1204,983]],
  walks:[[[1457,1053],[1368,963],[1285,887],[1232,938],[1204,983]]],meters:[180],
  stopWaypoints:[3],roadPaths:[[[570,1490],[850,1260],[1065,1100],[1204,983],[1440,724],[1680,432],[2080,0]]],
  services:[
    {n:'м3',to:'Проспект Будённого',stop:0,first:35,gap:360,scheduleOnly:false},
    {n:'м3к',to:'Проспект Будённого',stop:0,first:105,gap:780,scheduleOnly:false},
    {n:'686',to:'Проспект Будённого',stop:0,first:180,gap:660,scheduleOnly:false},
    {n:'622',to:'Восточное Измайлово',stop:0,first:300,gap:1680,scheduleOnly:false},
    {n:'м3',to:'Проспект Будённого',stop:0,first:170,gap:360,scheduleOnly:true}
  ],sources:['https://yandex.ru/maps/213/moscow/stops/stop__9642799/'],
  nearestMetro:{name:'Электрозаводская',line:'Арбатско-Покровская линия',badge:'3',color:'#0078bf',pos:[1251.338,594.792]},
  trainStation:{name:'Электрозаводская',map:'respondent-03-elektrozavodskaya.png',mapSize:[1862,1510],pos:[1333,578],origin:[520,941],originDotRadius:16,
    source:'https://rasp.yandex.ru/station/9601647/',cycleMinutes:30,departures:[
      {number:'6720',name:'Электричка',from:'Москва (Казанский вокзал)',to:'Виноградово',sourceTime:'13:42',offset:2},
      {number:'7399/7400',name:'Электричка',from:'Зеленоград-Крюково',to:'Ипподром',sourceTime:'13:47',offset:7},
      {number:'7301/7302',name:'Электричка',from:'Ипподром',to:'Зеленоград-Крюково',sourceTime:'13:48',offset:8},
      {number:'6613',name:'Электричка',from:'Панки',to:'Москва (Казанский вокзал)',sourceTime:'13:53',offset:13},
      {number:'7401/7402',name:'Электричка',from:'Зеленоград-Крюково',to:'Ипподром',sourceTime:'13:57',offset:17},
      {number:'7303/7304',name:'Электричка',from:'Ипподром',to:'Зеленоград-Крюково',sourceTime:'13:58',offset:18},
      {number:'6830',name:'Электричка',from:'Москва (Казанский вокзал)',to:'Черусти',sourceTime:'14:02',offset:22}
    ]},
  alternate:{city:'Москва',address:'Можайское шоссе, 22',frequentStopIndex:-1,
    map:'respondent-03-mozhayskoye-moscow.png',mapSize:[2664,1768],origin:[1325,625],
    stopNames:['Улица Гришина','Улица Петра Алексеева','Улица Петра Алексеева · обратное направление'],
    stopShortNames:['Улица Гришина','Улица Петра Алексеева','Улица Петра Алексеева'],
    platforms:[[805,750],[1780,689],[1580,805]],meters:[250,220,290],
    walks:[[[1325,625],[1325,680],[1100,700],[1000,720],[805,750]],
      [[1325,625],[1325,680],[1535,690],[1780,689]],
      [[1325,625],[1325,680],[1535,690],[1535,805],[1580,805]]],
    stopWaypoints:[3,3,3],roadPaths:[
      [[2664,685],[1800,690],[1100,715],[805,750],[500,810],[0,895]],
      [[2664,675],[2300,680],[2000,682],[1780,689],[1300,700],[805,750],[0,895]],
      [[0,980],[600,880],[1100,815],[1580,805],[2050,800],[2664,795]]],
    services:[
      {n:'1339',to:'Магазин Маринка',stop:0,first:120,gap:960,scheduleOnly:false},
      {n:'Sk2',to:'ТМК',stop:0,first:180,gap:900,scheduleOnly:false},
      {n:'454',to:'ЖК Одинцовский Парк',stop:0,first:240,gap:1200,scheduleOnly:true,routeQualifier:'областной'},
      {n:'м20',to:'Беловежская улица',stop:0,first:240,gap:600,scheduleOnly:false},
      {n:'м20',to:'Беловежская улица',stop:1,first:80,gap:600,scheduleOnly:false},
      {n:'Sk2',to:'ТМК',stop:1,first:140,gap:900,scheduleOnly:false},
      {n:'454',to:'ЖК Одинцовский Парк',stop:1,first:180,gap:1200,scheduleOnly:true,routeQualifier:'областной'},
      {n:'м20',to:'Киевский вокзал · А7',stop:2,first:90,gap:600,scheduleOnly:false},
      {n:'Sk2',to:'Метро Филёвский парк',stop:2,first:180,gap:900,scheduleOnly:false}
    ],sources:['https://yandex.ru/maps/213/moscow/stops/stop__9641267/',
      'https://yandex.ru/maps/213/moscow/stops/stop__9641894/',
      'https://yandex.ru/maps/213/moscow/stops/stop__9641262/'],
    nearestMetro:{name:'Кунцевская',line:'Арбатско-Покровская линия',badge:'3',color:'#0078bf',pos:[515.778,820.64]}
  }
};
// Keep the explicitly selected platform first; additional platforms are independent stops.
{
  const p=participantProfiles['respondent-03'];
  p.stopNames=['Балакиревский переулок','Балакиревский переулок · обратное направление','Улица Новая Дорога'];
  p.stopShortNames=['Балакиревский переулок','Балакиревский переулок','Улица Новая Дорога'];
  p.platforms=[[1360,865],[1155,1030],[2130,1232]];
  p.walks=[
    [[1457,1053],[1368,963],[1285,887],[1360,865]],
    [[1457,1053],[1368,963],[1285,887],[1220,930],[1155,1030]],
    [[1457,1053],[1550,1140],[1705,1050],[1830,970],[1950,1080],[2130,1232]]
  ];p.meters=[180,230,410];p.stopWaypoints=[3,3,3];
  p.roadPaths=[
    [[570,1490],[850,1260],[1220,995],[1360,865],[1600,580],[1770,360],[2080,0]],
    [[2080,0],[1740,360],[1390,790],[1155,1030],[850,1290],[570,1490]],
    [[2744,650],[2520,870],[2320,1060],[2130,1232],[1950,1400],[1840,1490],[1650,1660],[1470,1860],[1260,2080],[1120,2250]]
  ];
  p.sources.push('https://yandex.ru/maps/213/moscow/stops/stop__9642848/','https://yandex.ru/maps/213/moscow/stops/stop__9646509/');
  p.services.push(...[['м3','Серебряный бор'],['686','МЦД Площадь трёх вокзалов · 1Е'],['м3к','Метро Лубянка · 7А'],['622','МЦД Площадь трёх вокзалов · 1Е']].map(([n,to],i)=>({n,to,stop:1,first:45+i*70,gap:600+i*90,scheduleOnly:false})),
    {n:'552',to:'Рубцовская набережная',stop:2,first:45,gap:600,scheduleOnly:false},
    {n:'78',to:'Площадь Земляной Вал',stop:2,first:120,gap:900,scheduleOnly:false});

}
for(const p of [participantProfiles['respondent-03'],participantProfiles['respondent-03'].alternate]){
  for(const r of p.services){
    r.directionLabel=`до «${r.to}»`;
    r.source=p.sources[r.stop];
    r.routeHeading=[p.stopNames[r.stop],r.to];
    r.routeOverview=[{name:p.stopNames[r.stop],current:true},{name:r.to}];
  }
}
// Bus detail cards transcribed from the 13:37–13:38 screenshots.
// These headings and stop sequences do not change the existing arrival board.
{
  const p=participantProfiles['respondent-03'];
  const starts={'622':'МЦД Площадь трёх вокзалов · 1Е','686':'МЦД Площадь трёх вокзалов · 1Е','м3к':'Метро Лубянка · 7А','м3':'Серебряный бор'};
  const gaps={'622':7,'686':7,'м3к':13,'м3':38};
  for(const r of p.services){
    if(!starts[r.n])continue;
    const end=r.n==='622'?'Восточное Измайлово':'Проспект Будённого';
    const overview=[{name:starts[r.n]},{skipped:gaps[r.n]},{name:'Спартаковский переулок'},
      {name:'Балакиревский переулок',current:true,...(r.n!=='622'?{minute:0}:{})},
      {name:'Бакунинская улица, 84',...(r.n!=='622'?{minute:1}:{})},
      {skipped:r.n==='622'?21:3},
      {name:r.n==='622'?'15-я Парковая улица':'Большая Семёновская улица',...(r.n!=='622'?{minute:r.n==='686'?7:6}:{})},
      {name:end,...(r.n!=='622'?{minute:r.n==='686'?11:10}:{})}];
    r.routeHeading=[starts[r.n],end];r.routeOverview=overview;
    if(r.stop===1){
      const end=r.n==='м3к'?'Метро Лубянка · 7А':starts[r.n];
      r.routeHeading=[r.n==='622'?'Восточное Измайлово':'Проспект Будённого',end];
      r.routeOverview=[{name:r.routeHeading[0]},{skipped:r.n==='622'?21:5},
        {name:'Бакунинская улица, 84'},{name:'Балакиревский переулок',current:true,minute:0},
        {name:'Спартаковский переулок',...(['м3','м3к','622'].includes(r.n)?{minute:1}:{})},
        {skipped:{'м3к':11,'м3':34,'686':6,'622':6}[r.n]},
        {name:r.n==='м3к'?'Метро Лубянка · 5А_5В':r.n==='м3'?'Водная станция Труд':'Казанский вокзал · 3А',...(r.n==='м3к'?{minute:18}:r.n==='622'?{minute:12}:{})},
        {name:end,...(r.n==='м3к'?{minute:20}:r.n==='622'?{minute:14}:{})}];
    }
  }
  for(const r of p.services.filter(r=>r.stop===2)){
    const is552=r.n==='552';
    r.routeHeading=is552?['Метро Черкизовская · 1А','Рубцовская набережная','Метро Черкизовская · 2А']:
      ['Дворец спорта Сокольники','Площадь Земляной Вал','Дворец спорта Сокольники'];
    r.routeOverview=[{name:r.routeHeading[0]},{skipped:is552?14:11},{name:'Улица Фридриха Энгельса'},
      {name:'Улица Новая Дорога',current:true},
      is552?{name:'Рубцовская набережная',note:'Промежуточная конечная'}:{name:'Рубцов переулок'},
      {skipped:is552?15:33},{name:is552?'Лечебная улица':'ПКиО Сокольники · 5В'},
      {name:r.routeHeading[2]}];
  }
}
// Moscow address correction. Stop-board directions remain independent of route endpoints.
{
  const p=participantProfiles['respondent-03'].alternate;
  const details={
    'Sk2':{heading:['Метро Филёвский парк · 1А_1В_1С','ТМК'],stops:[
      {name:'Метро Филёвский парк · 1А_1В_1С'},{skipped:6},{name:'Улица Петра Алексеева'},
      {name:'Улица Гришина',minute:0},{name:'Река Ивница',minute:1},{skipped:22},{name:'Школа СКОЛКА'},{name:'ТМК'}]},
    '1339':{heading:['Метро Парк Победы · 2А','Магазин Маринка','Метро Парк Победы · 4А'],stops:[
      {name:'Метро Парк Победы · 2А'},{name:'Улица Багрицкого'},{name:'Улица Гришина',minute:0},
      {name:'Дворец спорта Крылья Советов',minute:3},{skipped:40},{name:'Метро Славянский бульвар · 4С_4D'},{name:'Метро Парк Победы · 4А'}]},
    '454':{heading:['Киевский вокзал · А8','ЖК Одинцовский Парк'],stops:[
      {name:'Киевский вокзал · А8'},{skipped:7},{name:'Улица Петра Алексеева'},{name:'Улица Гришина'},
      {name:'Река Ивница'},{skipped:14},{name:'Транспортная улица'},{name:'ЖК Одинцовский Парк'}]},
    'м20':{heading:['Киевский вокзал · А7','Беловежская улица'],stops:[
      {name:'Киевский вокзал · А7'},{skipped:17},{name:'Улица Петра Алексеева'},{name:'Улица Гришина',minute:0},
      {name:'Река Ивница',minute:2},{skipped:3},{name:'Поликлиника',minute:10},{name:'Беловежская улица',minute:10}]}
  };
  for(const r of p.services){
    const d=details[r.n];r.routeHeading=d.heading.slice();
    r.routeOverview=d.stops.map(item=>({...item,current:item.name===p.stopShortNames[r.stop]}));
    if(r.stop===1){
      // Travel times were supplied from Grishina only; do not invent times at the preceding stop.
      r.routeOverview=r.routeOverview.map(({minute,...item})=>item);
    }
    if(r.stop===2){
      r.routeHeading=d.heading.slice().reverse();
      r.routeOverview=[{name:d.heading.at(-1)},{name:'Улица Гришина'},
        {name:'Улица Петра Алексеева',current:true},{name:d.heading[0]}];
    }
  }
}
function trainStationContext(){return layer==='train'?participantLocation(scenario)?.trainStation||null:null}
const metroScheme={map:'metro-moscow-vector.svg',mapSize:[2038,1594],schemeScale:.518,schemeOffset:[220,54]};
function nearestMetroContext(){
  if(layer!=='metro')return null;
  return {...(participantLocation(scenario)?.nearestMetro||{name:'Парк Культуры',line:'Сокольническая линия',badge:'1',color:'#fa3e2c',pos:[858.694,937.19]}),...metroScheme};
}

// Respondent 1: direction-specific road geometry.
{
  const p=participantProfiles['respondent-01'];
  for(const location of [p,p.alternate]){
    for(const service of location.services){
      const reverse=location===p ? service.stop===0||service.stop===1 : service.stop===0&&service.to.includes('Кунцевская');
      if(reverse){
        const path=service.path||location.roadPaths[service.stop];
        const waypoint=service.stopWaypoint??location.stopWaypoints[service.stop];
        service.path=[...path].reverse();service.stopWaypoint=path.length-1-waypoint;
      }
    }
  }
}
// Shared research behaviour: inherited by every existing and future participant/address.
const prototypeDefaults=Object.freeze({extendedBusSchedule:true,directBusTicket:true});
for(const p of Object.values(participantProfiles)){
  Object.assign(p,prototypeDefaults);
  for(const location of [p,p.alternate].filter(Boolean)){
    Object.assign(location,prototypeDefaults);
    for(let stop=0;stop<location.stopNames.length;stop++){
      const all=location.services.filter(r=>r.stop===stop);
      const actual=all.filter(r=>!r.scheduleOnly||!all.some(other=>!other.scheduleOnly&&other.n===r.n&&other.to===r.to));
      const gap=actual.length>1?420:300;
      for(const service of all)service.gap=gap;
      actual.forEach((service,index)=>service.first=60+Math.round(index*gap/actual.length));
    }
  }
}
// 552 turns from Bolshaya Pochtovaya into Novaya Doroga towards Rubtsovskaya.
// 78 continues on Bolshaya Pochtovaya towards Rubtsov lane; do not reverse both.
for(const service of participantProfiles['respondent-03'].services){
  if(service.stop===2&&service.n==='552'){
    service.path=[[2744,650],[2520,870],[2320,1060],[2130,1232],
      [2045,1315],[2200,1470],[2400,1665],[2600,1860],[2760,2020]];
    service.stopWaypoint=3;
  }
}
const participantProfile=participantProfiles[new URLSearchParams(location.search).get('participant')]||null;

function participantLocation(s){return s==='familiar'?participantProfile:s==='unfamiliar'?participantProfile?.alternate||null:null}
function personalTransportLocation(s,l){return participantProfile?.alternate&&l!=='bus'?null:participantLocation(s)}

function stopPinBelow(i){return personalTransportLocation(scenario,layer)?.pinBelowStops?.includes(i)||false}

function initialFavoriteStops(){return participantProfile&&participantProfile.favoriteByDefault!==false?[participantProfile.favoriteStop]:[]}

// Shared countryside fixture. Coordinates follow the existing map image.
const farArea={
  origin:[1050,440],
  stops:[
    {name:'Озёрная',minutes:30,path:[[1050,440],[1005,580],[975,680],[994,725],[1050,785],[1125,845]]},
    {name:'Центральная улица',minutes:35,path:[[1050,440],[1005,580],[975,680],[915,600],[865,550],[820,510],[785,488]]},
    {name:'Дачная улица',minutes:42,path:[[1050,440],[1005,580],[975,680],[994,725],[1050,785],[1125,845],[1220,930],[1316,1011]]}
  ]
};
