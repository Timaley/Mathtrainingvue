<template>
	<div class="alert">
		<h3>{{ x }} + {{ y }} = ?</h3>
		<div class="buttons">
			<button class="btn btn-success"
			v-for="numbers in answers"
			@click = "onAnswer(numbers)">{{numbers}}</button>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['settings'],
		data(){
			return{
				x: mtRand(this.settings.from,this.settings.to),
				y: mtRand(this.settings.from,this.settings.to)
			} 	
		},
		computed: {
			good(){
				return this.x + this.y;
			},
			answers(){
				let result = [this.good];
				while(result.length < this.settings.variants){
					let num = mtRand(this.good-this.settings.range,this.good+this.settings.range);
					if (result.indexOf(num) === -1) {
						result.push(num);
					}
				}
				return result.sort(function(){
					return Math.random() > 0.5;
				})
			}
		},
		methods:{
			onAnswer(num){
				if (num === this.good) {
					this.$emit('success');
				} else{
					this.$emit('error', 'error');
				}
				
			}
		}
	}

	function mtRand(min,max){
		let diff = max - min;
		return Math.floor(Math.random() * (diff + 1) + min)
	}
</script>
<style scoped>
	h3{
		margin: 20px;
		padding: 20px;
		font-size: 2rem;
		color: white;
		-webkit-box-shadow: 0px 1px 20px 2px rgba(130,130,130,0.66);
		-moz-box-shadow: 0px 1px 20px 2px rgba(130,130,130,0.66);
		box-shadow: 0px 1px 20px 2px rgba(130,130,130,0.66);
	}
	.alert{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(39, 193, 31, 0.5);
	}
	.buttons{
		display: flex;
		flex-direction: column;
	}
	.btn{
		width: 200px;
		margin: 5px;
	}
</style>