<template>
	<div>
	<span class="count" v-text="count"></span>
	<button @click="count++" class="increament">Increment</button>
	<button @click="count > 0 ? count-- : 0 " class="decreament" v-show=" count > 0">Decreament</button>
	</div>

</template>
<script>
	export default {
	
	data(){
		return {
			count:0
		};
	}
}


</script>

