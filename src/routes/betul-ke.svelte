<script>
  import { slide } from "svelte/transition";
  let visible = true;
  let sections = [
    {
      id: 1,
      title: "Apa?",
      content:
        '<p class="p-3">' +
        "Sentiasa tanya diri anda setiap kali membaca maklumat kesihatan yang " +
        "disebarkan terutama di laman sosial dan dari aplikasi pesanan " +
        " ringkas seperti WhatsApp atau Telegram. Adakah maklumat yang " +
        "disebarkan itu benar? Adakah ia menjanjikan perkara yang tak masuk " +
        "akal seperti kesembuhan dari penyakit diabetes sekiranya anda " +
        "mengamalkan tips yang diberi. Untuk pengetahuan, diabetes " +
        "tidak boleh disembuhkan tetapi boleh dikawal." +
        "</p>",
      active: false
    },
    {
      id: 2,
      title: "Siapa dan Dari Mana?",
      content:
        '<p class="p-3">Adakah anda tahu siapa pemilik asal maklumat itu? Kebanyakan maklumat terutama yang berlegar di Whatsapp tidak dapat ditentukan asalnya. Ini menyukarkan kita untuk pastikan samada maklumat itu datang dari sumber yang boleh dipercayai.</p>',
      active: false
    },
    {
      id: 3,
      title: "Kenapa?",
      content:
        '<p class="p-3">Apa motif maklumat itu disebarkan? Ada juga mereka yang sengaja menyebar maklumat tidak sahih seperti memburukkan perubatan moden atau perkhidmatan kesihatan kerajaan. Setelah disiasat, ada antara mereka yang hanya ingin mempromosi produk atau perkhidmatan yang mereka tawarkan yang kebanyakannya tidak bersandarkan sebarang kajian. </p>',
      active: false
    },
    {
      id: 4,
      title: "Bila?",
      content:
        '<p class="p-3">Ada sesetengah maklumat adalah maklumat yang benar tetapi ketinggalan zaman dan sudah ada maklumat yang lebih tepat dan terkini. Oleh itu adalah penting untuk kita sentiasa mempersoal maklumat yang diterima terutama sekiranya kita tidak tahu sumber maklumat tersebut atau kita tidak pasti samada pemilik asal maklumat adalah seorang yang mempunyai kredibiliti atau boleh dipercayai atau tidak. Jangan mudah terpedaya dengan scammer atau penipu kesihatan.</p><p class="p-3">Sesetengah orang ingin mengaut keuntungan dari kesusahan orang lain. Ada yang mencipta produk sendiri dan mengupah orang lain malah personaliti terkenal untuk memberi testimoni produk yang dijual sedangkan produk itu tidak pernah melalui sebarang ujian klinikal. Scammer-scammer ini berbuat demikian kerana tahu, orang sakit akan sentiasa berikhtiar untuk merawat penyakit mereka dan akan ada yang akan ingin mencuba produk mereka walaupun ia adalah produk yang sangat meragukan, malah ada yang membahayakan.</p> ',
      active: false
    },
    {
      id: 5,
      title: "Pembuktian Ubat",
      content:
        '<p class="p-3">Pembuktian keberkesanan ubat-ubatan perlu melalui tatacara yang betul. Testimoni dari seorang pakar dalam bidang berada di tangga yang paling bawah dalam hirarki pembuktian. Untuk memasarkan produk yang dikatakan boleh mengubati penyakit, ia perlu menjalankan pelbagai ujian seperti ujian makmal ke atas haiwan dan ujian klinikal ke atas manusia untuk memastikan ia benar-benar selamat digunakan. Berdaftar dengan nombor notifikasi (NOT) Kementerian Kesihatan Malaysia sahaja tidak cukup untuk mengatakan produk itu berkesan merawat penyakit. Berhati-hatilah. Pastikan semak maklumat sebelum percaya.</p>   ',
      active: false
    }
  ];

  const expand = section => {
    sections = sections.map(s => {
      s.active = false;
      if (s.id === section.id) {
        s.active = true;
      }
      return s;
    });
  };
</script>

<style>
  .accordion {
    margin-bottom: 10px;
  }
  .slider {
    border: 1px solid #eee;
    padding: 4px 10px;
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
  <p class="p-2">
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
  </p>

    {#each sections as section}
      <div class="accordion">
        <button
          class="w-full border border-pink-300 hover:border-pink-900
          active:border-pink-900 h-12 font-semibold"
          on:click={() => expand(section)}>
          {section.title}
        </button>
        {#if section.active}
          <div class="slider" transition:slide>
            <p>
              {@html section.content}
            </p>
          </div>
        {/if}
      </div>
    {/each}

  </div>

</div>