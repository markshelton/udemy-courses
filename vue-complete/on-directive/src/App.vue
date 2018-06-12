<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary" v-myOn:click="clicked">Click Me</button>
                <hr>
                <div style="width:100px; height:100px; background-color: green;"
                v-myOn:mouseenter="mouseEnter" v-myOn:mouseleave="mouseLeave">hello</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    clicked() {
      alert("this was clicked");
    },
    mouseEnter() {
      console.log("the mouse has entered");
    },
    mouseLeave() {
      console.log("the mouse has left");
    }
  },
  directives: {
    myOn: {
      bind(el, binding, vnode) {
        el.addEventListener(binding.arg, binding.value);
      }
    }
  }
};
</script>

<style>
</style>
