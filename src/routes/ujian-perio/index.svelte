
<script>
  import { myQuestions } from "./questions.js";
  import { saveAnswer } from "./assess.js";
  let active = 0;
  let weightages = 0;
  let skormessage = "";

  function save(e) {
    e.preventDefault();
    ({ weightages, skormessage } = saveAnswer(myQuestions));
 }
</script>



<div
  class="overflow-hidden border-t-4 bg-white mb-4 rounded-b-lg rounded-t
  border-red-light w-full">
  <div class="px-6 py-4 mb-2 mt-4 mb-8">    
    <div
      class="quiz-container"
      style="display: {active == myQuestions.length - 0 ? 'none' : 'inherit'}">
      {#each myQuestions as q, i}
        <div class="slide {active == i ? 'active-slide' : ''}">
          <div class="question">
            <span class="text-indigo-700 font-bold">
              {i + 1}/{myQuestions.length}.
            </span>
            {@html q.question}
          </div>
          <div class="answers">
           	{#each Object.entries(q.answers) as [letter, label]}
              <label class="answer-container">
                <input
                  type="radio"
                  value="{letter}"
                  bind:group={q.answer}
                  on:click={() => (active += 1)} />
                <span class="checkmark" />
                {letter} : {label}
              </label>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  {#if active == myQuestions.length && !skormessage}
    <div class="flex justify-center">
      <button
        class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500
        text-white mb-4"
        on:click={save}>
        Lihat Risiko Periodontal Saya
      </button>
    </div>
  {/if}
  {#if skormessage}
    <div class="text-center">
      Terdapat {weightages}% kebarangkalian anda mengalami penyakit gusi. 
      <p>{skormessage}</p>    
    </div>
        <div class="flex justify-center">
    <a
          class="inline-block border border-blue-500 rounded py-1 px-3
          bg-blue-500 text-white"
          href="../ujian">
          Kembali ke Senarai Ujian
        </a></div>
  {/if}
</div>

<style>
  .question {
    /* font-size: 20px; */
    margin-bottom: 10px;
  }
  .answers {
    margin-bottom: 20px;
    text-align: left;
    display: inline-block;
  }
  .answers label {
    display: block;
    margin-bottom: 10px;
  }

  .slide {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .active-slide {
    opacity: 1;
    z-index: 2;
  }
  .quiz-container {
    position: relative;
    height: 300px;
    margin-top: 5px;
    font-size: 18px;
    /* font-family: "Work Sans", sans-serif; */
    /* color: #333; */
    font-weight: 300;
    text-align: center;
    /* background-color: #f8f6f0; */
    padding-top: 5px;
  }
  /* Customize the label (the container) */
  .answer-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
  }

  /* Hide the browser's default radio button */
  .answer-container input {
    position: absolute;
    opacity: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #c0c0c0;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .answer-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .answer-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .answer-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .answer-container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
</style>