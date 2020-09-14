<script>
	export let segment;
</script>

<!-- <style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style> -->

<nav class="bg-pink-900 p-2 mt-0 w-full">
 <div class="container mx-auto flex flex-wrap items-center">
 <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-bold items-center">
 <img class="h-8 w-8" src="rsz_index.png" alt="logo">
				<a class="text-white no-underline hover:text-white hover:no-underline" href=".">
					<span class="text-2xl pl-2"> Senyumanis</span>
				</a>
	</div>
 
 <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li class="mr-3">
					<a class="inline-block text-xl py-2 px-4 {segment === undefined ? "text-yellow-300 border border-1 rounded border-yellow-300" : "text-white"} no-underline text-base sm:text-sm md:text-lg" href=".">Tip Penjagaan</a>
				  </li>
				  <li class="mr-3">
					<a class="inline-block text-xl {segment === "ujian" || segment === "ujian-literasi-kesihatan" ? "text-yellow-300 border border-1 rounded border-yellow-300" : "text-white"} no-underline hover:text-gray-200 hover:text-underline py-1 px-4 text-base sm:text-sm md:text-lg" href="ujian">Ujian Kesihatan</a>
				  </li>				  
				</ul>
			</div>
</div>	
</nav>
