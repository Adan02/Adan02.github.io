var tabel = document.getElementById("tabel"),
    form = document.getElementById("isiData");

    function tampilkanData(e){
        var tabel = document.getElementById("tabel"),
            name = document.getElementById("isiNama"),
            nim = document.getElementById("isiNIM");
            prodi = document.getElementById("isiProdi"),
            email = document.getElementById("isiEmail");
        
        if(tabel.rows.namedItem(nim.value)){
            alert("NIM sudah terdaftar");
            tabel.deleteRow();
        }
        
        student.nama = name.value;
        student.nim = nim.value;
        student.prodi = prodi.value;
        student.email = email.value;

        var baris = tabel.insertRow();

        baris.id = student.nim;
        baris.insertCell().appendChild(document.createTextNode(student.nama));
        baris.insertCell().appendChild(document.createTextNode(student.nim));
        baris.insertCell().appendChild(document.createTextNode(student.prodi));
        baris.insertCell().appendChild(document.createTextNode(student.email));

        var Hapus = document.createElement("input");
            Hapus.type = "button";
            Hapus.value = "Hapus";    
            Hapus.id = student.nim;       
            baris.insertCell().appendChild(Hapus);
    
        if(student.nama == "" || student.nim  == "" || student.prodi == "" || student.email == ""){
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

function data(nama,nim,prodi,email) {
    this.nama = nama;
    this.nim = nim;
    this.prodi = prodi;
    this.email = email;
    
}
let student = new data();
student = {
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
}
