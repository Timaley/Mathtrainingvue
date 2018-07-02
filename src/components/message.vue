<template>
	<div class="alert" :class="'alert-'+type">
		<h2>{{ text }}</h2>
		<hr>
		<button class="btn btn-primary" @click = "$emit('onNext')">Continue</button>
	</div>
</template>
<script>
	export default {
		props: ['type', 'text']
	}
</script>
<style>
	.alert{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20px;
	}
</style>