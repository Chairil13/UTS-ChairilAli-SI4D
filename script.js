function hitung() {
  var judul = document.getElementById("judul").value;
  var kategori = document.getElementById("kategori").value;
  var jumlah = document.getElementById("jumlah").value;
  var harga = document.getElementById("harga").value;
  var novel = document.getElementById("novel").value;
  var majalah = document.getElementById("majalah").value;
  var ensiklopedia = document.getElementById("ensiklopedia").value;

  // rumus sebelum diskon
  var totalSebelum = jumlah * harga;

  // jika pembelian kurang dari 5 buku
  if (kategori == novel && jumlah < 5) {
    var dis = totalSebelum - (0.02 * totalSebelum); // rumus setelah diskon (diskon 2%)
    document.getElementById("totalSetelah").innerHTML = dis;
    document.getElementById("diskonBuku").innerHTML = "2%";
  } else if (kategori == majalah && jumlah < 5) {
    var dis = totalSebelum - (0.03 * totalSebelum); // rumus setelah diskon (diskon 3%)
    document.getElementById("totalSetelah").innerHTML = dis;
    document.getElementById("diskonBuku").innerHTML = "3%";
  } else if (kategori == ensiklopedia && jumlah < 5) {
    var dis = totalSebelum - (0.05 * totalSebelum); // rumus setelah diskon (diskon 5%)
    document.getElementById("totalSetelah").innerHTML = dis;
    document.getElementById("diskonBuku").innerHTML = "5%";
  }

  // jika pembelian lebih dari 5 buku
  if (kategori == novel && jumlah >= 5) {
    var dis = totalSebelum - (0.04 * totalSebelum); // rumus setelah diskon (diskon 4%)
    document.getElementById("totalSetelah").innerHTML = dis;
    document.getElementById("diskonBuku").innerHTML = "4%";
  } else if (kategori == majalah && jumlah >= 5) {
    var dis = totalSebelum - (0.05 * totalSebelum); // rumus setelah diskon (diskon 5%)
    document.getElementById("totalSetelah").innerHTML = dis;
    document.getElementById("diskonBuku").innerHTML = "5%";
  } else if (kategori == ensiklopedia && jumlah >= 5) {
    var dis = totalSebelum - (0.07 * totalSebelum); // rumus setelah diskon (diskon 7%)
    document.getElementById("totalSetelah").innerHTML = dis;
    document.getElementById("diskonBuku").innerHTML = "7%";
  }

  // mengambil data inputan dari variabel yang telah dibuat dan menampilkannya di halaman web
  document.getElementById("kategoriBuku").innerHTML = kategori;
  document.getElementById("judulBuku").innerHTML = judul;
  document.getElementById("jumlahBuku").innerHTML = jumlah;
  document.getElementById("hargaBuku").innerHTML = harga;
  document.getElementById("totalSebelum").innerHTML = totalSebelum;
}

// Reset Data
function reset() {
  document.getElementById("judul").value = "";
  document.getElementById("judulBuku").innerHTML = "";
  document.getElementById("kategori").value = "";
  document.getElementById("kategoriBuku").innerHTML = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("jumlahBuku").innerHTML = "";
  document.getElementById("harga").value = "";
  document.getElementById("hargaBuku").innerHTML = "";
  document.getElementById("diskonBuku").innerHTML = "";
  document.getElementById("totalSebelum").innerHTML = "";
  document.getElementById("totalSetelah").innerHTML = "";
}

// efek partikel animation pada background menggunakan library particles.js
particlesJS("particles-js", {
  "particles":{
  "number": {
    "value": 200
  }, 
  "color": {
    "value": "#fff"
  }, 
  "shape": {
    "type": "circle",
  }, 
  "opacity": {
    "value": 0.5, 
    "random": true, 
    "anim": {
      "enable": true, 
      "speed": 3
    }
  }, 
    "size": {
      "value": 5
  }, 
    "move": {
    "enable": true,
    "speed": 2, 
    "direction": "top" 
  } 
}, 

"interactivity": {
  "events": {
    "onhover": {
      "enable": true, 
      "mode": "repulse"
    },
    "onclick": {
      "enable": true, 
      "mode": "push"
    }
  },
  "modes": {
    "repulse": {
      "distance": 90, 
      "duration": 0.4
    }
  }
}
});