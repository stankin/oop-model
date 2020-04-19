function mainMenu(){
			href_goMainMenu.click();
		}
		
		function getJson(){
			if(document.getElementById('input_factorName').value == ''){
				alert('Введите имя фактора!');
				return;
			}
			var name = document.getElementById('input_factorName').value;
			var SO = document.getElementById('area_S-O').value == "" ? null : '"' + document.getElementById('area_S-O').value + '"';
			var WO = document.getElementById('area_W-O').value == "" ? null : '"' + document.getElementById('area_W-O').value + '"';
			var ST = document.getElementById('area_S-T').value == "" ? null : '"' + document.getElementById('area_S-T').value + '"';
			var WT = document.getElementById('area_W-T').value == "" ? null : '"' + document.getElementById('area_W-T').value + '"';
			var data = '[{' +
				'"id": 1,' +
				'"name": "' + name + '",' +
				'"S-O": ' + SO + ',' +
				'"W-O": ' + WO + ',' +
				'"S-T": ' + ST + ',' +
				'"W-T": ' + WT + '' +		  
			'}]';
			data = JSON.parse(data);
			downloadJson(JSON.stringify(data,"",4),'data.json','text/plain');
		}
		
		function downloadJson(content, fileName, contentType) {
			var a = document.createElement("a");
			var file = new Blob([content], {type: contentType});
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
		}