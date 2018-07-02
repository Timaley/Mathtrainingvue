<template>
  <div class="appContainer">
  <div id="app" class="container">
    <h1>MATH TRAINING</h1>
      <div class="progress">
      <div class="progress-bar" :style="progressStyles"></div>
    </div>
    <div class="box">
      <transition name="flip" mode="out-in">
        <app-start-screen 
          v-if="state == 'start'"
          @onStart="onStart"></app-start-screen>
        <app-question v-else-if="state == 'question'"
                      @success = "onQuestSuccess"
                      @error = "onQuestError"
                      :settings="levels[level]"></app-question>
        <app-message v-else-if="state == 'message'"
                    :type = "message.type"
                    :text = "message.text"
                    @onNext = "onNext"></app-message>
        <app-result v-else-if="state == 'result'"
                    :stats = "stats"
                    @repeat = "onStart"
                    @nextlevel = "onNextLevel"></app-result>
        <div v-else>Unknown state</div>
        </transition>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      message: {
        type: '',
        text: ''
      },
      stats:{
        success: 0,
        error: 0
      },
      questMax: 3,
      level: 0,
      levels: [
        {
          from: 0,
          to: 10,
          range: 5,
          variants: 2
        },
        {
          from: 10,
          to: 50,
          range: 10,
          variants: 3
        },
        {
          from: 50,
          to: 150,
          range: 15,
          variants: 4
        },
        {
          from: 150,
          to: 500,
          range: 35,
          variants: 5
        }
      ]
    }
  },
  computed:{
    questDone(){
      return this.stats.success + this.stats.error
    },
    progressStyles(){
      return{
        width:(this.questDone / this.questMax * 100) + '%'
      };
    }
  },
  methods: {
    onStart(){
      this.state = 'question'
      this.stats.success = ''
      this.stats.error = ''

    },
    onQuestSuccess(){
      this.state = 'message'
      this.message.text = "Good job!"
      this.message.type = "success"
      this.stats.success++
    },
    onQuestError(msg){
      this.state = 'message'
      this.message.text = msg
      this.message.type = "warning"
      this.stats.error++
    },
    onNext(){
      if (this.questDone < this.questMax) {
        this.state = 'question'
      } else{
        this.state = 'result'
      }
    },
    onNextLevel(){
      this.level++
      this.onStart()
    }
  }
}
</script>

<style>
  .flip-enter{

  }
  .flip-enter-active{
    animation: flipInX 0.3s linear;
  }
  .flip-leave{

  }
  .flip-leave-active{
    animation: flipOutX 0.3s linear;
  }

  @keyframes flipInX{
    from{
      transform: rotateX(90deg);
    }
    to{
      transform: rotateX(0deg)
    }
  }
  @keyframes flipOutX{
    from{
      transform: rotateX(0deg);
    }
    to{
      transform: rotateX(90deg)
    }
  }
  h1{
    text-align: center;
    margin: 20px;
  }
</style>
