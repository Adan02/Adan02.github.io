var tabel = document.getElementById("tabel"),
    form = document.getElementById("isiData");

    function tampilkanData(e){
        var tabel = document.getElementById("tabel"),
            name = document.getElementById("isiNama"),
            nim = document.getElementById("isiNIM");
            prodi = document.getElementById("isiProdi");
            email = document.getElementById("isiEmail");
        
        data.nama = name.value;
        data.nim = nim.value;
        data.prodi = prodi.value;
        data.email = email.value;

        var baris = tabel.insertRow();

        baris.id = data.nim;
        baris.insertCell().appendChild(document.createTextNode(data.nama));
        baris.insertCell().appendChild(document.createTextNode(data.nim));
        baris.insertCell().appendChild(document.createTextNode(data.prodi));
        baris.insertCell().appendChild(document.createTextNode(data.email));

        var Hapus = document.createElement("input");
            Hapus.type = "button";
            Hapus.value = "Hapus";    
            Hapus.id = data.nim;       
            baris.insertCell().appendChild(Hapus);
    
        if(data.nama == "" || data.nim  == "" || data.prodi == "" || data.email == ""){
            alert("Harap lengkapi formulir sebelum menekan tombol daftar");
            tabel.deleteRow();
        }

        e.preventDefault();
    }
    function hapusData(e){
        if (e.target.type == "button") {                
            tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
        }
    }
    
form.addEventListener("submit",tampilkanData,false);
tabel.addEventListener("click", hapusData, true); 

let data = {
    nama : "",
    nim : "",
    prodi :"",  
    email :"", 
    
    set setNama(newNama){
        this.nama = newNama;
    },
    get getNama(){
        return this.nama;
    },
    set setNim(newNim){
        this.nim = newNim;
    },
    get getNim(){
        return this.nim;
    },
    set setProdi(newProdi){
        this.prodi = newProdi;
    },
    get getProdi(){
        return this.prodi;
    },
    set setEmail(newEmail){
        this.email = newEmail;
    },
    get getEmail(){
        return this.email;
    } 
};