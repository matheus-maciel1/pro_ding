categoria = null;
id = null;
avaliacao = 0;
internet = null;

if (localStorage.getItem("ProDing_Cor") == undefined || localStorage.getItem("ProDing_Cor") == null) {
    localStorage.setItem("ProDing_Cor", "rgb(0,112,253)");
}

/*function uploadArq(){
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI("http://some.server.com/upload.php"), win, fail, options);
}*/

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.CELL]     = 'generic';
    states[Connection.NONE]     = 'No';
    
    internet = states[networkState];
}

function Tour(){
    if (localStorage.getItem('ProDing_tour') != undefined || localStorage.getItem('ProDing_tour') != null)
    {    
      window.location = "#/page5";      
    }
}

function LivroDownload(idx, imgx, urlx){
    var i=0;
    for(i=0; i<=999; i++)
    {
        var idy = localStorage.getItem("ProDing_IDX[" + i + "]");
        var imgy = localStorage.getItem("ProDing_IMGX[" + i + "]");
        var urly = localStorage.getItem("ProDing_URLX[" + i + "]");
        var indice = i;
        if(idy == null || imgy   == null || urly   == null) 
        { 
          break;
        } 
    } 
    localStorage.setItem("ProDing_IDX["+ indice +"]", idx);
    localStorage.setItem("ProDing_IMGX["+ indice +"]", imgx);
    localStorage.setItem("ProDing_URLX["+ indice +"]", urlx);
    alert("Gravado!");
    indice++;
}

function ExecDialog1(){
    function facaalgo(buttonIndex){
        if(buttonIndex == 1){
            window.location= "#/page12"
        }
    } 
    navigator.notification.alert(
        'Seu download foi iniciado e logo aparecerá nos seus downloads, deseja ir para a página?',
        facaalgo,
        'Aviso!',
        ['Ir','Ficar']
    );
}

function ValidaLogin(user,pwd) {
    logado = 0;
    localStorage.setItem("ProDing_log","0");
    var xmlhttp = new XMLHttpRequest();
    var url = "https://proding.ml/root/verify1.php?user=" + user+ "&pwd=" + pwd;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidorX(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidorX(response) {
        if (response == ''){
            dados = '';
        }
        var dados = JSON.parse(response);
        var i;
        if (dados.length == 1) {
            logado = 1;
            localStorage.setItem("ProDing_log","1");
            for (i = 0; i < dados.length; i++) {
                localStorage.setItem("ProDing_Id_usuario", dados[i].tb01_id_usuario);
                localStorage.setItem("ProDing_Usuario", dados[i].tb01_login);
                localStorage.setItem("ProDing_Email", dados[i].tb01_email);
                localStorage.setItem("ProDing_Nome_comp", dados[i].tb01_nome_comp);
                localStorage.setItem("ProDing_Tipo_conta", dados[i].tb01_tipo_conta);
                id_usuario = localStorage.getItem("ProDing_Id_usuario");
                usuario = localStorage.getItem("ProDing_Usuario");
            }
            if(logado > 0){       
               window.location = "index.html#/side-menu21/page10";
                 navigator.notification.alert(
                    'Logado com sucesso!',
                    'AVISO!',
                    'OK');
            } 
            else {
               navigator.notification.alert(
                    'Por favor, insira um usuário e senha válidos!',  // message
                    'OK'                  // buttonName
                );
            }       
        }
    }
}

function RetornaURL1() {
    var url = window.location.href;
    var partes = url.split('?');
    if (partes[1] !== undefined) {
        var partes2 = partes[1].split('=');
        console.log(partes2[1]);
        categoria = partes2[1];
    } else {
        console.log('Não há parametros na url desta página');
    }
}

function RetornaURL2() {
    var url = window.location.href;
    var partes = url.split('?');
    if (partes[1] !== undefined) {
        var partes2 = partes[1].split('=');
        console.log(partes2[1]);
        id = partes2[1];
    } else {
        console.log('Não há parametros na url desta página');
    }
}

function ListBooks() {
    if (categoria !== null) {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://proding.ml/root/list_books.php?genero=" + categoria + "";
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ConectaServidor(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function ConectaServidor(response) {
            var dados = JSON.parse(response);
            var i;
            var conteudo = "";
            for (i = 0; i < dados.length; i++) {
                conteudo += '<a href="index.html#/side-menu21/page13?id=' + dados[i].tb03_id_livro + '" target="_parent"><img style="width:110px; height:180px;" src="https://proding.ml/root/adm/img/' + dados[i].tb03_capa + '"></a>  ';
            }
            document.getElementById('conteudoPagSel').innerHTML = conteudo;
        }
    }
}

function ListDownloads() {
    var conteudox = "";
    var i = 0;
    for(i=0; i<=999; i++)
    {
        var book = localStorage.getItem("ProDing_IDX[" + i + "]"); // verifica se há recheio nesta posição. 
        if(book == null){
            break;
        }
        conteudox += '<a href="/storage/emulated/0/Download/'+localStorage.getItem("ProDing_URLX["+ i +"]")+'" target="_parent"><img style="width:110px; height:180px;" src="/storage/emulated/0/Download/'+localStorage.getItem("ProDing_IMGX["+ i +"]")+'"></a>  ';
    }
    document.getElementById("conteudoDown").innerHTML = conteudox;
}

function ListNac() {
    var xmlhttp = new XMLHttpRequest()
    var url = "http://proding.ml/root/list_nac.php";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidorZ(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidorZ(response) {
        var dados = JSON.parse(response);
        var i;
        var conteudo = "";
        for (i = 0; i < dados.length; i++) {
            conteudo += '<div><a href="index.html#/side-menu21/page13?id=' + dados[i].tb03_id_livro + '" target="_parent"><img style="width:100%; height:60%;" src="https://proding.ml/root/adm/img/' + dados[i].tb03_capa + '"></a></div>';
        }
        document.getElementById('conteudoListNac').innerHTML = conteudo;
        var slider = tns({
            container: '#conteudoListNac',
            items: 3,
            slideBy: 'page',
            "mouseDrag": true,
            "speed": 400,
            controls: false,
            nav: false,
            gutter: 5
        });
    }
}

function ListRecent() {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://proding.ml/root/list_recent.php";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidorA(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidorA(response) {
        var dados = JSON.parse(response);
        var i;
        var conteudo = "";
        for (i = 0; i < dados.length; i++) {
            conteudo += '<div><a href="index.html#/side-menu21/page13?id=' + dados[i].tb03_id_livro + '" target="_parent"><img style="width:100%; height:80%;" src="https://proding.ml/root/adm/img/' + dados[i].tb03_capa + '"></a></div>';
        }
        document.getElementById('conteudoListRecent').innerHTML = conteudo;
        var slider = tns({
            container: '#conteudoListRecent',
            items: 3,
            slideBy: 'page',
            "mouseDrag": true,
            "speed": 400,
            controls: false,
            nav: false,
            gutter: 5
        });
    }
}

function CarSinopse() {

    if (id !== null) {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://proding.ml/root/list_book_solo.php?id=" + id;
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ConectaServidor1(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function ConectaServidor1(response) {
            var dados = JSON.parse(response);
            var i;
            var conteudo = "";
            for (i = 0; i < dados.length; i++) {
                conteudo += '<ion-content padding="true" class="has-header"><div class="card"><div class="item item-text-wrap" id="titulo" align="center"> ' + dados[i].tb03_titulo + ' </div><div class="item item-text-wrap" id="capa" align="center"><img style="width:70%" src="https://proding.ml/root/adm/img/' + dados[i].tb03_capa + '"></div><div class="item item-text-wrap" id="sinopse" style="text-align: justify"> ' + dados[i].tb03_sinopse + '</div><div class="item item-text-wrap" id="genero"><i class="ion-social-buffer"></i> ' + dados[i].tb03_genero + ' </div><div class="item item-text-wrap" id="autor"><i class="ion-person"></i> ' + dados[i].tb03_autor + ' </div><a href="javascript:void(0)" onclick="DownloadPDF(`' + dados[i].tb03_url  + '`,`' + dados[i].tb03_capa  + '`); ExecDialog1();" id="download" class="button button-balanced button-block button-clear icon-left ion-ios-cloud-download">Baixar o livro</a><a href="javascript:void(0)" onclick="AbrirPDF(`' + dados[i].tb03_url  + '`)" id="lerolivro" class="button button-positive button-block button-clear"></i>Ler o livro</a></div><div class="card"><a href="index.html#/side-menu21/page20" id="comentar" class="button button-dark button-block button-clear icon-left ion-chatbox-working">Comentar</a></div>';
            }
            document.getElementById('conteudoPagSin').innerHTML = conteudo;
        }
    }
}

function AbrirPDFOFF(pdf_url1){
    cordova.plugins.fileOpener2.open(
    '/storage/emulated/0/Download/'+pdf_url1,
    'application/pdf', 
    { 
        error : function(e) { 
            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {
            console.log('file opened successfully'); 				
        }
    }
);
}

function AbrirPDF(pdf_url){
      window.open(encodeURI('https://docs.google.com/gview?embedded=true&url=http://proding.ml/root/adm/docs/books/' + pdf_url), '_blank', 'location=no,EnableViewPortScale=yes');  
}

function DownloadPDF(pdf_url, imgd){
    window.open(encodeURI('http://proding.ml/root/download.php?arquivo=adm/docs/books/' + pdf_url) , '_blank', 'location=no,EnableViewPortScale=yes');
    window.open(encodeURI('http://proding.ml/root/download1.php?file=adm/img/' + imgd) , '_blank', 'location=no,EnableViewPortScale=yes');
}

function CarComent() {
    if (id !== null) {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://proding.ml/root/list_coment.php?id=" + id;
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ConectaServidor0(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        function ConectaServidor0(response) {
            var dados = JSON.parse(response);
            var i;
            conteudo = "";
            for (i = 0; i < dados.length; i++) {
                conteudo += '<div class="card"><div class="item item-text-wrap" id="nomeusuario"><i class="ion-ios-person-outline"></i> ' + dados[i].tb01_login + ' </div><div class="item item-text-wrap" id="conteudocomentario" align="center"> ' + dados[i].tb02_conteudo + ' </div>';
                CarAval(dados[i].tb02_rentabilidade);
            }
            document.getElementById('conteudoComent').innerHTML = conteudo;
        }
    }
}

function SendComent() {
    var xmlhttp = new XMLHttpRequest();
    var conteudo = document.getElementById("contComent").value;
    var id_livro = id;
    var rent = avaliacao;
    var url = "https://proding.ml/root/send_coment.php?conteudo=" + conteudo + "&id_usuario=" + localStorage.getItem("ProDing_Id_usuario") + "&id_livro=" + id_livro + "&rent=" + rent;
    console.log(url);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidorP(xmlhttp.responseText);
        }
        console.log(xmlhttp.readyState);
        console.log(xmlhttp.status);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function ConectaServidorP(response) {
        var dados = JSON.parse(response);
    }
}

function RegUsers() {
    var xmlhttp = new XMLHttpRequest();
    var senha = document.getElementById("senha1").value;
    var login = document.getElementById("usuario1").value;
    var dt_nasc = document.getElementById("dt_nasc").value;
    var email = document.getElementById("email").value;
    var nome_comp = document.getElementById("nome_comp").value;
    var genero = document.getElementById("genero").value;
    var url = "https://proding.ml/root/reg_users.php?senha=" + senha + "&login=" + login + "&dt_nasc=" + dt_nasc + "&email=" + email + "&tipo_conta=0&genero=" + genero + "&nome_comp=" + nome_comp+"";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidorM(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidorM(response) {
        var dados = JSON.parse(response);
    }
}

function RegAprov() {
    var xmlhttp = new XMLHttpRequest();
    var id_usuario = localStorage.getItem("ProDing_id_usuario");
    var genero = $('#usuario').val();
    var url1 = $('#pdf').val();
    var sinopse = $('#sinopse').val();
    var capa = $('#pic').val();
    var titulo_obra = $('#titulo').val();
    var url = "https://proding.ml/root/reg_aprov.php?id_usuario=" + id_usuario + "&genero=" + genero + "&url=" + url1 + "&sinopse=" + sinopse + "&capa=" + capa + "&titulo_obra=" + titulo_obra;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidor2(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidor2(response) {
        var dados = JSON.parse(response);
    }
}

function Avaliar(estrela) {

    var url = window.location;
    url = url.toString();
    url = url.split("index.html");
    url = url[0];

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;


    if (estrela == 5) {
        if (s5 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star1.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 4;
        }
    }

    //ESTRELA 4
    if (estrela == 4) {
        if (s4 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 4;
        } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 3;
        }
    }

    //ESTRELA 3
    if (estrela == 3) {
        if (s3 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 3;
        } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 2;
        }
    }

    //ESTRELA 2
    if (estrela == 2) {
        if (s2 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 1;
        }
    }

    //ESTRELA 1
    if (estrela == 1) {
        if (s1 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "img/star0.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 0;
        }
    }
}

function CarAval(estrela1) {

    if (estrela1 == 5) {
        conteudo += '<div class="item item-text-wrap" id="avaliacao"><img src="img/star1.png" id="s1"><img src="img/star1.png" id="s2"><img src="img/star1.png" id="s3"><img src="img/star1.png" id="s4"><img src="img/star1.png" id="s5"></div></div>';
    }

    if (estrela1 == 4) {
        conteudo += '<div class="item item-text-wrap" id="avaliacao"><img src="img/star1.png" id="s1"><img src="img/star1.png" id="s2"><img src="img/star1.png" id="s3"><img src="img/star1.png" id="s4"><img src="img/star0.png" id="s5"></div></div>';
    }

    if (estrela1 == 3) {
        conteudo += '<div class="item item-text-wrap" id="avaliacao"><img src="img/star1.png" id="s1"><img src="img/star1.png" id="s2"><img src="img/star1.png" id="s3"><img src="img/star0.png" id="s4"><img src="img/star0.png" id="s5"></div></div>';
    }

    if (estrela1 == 2) {
        conteudo += '<div class="item item-text-wrap" id="avaliacao"><img src="img/star1.png" id="s1"><img src="img/star1.png" id="s2"><img src="img/star0.png" id="s3"><img src="img/star0.png" id="s4"><img src="img/star0.png" id="s5"></div></div>';
    }

    if (estrela1 == 1) {
        conteudo += '<div class="item item-text-wrap" id="avaliacao"><img src="img/star1.png" id="s1"><img src="img/star0.png" id="s2"><img src="img/star0.png" id="s3"><img src="img/star0.png" id="s4"><img src="img/star0.png" id="s5"></div></div>';
    }

    if (estrela1 == 0) {
        conteudo += '<div class="item item-text-wrap" id="avaliacao"><img src="img/star0.png" id="s1"><img src="img/star0.png" id="s2"><img src="img/star0.png" id="s3"><img src="img/star0.png" id="s4"><img src="img/star0.png" id="s5"></div></div>';
    }
}

///storage/emulated/0/Download/16hrs.csv
///storage/emulated/0/path/to/file  