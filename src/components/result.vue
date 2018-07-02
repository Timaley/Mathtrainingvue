<template>
	<div class="alert alert-primary">
		<h3>Success: {{stats.success}}</h3>
		<h3>Errors: {{stats.error}}</h3>
		<hr>
		<div class="btns">
			<button class="btn btn-primary" @click="$emit('repeat')">Repeat</button>
			<button class="btn btn-primary" @click="$emit('nextlevel')">Next level</button>	
		</div>
	</div>
</template>
<script>
	export default {
		props: ['stats']
	}
</script>
<style >
	.btns{
		display: flex;
		flex-direction: row;
	}
</style>