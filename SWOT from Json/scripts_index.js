Element.prototype.getElementById = function (id) {
            return document.getElementById(id);
        }
        function showFileInput() {
            var fileInput = document.getElementById("file-input");
            fileInput.click();
        }
		
		function loadTestFile(){
			var loadFile = document.getElementById("getTestFile");
			loadFile.click();
		}
		
		function loadTestFile(){
			var loadFile = document.getElementById("getTestFile");
			loadFile.click();
		}
		
		function goTo_json_creator() {
			var loadFile = document.getElementById("goTo_json_creator");
			loadFile.click();
		}
		
        function checkCorrect(json) {
            var correctKeys = ["id", "name", "S-O", "W-O", "S-T", "W-T"];
            for (i = 0; i < Object.keys(json).length; i++) {
                for (j = 0; j < 6; j++) {
                    if (Object.keys(json[i])[j] != correctKeys[j]) {
                        return false;
                    }
                }
            }
            return true;
        }
        var json;
        function handleFileSelect(files) {
            if (document.getElementById("ul-id1").firstChild) {
                var ul_id1 = document.getElementById("ul-id1");
                while (ul_id1.firstChild) {
                    ul_id1.removeChild(ul_id1.firstChild);
                }
            }
            if (document.getElementById("ul-id2").firstChild) {
                var ul_id2 = document.getElementById("ul-id2");
                while (ul_id2.firstChild) {
                    ul_id2.removeChild(ul_id2.firstChild);
                }
            }
            if (document.getElementById("ul-id3").firstChild) {
                var ul_id3 = document.getElementById("ul-id3");
                while (ul_id3.firstChild) {
                    ul_id3.removeChild(ul_id3.firstChild);
                }
            }
            if (document.getElementById("ul-id4").firstChild) {
                var ul_id4 = document.getElementById("ul-id4");
                while (ul_id4.firstChild) {
                    ul_id4.removeChild(ul_id4.firstChild);
                }
            }
            var input = document.getElementById('file-input');
            if (!input.files) {
                alert("Ваш браузер, похоже, не поддерживает свойство `files` для ввода файлов.");
            }
            else if (!input.files[0]) {
                alert("Пожалуйста, выберите файл для обработки!");
				document.getElementById('table').style.display = 'none';
            }
            else {
                var files = files[0];
                var reader = new FileReader();
                reader.onload = (function (theFile) {
                    return function (e) {
                        try {
                            json = JSON.parse(e.target.result);
                            if (checkCorrect(json)) {
                                addJson();
                                document.getElementById('table').style.display = 'block';
                                document.getElementById('upload_button').style.marginTop = '20px';
                            }
                            else {
                                alert("Загруженный json-файл не может быть обработан!");
                            }
                        }
                        catch {
                            alert("Неверная структура данного json-файла!");
                        }

                    }
                })(files);
                reader.readAsText(files);
            }
        }
        function addJson() {
            for (i = 0; i < json.length; i++) {
                if (json[i]["W-O"] != null) {
                    var element = document.getElementById('W-O').getElementById("ul-id1");
                    var li = document.createElement('li');
                    li.innerHTML = "Если - " + json[i]["name"] +", то - <br>" + json[i]["W-O"];
                    element.appendChild(li);

                }
                if (json[i]["S-O"] != null) {
                    var element = document.getElementById('S-O').getElementById("ul-id2");
                    var li = document.createElement('li');
                    li.innerHTML = "Если - " + json[i]["name"] +", то - <br>" + json[i]["S-O"];
                    element.appendChild(li);

                }
                if (json[i]["S-T"] != null) {
                    var element = document.getElementById('S-T').getElementById("ul-id3");
                    var li = document.createElement('li');
                    li.innerHTML = "Если - " + json[i]["name"] +", то - <br>" +  json[i]["S-T"];
                    element.appendChild(li);

                }
                if (json[i]["W-T"] != null) {
                    var element = document.getElementById('W-T').getElementById("ul-id4");
                    var li = document.createElement('li');
                    li.innerHTML = "Если - " + json[i]["name"] +", то - <br>" + json[i]["W-T"];
                    element.appendChild(li);
                }
            }
        }