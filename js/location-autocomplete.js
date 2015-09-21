$(function(){
  var suburbs = [
     { value: 'Abbotsbury'},
    { value: 'Abbotsbury'},
    { value: 'Abbotsford'},
    { value: 'Alexandria'},
    { value: 'Alfords Point'}          ,
    { value: 'Allambie Heights'}          ,
    { value: 'Allawah'},
    { value: 'Annandale'}          ,
    { value: 'Arcadia'}          ,
    { value: 'Arncliffe'},
    { value: 'Artarmon'},
    { value: 'Ashbury'}          ,
    { value: 'Ashcroft'},
    { value: 'Ashfield'},
    { value: 'Asquith'}          ,
    { value: 'Auburn'},
    { value: 'Austral'}          ,
    { value: 'Avalon Beach'}          ,
    { value: 'Balgowlah'}          ,
    { value: 'Balgowlah Heights'}          ,
    { value: 'Balmain'}          ,
    { value: 'Balmain East'}          ,
    { value: 'Bangor'},
    { value: 'Banksia'},
    { value: 'Banksmeadow'}          ,
    { value: 'Bankstown'},
    { value: 'Barden Ridge'}          ,
    { value: 'Bardia'},
    { value: 'Bardwell Park'}          ,
    { value: 'Bardwell Valley'}          ,
    { value: 'Bass Hill'},
    { value: 'Bayview'}          ,
    { value: 'Beacon Hill'}          ,
    { value: 'Beaconsfield'},
    { value: 'Beaumont Hills'},
    { value: 'Beecroft'}          ,
    { value: 'Belfield'}          ,
    { value: 'Bellevue Hill'}          ,
    { value: 'Belmore'},
    { value: 'Belrose'}          ,
    { value: 'Berala'},
    { value: 'Berowra'},
    { value: 'Berowra Creek'},
    { value: 'Berowra Heights'},
    { value: 'Beverley Park'}          ,
    { value: 'Beverly Hills'}          ,
    { value: 'Bexley'},
    { value: 'Bexley North'}          ,
    { value: 'Bidwill'},
    { value: 'Bilgola'}          ,
    { value: 'Birchgrove'}          ,
    { value: 'Birrong'},
    { value: 'Blakehurst'}          ,
    { value: 'Bligh Park'},
    { value: 'Bondi Junction'}          ,
    { value: 'Bonnet Bay'},
    { value: 'Bonnyrigg'},
    { value: 'Bonnyrigg Heights'},
    { value: 'Bossley Park'},
    { value: 'Botany'},
    { value: 'Breakfast Point'}          ,
    { value: 'Brighton-le-sands'},
    { value: 'Bringelly'}          ,
    { value: 'Bronte'}          ,
    { value: 'Brookvale'},
    { value: 'Bundeena'},
    { value: 'Burraneer'}          ,
    { value: 'Burwood'},
    { value: 'Burwood Heights'}          ,
    { value: 'Busby'},
    { value: 'Cabarita'}          ,
    { value: 'Cabramatta'},
    { value: 'Cabramatta West'},
    { value: 'Cammeray'}          ,
    { value: 'Camperdown'},
    { value: 'Campsie'},
    { value: 'Canada Bay'}          ,
    { value: 'Canley Heights'},
    { value: 'Canley Vale'},
    { value: 'Canterbury'},
    { value: 'Caringbah'},
    { value: 'Caringbah South'}          ,
    { value: 'Carlingford'},
    { value: 'Carlton'},
    { value: 'Carnes Hill'},
    { value: 'Carramar'},
    { value: 'Carss Park'}          ,
    { value: 'Cartwright'},
    { value: 'Castle Cove'}          ,
    { value: 'Castlecrag'}          ,
    { value: 'Casula'},
    { value: 'Cecil Hills'},
    { value: 'Centennial Park'},
    { value: 'Chatswood'},
    { value: 'Chatswood West'}          ,
    { value: 'Cheltenham'}          ,
    { value: 'Cherrybrook'}          ,
    { value: 'Chester Hill'},
    { value: 'Chifley'}          ,
    { value: 'Chippendale'},
    { value: 'Chipping Norton'},
    { value: 'Chiswick'},
    { value: 'Chullora'},
    { value: 'Church Point'}          ,
    { value: 'Clareville'}          ,
    { value: 'Clemton Park'},
    { value: 'Clontarf'}          ,
    { value: 'Clovelly'}          ,
    { value: 'Colebee'},
    { value: 'Collaroy'},
    { value: 'Collaroy Plateau West'}          ,
    { value: 'Colyton'},
    { value: 'Como'}          ,
    { value: 'Concord'}          ,
    { value: 'Concord West'}          ,
    { value: 'Condell Park'},
    { value: 'Connells Point'}          ,
    { value: 'Constitution Hill'},
    { value: 'Coogee'},
    { value: 'Cornwallis'},
    { value: 'Cowan'},
    { value: 'Cremorne'},
    { value: 'Cremorne Point'}          ,
    { value: 'Cronulla'},
    { value: 'Crows Nest'},
    { value: 'Croydon'}          ,
    { value: 'Croydon Park'},
    { value: 'Cumberland Reach'},
    { value: 'Curl Curl'}          ,
    { value: 'Daceyville'}          ,
    { value: 'Darling Point'}          ,
    { value: 'Darlington'}          ,
    { value: 'Davidson'}          ,
    { value: 'Dean Park'},
    { value: 'Denistone'}          ,
    { value: 'Denistone East'}          ,
    { value: 'Denistone West'}          ,
    { value: 'Dolans Bay'}          ,
    { value: 'Dolls Point'},
    { value: 'Doonside'},
    { value: 'Double Bay'}          ,
    { value: 'Dover Heights'}          ,
    { value: 'Drummoyne'}          ,
    { value: 'Duffys Forest'}          ,
    { value: 'Dulwich Hill'},
    { value: 'Dundas'}          ,
    { value: 'Dundas Valley'},
    { value: 'Dural'}          ,
    { value: 'Earlwood'}          ,
    { value: 'Eastern Creek'},
    { value: 'Eastgardens'}          ,
    { value: 'East Hills'},
    { value: 'East Killara'}          ,
    { value: 'Eastlakes'},
    { value: 'East Lindfield'}          ,
    { value: 'East Ryde'}          ,
    { value: 'Eastwood'}          ,
    { value: 'Edensor Park'},
    { value: 'Edgecliff'}          ,
    { value: 'Edmondson Park'},
    { value: 'Elanora Heights'}          ,
    { value: 'Elizabeth Bay'},
    { value: 'Elvina Bay'},
    { value: 'Enfield'},
    { value: 'Engadine'},
    { value: 'Enmore'}          ,
    { value: 'Epping'},
    { value: 'Ermington'},
    { value: 'Erskine Park'},
    { value: 'Erskineville'},
    { value: 'Eveleigh'},
    { value: 'Fairfield'},
    { value: 'Fairfield East'},
    { value: 'Fairfield Heights'},
    { value: 'Fairfield West'},
    { value: 'Fairlight'}          ,
    { value: 'Five Dock'}          ,
    { value: 'Forest Lodge'},
    { value: 'Forestville'}          ,
    { value: 'Frenchs Forest'}          ,
    { value: 'Freshwater'},
    { value: 'Galston'},
    { value: 'Georges Hall'},
    { value: 'Girraween'},
    { value: 'Gladesville'},
    { value: 'Glebe'}          ,
    { value: 'Glendenning'},
    { value: 'Glenfield'},
    { value: 'Glenhaven'}          ,
    { value: 'Glenorie'}          ,
    { value: 'Glenwood'},
    { value: 'Gordon'}          ,
    { value: 'Granville'},
    { value: 'Grays Point'}          ,
    { value: 'Great Mackerel Beach'},
    { value: 'Greenacre'},
    { value: 'Greenfield Park'},
    { value: 'Green Valley'},
    { value: 'Greenwich'}          ,
    { value: 'Greystanes'},
    { value: 'Guildford'},
    { value: 'Guildford West'},
    { value: 'Gymea'},
    { value: 'Gymea Bay'}          ,
    { value: 'Haberfield'}          ,
    { value: 'Hammondville'},
    { value: 'Harbord'}          ,
    { value: 'Hassall Grove'},
    { value: 'Haymarket'},
    { value: 'Heathcote'},
    { value: 'Hebersham'},
    { value: 'Heckenberg'},
    { value: 'Hillsdale'},
    { value: 'Hinchinbrook'},
    { value: 'Holroyd'},
    { value: 'Holsworthy'},
    { value: 'Homebush'},
    { value: 'Homebush West'},
    { value: 'Horningsea Park'},
    { value: 'Hornsby'},
    { value: 'Hornsby Heights'}          ,
    { value: 'Horsley Park'}          ,
    { value: 'Hoxton Park'},
    { value: 'Hunters Hill'}          ,
    { value: 'Huntleys Cove'}          ,
    { value: 'Hurlstone Park'},
    { value: 'Hurstville'},
    { value: 'Hurstville Grove'}          ,
    { value: 'Illawong'},
    { value: 'Jannali'},
    { value: 'Kangaroo Point'}          ,
    { value: 'Kareela'},
    { value: 'Kellyville'},
    { value: 'Kellyville Ridge'},
    { value: 'Kemps Creek'}          ,
    { value: 'Kensington'},
    { value: 'Kenthurst'}          ,
    { value: 'Killara'}          ,
    { value: 'Killarney Heights'}          ,
    { value: 'Kingsford'},
    { value: 'Kingsgrove'}          ,
    { value: 'Kings Langley'},
    { value: 'Kirrawee'},
    { value: 'Kirribilli'}          ,
    { value: 'Kogarah'},
    { value: 'Kogarah Bay'}          ,
    { value: 'Kurnell'},
    { value: 'Kurraba Point'}          ,
    { value: 'Kyle Bay'}          ,
    { value: 'Lakemba'},
    { value: 'Lalor Park'},
    { value: 'Lane Cove'},
    { value: 'Lane Cove North'},
    { value: 'Lane Cove West'}          ,
    { value: 'Lansvale'},
    { value: 'La Perouse'}          ,
    { value: 'Lavender Bay'},
    { value: 'Leets Vale'},
    { value: 'Leichhardt'}          ,
    { value: 'Leppington'},
    { value: 'Lewisham'},
    { value: 'Liberty Grove'},
    { value: 'Lidcombe'},
    { value: 'Lilli Pilli'}          ,
    { value: 'Lilyfield'}          ,
    { value: 'Lindfield'}          ,
    { value: 'Little Bay'}          ,
    { value: 'Liverpool'},
    { value: 'Loftus'},
    { value: 'Longueville'}          ,
    { value: 'Lugarno'}          ,
    { value: 'Lurnea'},
    { value: 'Macquarie Fields'},
    { value: 'Macquarie Park'},
    { value: 'Malabar'}          ,
    { value: 'Manly'}          ,
    { value: 'Manly Vale'},
    { value: 'Maroota'},
    { value: 'Maroubra'}          ,
    { value: 'Marrickville'},
    { value: 'Marsfield'},
    { value: 'Mascot'},
    { value: 'Matraville'}          ,
    { value: 'Mays Hill'},
    { value: 'Mcgraths Hill'},
    { value: 'Mcmahons Point'}          ,
    { value: 'Meadowbank'},
    { value: 'Melrose Park'}          ,
    { value: 'Menai'},
    { value: 'Merrylands'},
    { value: 'Merrylands West'},
    { value: 'Middle Cove'}          ,
    { value: 'Middleton Grange'},
    { value: 'Miller'},
    { value: 'Millers Point'}          ,
    { value: 'Milperra'},
    { value: 'Milsons Point'}          ,
    { value: 'Minchinbury'},
    { value: 'Miranda'},
    { value: 'Mona Vale'}          ,
    { value: 'Monterey'},
    { value: 'Moorebank'},
    { value: 'Mortdale'},
    { value: 'Mortlake'},
    { value: 'Mosman'}          ,
    { value: 'Mount Colah'},
    { value: 'Mount Druitt'},
    { value: 'Mount Kuring-gai'},
    { value: 'Mount Lewis'},
    { value: 'Mount Pritchard'},
    { value: 'Mount Vernon'}          ,
    { value: 'Mulgrave'},
    { value: 'Naremburn'}          ,
    { value: 'Narrabeen'},
    { value: 'Narwee'},
    { value: 'Neutral Bay'},
    { value: 'Newington'}          ,
    { value: 'Newport'}          ,
    { value: 'Newtown'}          ,
    { value: 'Normanhurst'}          ,
    { value: 'North Balgowlah'}          ,
    { value: 'Northbridge'}          ,
    { value: 'North Epping'}          ,
    { value: 'North Manly'}          ,
    { value: 'Northmead'},
    { value: 'North Narrabeen'}          ,
    { value: 'North Parramatta'},
    { value: 'North Rocks'},
    { value: 'North Ryde'}          ,
    { value: 'North Strathfield'},
    { value: 'North Sydney'},
    { value: 'North Turramurra'}          ,
    { value: 'North Wahroonga'}          ,
    { value: 'North Willoughby'}          ,
    { value: 'Northwood'}          ,
    { value: 'Oakhurst'},
    { value: 'Oatlands'}          ,
    { value: 'Oatley'}          ,
    { value: 'Old Guildford'},
    { value: 'Old Toongabbie'},
    { value: 'Oyster Bay'}          ,
    { value: 'Paddington'}          ,
    { value: 'Padstow'},
    { value: 'Padstow Heights'},
    { value: 'Pagewood'}          ,
    { value: 'Palm Beach'}          ,
    { value: 'Panania'},
    { value: 'Parklea'},
    { value: 'Peakhurst'},
    { value: 'Peakhurst Heights'}          ,
    { value: 'Pemulwuy'},
    { value: 'Pendle Hill'},
    { value: 'Pennant Hills'}          ,
    { value: 'Penshurst'},
    { value: 'Petersham'},
    { value: 'Phillip Bay'}          ,
    { value: 'Picnic Point'},
    { value: 'Pitt Town'},
    { value: 'Pitt Town Bottoms'}          ,
    { value: 'Pleasure Point'},
    { value: 'Plumpton'},
    { value: 'Point Piper'}               ,
    { value: 'Port Hacking'}          ,
    { value: 'Potts Hill'},
    { value: 'Potts Point'},
    { value: 'Prairiewood'},
    { value: 'Prestons'},
    { value: 'Punchbowl'},
    { value: 'Putney'}          ,
    { value: 'Pymble'}          ,
    { value: 'Pyrmont'},
    { value: 'Queenscliff'},
    { value: 'Queens Park'}          ,
    { value: 'Ramsgate'},
    { value: 'Ramsgate Beach'},
    { value: 'Randwick'},
    { value: 'Redfern'},
    { value: 'Regents Park'},
    { value: 'Revesby'},
    { value: 'Revesby Heights'},
    { value: 'Rhodes'},
    { value: 'Riverview'}          ,
    { value: 'Riverwood'},
    { value: 'Rockdale'},
    { value: 'Rodd Point'}          ,
    { value: 'Rooty Hill'},
    { value: 'Rose Bay'}          ,
    { value: 'Rosebery'},
    { value: 'Rosehill'},
    { value: 'Roselands'},
    { value: 'Roseville'}          ,
    { value: 'Roseville Chase'}          ,
    { value: 'Rossmore'}          ,
    { value: 'Rouse Hill'}          ,
    { value: 'Rozelle'}          ,
    { value: 'Rushcutters Bay'},
    { value: 'Russell Lea'}          ,
    { value: 'Rydalmere'},
    { value: 'Ryde'},
    { value: 'Sackville North'},
    { value: 'Sadleir'},
    { value: 'Sandy Point'},
    { value: 'Sans Souci'},
    { value: 'Schofields'},
    { value: 'Scotland Island'},
    { value: 'Seaforth'}          ,
    { value: 'Sefton'},
    { value: 'Seven Hills'},
    { value: 'Silverwater'},
    { value: 'Smithfield'},
    { value: 'South Coogee'}          ,
    { value: 'South Granville'},
    { value: 'South Hurstville'},
    { value: 'South Maroota'},
    { value: 'South Turramurra'}          ,
    { value: 'South Wentworthville'},
    { value: 'South Windsor'},
    { value: 'Stanhope Gardens'},
    { value: 'Stanmore'}          ,
    { value: 'St Clair'},
    { value: 'St Ives'}          ,
    { value: 'St Ives Chase'}          ,
    { value: 'St Johns Park'},
    { value: 'St Leonards'},
    { value: 'St Peters'},
    { value: 'Strathfield'}          ,
    { value: 'Strathfield South'}          ,
    { value: 'Summer Hill'},
    { value: 'Sutherland'},
    { value: 'Sydenham'},
    { value: 'Sydney'},
    { value: 'Sylvania'},
    { value: 'Sylvania Waters'}          ,
    { value: 'Taren Point'}          ,
    { value: 'Telopea'},
    { value: 'Tempe'}          ,
    { value: 'Tennyson Point'}          ,
    { value: 'Terrey Hills'}          ,
    { value: 'The Ponds'},
    { value: 'The Rocks'}          ,
    { value: 'Thornleigh'},
    { value: 'Toongabbie'},
    { value: 'Turramurra'}          ,
    { value: 'Turrella'},
    { value: 'Ultimo'},
    { value: 'Vaucluse'}          ,
    { value: 'Villawood'},
    { value: 'Voyager Point'},
    { value: 'Wahroonga'}          ,
    { value: 'Waitara'},
    { value: 'Wakeley'},
    { value: 'Wareemba'},
    { value: 'Warrawee'}          ,
    { value: 'Warriewood'},
    { value: 'Warwick Farm'},
    { value: 'Waterfall'},
    { value: 'Waterloo'},
    { value: 'Wattle Grove'},
    { value: 'Waverley'}          ,
    { value: 'Waverton'}          ,
    { value: 'Wentworth Point'},
    { value: 'Wentworthville'},
    { value: 'West Hoxton'},
    { value: 'Westleigh'}          ,
    { value: 'Westmead'},
    { value: 'West Pennant Hills'}          ,
    { value: 'West Pymble'}          ,
    { value: 'West Ryde'},
    { value: 'Wetherill Park'},
    { value: 'Whalan'},
    { value: 'Whale Beach'}          ,
    { value: 'Wheeler Heights'}          ,
    { value: 'Wiley Park'},
    { value: 'Willoughby'}          ,
    { value: 'Willoughby East'}          ,
    { value: 'Windsor'},
    { value: 'Wolli Creek'},
    { value: 'Wollstonecraft'},
    { value: 'Woodcroft'},
    { value: 'Woodpark'},
    { value: 'Woollahra'}          ,
    { value: 'Woolloomooloo'},
    { value: 'Woolooware'}          ,
    { value: 'Woolwich'}          ,
    { value: 'Woronora'},
    { value: 'Woronora Heights'},
    { value: 'Yagoona'},
    { value: 'Yarrawarrah'},
    { value: 'Yennora'},
    { value: 'Yowie Bay'}          ,
    { value: 'Zetland'},
  ];
  
  var states = [
     { value: 'NSW'},
    { value: 'VIC'},
    { value: 'ACT'},
    { value: 'WA'},
    { value: 'SA'}          ,
    { value: 'NT'}          ,
    { value: 'QLD'},
    { value: 'TAS'}    ,
];


  // setup autocomplete function pulling from currencies[] array
  $('#suburbField').autocomplete({
    lookup: suburbs,
    onSelect: function (suggestion) {
      var thehtml = '<strong>suburb Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  
  // $('#stateField').autocomplete({
  //   lookup: states,
  //   onSelect: function (suggestion) {
  //     var thehtml = '<strong>state Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
  //     $('#outputcontent').html(thehtml);
  //   }
  // });

});