<style>
  /* Tab content - closed */
  .tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.35s;
    -o-transition: max-height 0.35s;
    transition: max-height 0.35s;
  }
  /* :checked - resize to full height */
  .tab input:checked ~ .tab-content {
    max-height: 100vh;
  }
  /* Label formatting when open */
  .tab input:checked + label {
    /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
    font-size: 1.25rem; /*.text-xl*/
    padding: 1.25rem; /*.p-5*/
    border-left-width: 2px; /*.border-l-2*/
    border-color: #d53f8c; /*.border-indigo*/
    background-color: #f8fafc; /*.bg-gray-100 */
    color: #d53f8c; /*.text-indigo*/
  }
  /* Icon */
  .tab label::after {
    float: right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 1.25rem;
    text-align: center;
    -webkit-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
  }
  /* Icon formatting - closed */
  .tab input[type="checkbox"] + label::after {
    content: "+";
    font-weight: bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
  }
  .tab input[type="radio"] + label::after {
    content: "\25BE";
    font-weight: bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
  }
  /* Icon formatting - open */
  .tab input[type="checkbox"]:checked + label::after {
    transform: rotate(315deg);
    background-color: #d53f8c; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
  }
  .tab input[type="radio"]:checked + label::after {
    transform: rotateX(180deg);
    background-color: #d53f8c; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
  }
</style>

<div
  class="overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg
  rounded-t border-red-light w-full">
  <div class="px-2 py-2 mb-2 mt-2 mb-8">
    <ul class="flex">
      <li class="mr-3">
        <a
          class="inline-block border border-blue-500 rounded py-1 px-3
          bg-blue-500 text-white"
          href=".">
          Kembali
        </a>
      </li>
      <li class="mr-3">
        <span
          class="inline-block border border-white rounded text-black py-1 px-3">
          Betul Ke?
        </span>
      </li>
    </ul>
  </div>

  <div class="w-full mx-auto p-3 mt-0 bg-gray">
    
      Pasti setiap dari kita pernah menerima maklumat mengenai ‘penawar kencing
      manis’ dan lain-lain ‘ubat ajaib’ yang menjanjikan kesembuhan dari
      pelbagai penyakit dan masalah. Tetapi, adakah anda pasti tentang kesahihan
      setiap maklumat yang anda baca? Di zaman siber ini, begitu mudah untuk
      sesiapa sahaja menulis tentang apa sahaja. Malang sekali perkara ini
      memberi peluang kepada segelintir orang untuk menipu orang lain samada
      kerana suka-suka atau untuk mengaut keuntungan dari menjual produk yang
      diusahakan mereka. Berikut adalah tips untuk anda setiap kali membaca
      maklumat kesihatan terutamanya yang kedengaran seperti mempunyai manfaat
      yang tidak masuk akal.
    
    <div class="shadow-md mb-6">
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="absolute opacity-0"
          id="tab-single-one"
          type="radio"
          name="tabs" />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-single-one">
          Apa?
        </label>
        <div
          class="tab-content overflow-hidden border-l-2 bg-gray-100
          border-pink-600 leading-normal">
          <p class="p-5">
            sentiasa tanya diri anda setiap kali membaca maklumat kesihatan yang
            disebarkan terutama di laman sosial dan dari aplikasi pesanan
            ringkas seperti WhatsApp atau Telegram. Adakah maklumat yang
            disebarkan itu benar? Adakah ia menjanjikan perkara yang tak masuk
            akal seperti kesembuhan dari penyakit diabetes sekiranya anda
            mengamalkan tips yang diberi. Untuk pengetahuan, pesakit diabetes
            tidak boleh disembuhkan tetapi boleh dikawal.
          </p>
        </div>
      </div>
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="absolute opacity-0"
          id="tab-single-two"
          type="radio"
          name="tabs" />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-single-two">
          Siapa dan Dari Mana?
        </label>
        <div
          class="tab-content overflow-hidden border-l-2 bg-gray-100
          border-pink-600 leading-normal">
          <p class="p-5">
            Adakah anda tahu siapa pemilik asal maklumat itu? Kebanyakan
            maklumat terutama yang berlegar di Whatsapp tidak dapat ditentukan
            asalnya. Ini menyukarkan kita untuk pastikan samada maklumat itu
            datang dari sumber yang boleh dipercayai.
          </p>
        </div>
      </div>
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="absolute opacity-0"
          id="tab-single-three"
          type="radio"
          name="tabs" />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-single-three">
          Kenapa?
        </label>
        <div
          class="tab-content overflow-hidden border-l-2 bg-gray-100
          border-pink-600 leading-normal">
          <p class="p-5">
            Apa motif maklumat itu disebarkan? Ada juga mereka yang sengaja
            menyebar maklumat tidak sahih seperti memburukkan perubatan moden
            atau perkhidmatan kesihatan kerajaan. Setelah disiasat, ada antara
            mereka yang hanya ingin mempromosi produk atau perkhidmatan yang
            mereka tawarkan yang kebanyakannya tidak bersandarkan sebarang
            kajian.
          </p>
        </div>
      </div>
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="absolute opacity-0"
          id="tab-single-four"
          type="radio"
          name="tabs" />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-single-four">
          Bila?
        </label>
        <div
          class="tab-content overflow-hidden border-l-2 bg-gray-100
          border-pink-600 leading-normal">
          <p class="p-5">
            Ada sesetengah maklumat adalah maklumat yang benar tetapi
            ketinggalan zaman dan sudah ada maklumat yang lebih tepat dan
            terkini. Oleh itu adalah penting untuk kita sentiasa mempersoal maklumat yang
            diterima terutama sekiranya kita tidak tahu sumber maklumat tersebut
            atau kita tidak pasti samada pemilik asal maklumat adalah seorang
            yang mempunyai kredibiliti atau boleh dipercayai atau tidak. Jangan
            mudah terpedaya dengan ‘scammer’ atau penipu kesihatan.
          </p>         
          <p class="p-5">
            Sesetengah orang ingin mengaut keuntungan dari kesusahan orang lain.
            Ada yang mencipta produk sendiri dan mengupah orang lain malah
            personaliti terkenal untuk memberi testimoni produk yang dijual
            sedangkan produk itu tidak pernah melalui sebarang ujian klinikal.
            Scammer-scammer ini berbuat demikian kerana tahu, orang sakit akan
            sentiasa berikhtiar untuk merawat penyakit mereka dan akan ada yang
            akan ingin mencuba produk mereka walaupun ia adalah produk yang
            sangat meragukan, malah ada yang membahayakan.
          </p>          
        </div>
      </div>
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="absolute opacity-0"
          id="tab-single-five"
          type="radio"
          name="tabs" />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-single-five">
          Pembuktian Ubat
        </label>
        <div
          class="tab-content overflow-hidden border-l-2 bg-gray-100
          border-pink-600 leading-normal">          
          <p class="p-5">
            Pembuktian keberkesanan ubat-ubatan perlu melalui tatacara yang
            betul. Testimoni dari seorang pakar dalam bidang berada di tangga
            yang paling bawah dalam hirarki pembuktian. Untuk memasarkan produk
            yang dikatakan boleh mengubati penyakit, ia perlu menjalankan
            pelbagai ujian seperti ujian makmal ke atas haiwan dan ujian
            klinikal ke atas manusia untuk memastikan ia benar-benar selamat
            digunakan. Berdaftar dengan nombor notifikasi (NOT) Kementerian
            Kesihatan Malaysia sahaja tidak cukup untuk mengatakan produk itu
            berkesan merawat penyakit. Berhati-hatilah. Pastikan semak maklumat
            sebelum percaya.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
