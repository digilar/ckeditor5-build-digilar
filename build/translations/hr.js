(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1",Aquamarine:"Akvamarin",Black:"Crna",Blue:"Plava",Bold:"Podebljano","Bulleted List":"Obična lista",Cancel:"Poništi","Choose heading":"Odaberite naslov",Code:"Kod",Column:"Kolona","Delete column":"Obriši kolonu","Delete row":"Obriši red","Dim grey":"Tamnosiva",Downloadable:"Moguće preuzeti","Dropdown toolbar":"Traka padajućeg izbornika","Edit block":"Uredi blok","Edit link":"Uredi vezu","Editor toolbar":"Traka uređivača",Green:"Zelena",Grey:"Siva","Header column":"Kolona zaglavlja","Header row":"Red zaglavlja",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","Insert column left":"Umetni stupac lijevo","Insert column right":"Umetni stupac desno","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Ubaci red iznad","Insert row below":"Ubaci red ispod","Insert table":"Ubaci tablicu",Italic:"Ukošeno","Light blue":"Svijetloplava","Light green":"Svijetlozelena","Light grey":"Svijetlosiva",Link:"Veza","Link URL":"URL veze","Merge cell down":"Spoji ćelije prema dolje","Merge cell left":"Spoji ćelije prema lijevo","Merge cell right":"Spoji ćelije prema desno","Merge cell up":"Spoji ćelije prema gore","Merge cells":"Spoji ćelije",Next:"Sljedeći","Numbered List":"Brojčana lista","Open in a new tab":"Otvori u novoj kartici","Open link in new tab":"Otvori vezu u novoj kartici",Orange:"Narančasta",Paragraph:"Paragraf",Previous:"Prethodni",Purple:"Ljubičasta",Red:"Crvena","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0",Row:"Red",Save:"Snimi","Select column":"Odaberi stupac","Select row":"Odaberi redak","Show more items":"Prikaži više stavaka","Split cell horizontally":"Razdvoji ćeliju vodoravno","Split cell vertically":"Razdvoji ćeliju okomito",Strikethrough:"Precrtano",Subscript:"Indeks",Superscript:"Eksponent","Table toolbar":"Traka za tablice","This link has no URL":"Ova veza nema URL",Turquoise:"Tirkizna",Underline:"Podcrtavanje",Unlink:"Ukloni vezu",White:"Bijela","Widget toolbar":"Traka sa spravicama",Yellow:"Žuta"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));