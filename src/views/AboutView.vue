<template>
  <div>
    <header>
      <h1 class="lsk" > Pendaftaran Buku dan Peminjaman buku</h1>
    </header>

    <main>
      <section>
        <h2>Formulir Pendaftaran Buku</h2>
        <form>
          <div>
            <label for="judul">Judul Buku:</label>
            <input type="text" id="judul" v-model="book.judul" required>
          </div>

          <div>
            <label for="penulis">Penulis:</label>
            <input type="text" id="penulis" v-model="book.penulis" required>
          </div>

          <div>
            <label for="penerbit">Penerbit:</label>
            <input type="text" id="penerbit" v-model="book.penerbit" required>
          </div>

          <div>
            <label for="tahun">Tahun Terbit:</label>
            <input type="number" id="tahun" v-model="book.tahun" required>
          </div>
          <h4></h4>
          <div>
            <button type="submit" @click.prevent="submitBook">Daftar</button>
          </div>
        </form>
      </section>

    </main>

    <footer>
      <p>&copy; 2023 Pendaftaran Buku dan Peminjaman Milik Ar2B</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        judul: '',
        penulis: '',
        penerbit: '',
        tahun: null,
      },
      borrower: {
        nama: '',
        alamat: '',
        telepon: '',
      },
    };
  },
  methods: {
  submitBook() {
    // Kirim data buku ke server
    console.log('Data buku telah dikirim:', this.book);

    // Reset form buku
    this.book = {
      judul: '',
      penulis: '',
      penerbit: '',
      tahun: null,
    };

    // Tampilkan pop-up
    window.alert('Data buku telah berhasil didaftarkan!');
  },
},
};


</script>
<style>
  .lsk{


    text-decoration: underline; /* align teks */
    color: #f0f0f0; /* warna font */
 
  }
</style>
