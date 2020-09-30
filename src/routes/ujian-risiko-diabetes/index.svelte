<script>
  let berat = null;
  let tinggi = null;
  let bmi = null;
  let height = null;

  $: isEmptyTinggi = !tinggi;
  $: isEmptyBerat = !berat;
  function handleBMI(e){
      e.preventDefault();
      height = tinggi/10;
      bmi = berat/(height*height);
      bmi = parseFloat((bmi.toFixed(2)));
      sessionStorage.setItem("bmi", bmi);
      location.href="ujian-risiko-diabetes/assess";
  }
</script>

<div
  class="overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg
  rounded-t border-red-200 w-full">
  <div class="px-6 py-4 mb-2 mt-4 mb-8">
    <div class="uppercase tracking-wide text-c2 mb-4">
      Ujian Penilaian Risiko Diabetes
    </div>
    <div>Sila masukkan berat dan tinggi anda</div>
    <form on:submit={handleBMI}>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold
            mb-2"
            for="berat">
            Berat (kg)
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border
            border-gray-200 rounded py-3 px-4 mb-3 leading-tight
            focus:outline-none focus:bg-white focus:border-gray-500"
            id="berat"
            name="berat"
            type="number"
            min="20"
            max="300"
            step="0.1"
            placeholder="0.0kg"
            bind:value={berat} />
          {#if isEmptyBerat}
            <p class="text-red-500 text-xs italic">
              Sila isikan berat anda dlm kg.
            </p>
          {/if}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold
            mb-2"
            for="tinggi">
            Tinggi (sentimeter)
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border
            border-gray-200 rounded py-3 px-4 mb-3 leading-tight
            focus:outline-none focus:bg-white focus:border-gray-500"
            id="tinggi"
            name="tinggi"
            type="number"
            min="50"
            max="300"            
            placeholder="000cm"
            bind:value={tinggi} />
          {#if isEmptyTinggi}
            <p class="text-red-500 text-xs italic">
              Sila isikan tinggi anda dalam sentimeter.
            </p>
          {/if}
        </div>
        <button
          disabled={isEmptyTinggi || isEmptyBerat}
          class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500
          hover:border-blue-700 text-lg border-4 text-white py-1 px-2 rounded
          mt-3 mx-auto"
          type="submit">
          Hantar
        </button>

      </div>
    </form>

  </div>
</div>
 <div style="visibility: hidden; position: absolute">
    <a href="ujian-risiko-diabetes/assess">...</a></div>