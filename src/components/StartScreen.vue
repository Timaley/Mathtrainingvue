<template>
	<div class="alert alert-sicondary">
		<h3>Are you ready?</h3>
		<button class="btn btn-success" @click="$emit('onStart')" >Start!</button>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.alert{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>