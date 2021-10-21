$(function(){
    $("#nama_barang_error_message").hide();
    $("#harga_barang_error_message").hide();
    $("#barcode_error_message").hide();

    var error_nama_barang = false;
    var error_harga = false;
    var error_barcode = false;

    $("#inputBarang").focusout(function(){
        check_barang();
     });

     $("#inputHarga").focusout(function(){
        check_harga();
     });

     $("#inputBarcode").focusout(function(){
        check_barcode();
     });

function check_barang() {
        var barang_length = $("#inputBarang").val().length;
        if (barang_length < 10) {
           $("#nama_barang_error_message").html("Nama Barang minim 10 karakter");
           $("#nama_barang_error_message").show();
           error_nama_barang = true;
        } else {
           $("#nama_barang_error_message").hide();
        }
     }
})

function check_harga() {    
    var hargaBarang = $("#inputHarga").val();
    if (hargaBarang > 5000) {
       $("#harga_message").hide();
    } else {
       $("#harga_error_message").html("Harga Barang harus angka dan minimal 5000");
       $("#harga_error_message").show();
       error_harga = true;
    }
 }

check_barcode = () => {
    const kode_barcode = $("#inputBarcode").val();
    if (kode_barcode.length >= 10) {
      $("#barcode_error_message").hide();
    } else {
      $("#barcode_error_message").html("Kode Barkode harus angka dan minimal 10 karakter");
      $("#barcode_error_message").show();
      error_barcode = true;
    }
  };

$("#inputForm").submit(function(){
    error_nama_barang = false;
    error_harga = false;
    error_barcode = false;
    
    check_barang();
    check_harga();
    check_barcode();

    if (error_nama_barang === false && error_harga === false && error_barcode === false) {
        alert("trimakasih");
        return true;
     } else {
        alert("Please Fill the form Correctly");
        return false;
     }
})

