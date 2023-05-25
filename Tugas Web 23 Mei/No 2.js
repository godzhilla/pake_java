var praktikan = confirm("Apakah anda praktikan PPW1 ?");
        var forms = document.getElementById("input-1");
        if (praktikan){
            forms.innerHTML = '<div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">Nama</span><input type="text" class="form-control" placeholder="Nama" aria-label="Username" aria-describedby="basic-addon1" id="nama"></div><div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">NIM</span><input type="text" class="form-control" placeholder="NIM" aria-label="Username" aria-describedby="basic-addon1" id="nim"></div><div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">Angkatan</span><input type="text" class="form-control" placeholder="Angkatan" aria-label="Username" aria-describedby="basic-addon1" id="angkatan"></div><button type="button" class="btn btn-outline-warning" onclick="submit()" style="margin-left: 150px;">SUBMIT</button>';
        }else{
            alert("Anda bukan praktikan PPW1, anda tidak boleh masuk!");
        }
    
        var counter = 1
        function submit(){
            var table = document.getElementById("tabel")
            table.innerHTML += '<tr><th scope="row">' + counter + '</th><td>' + document.getElementById("nama").value + '</td><td>' + document.getElementById("nim").value + '</td><td>' + document.getElementById("angkatan").value + '</td></tr>'
            counter++;
        }    