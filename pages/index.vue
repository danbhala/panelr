<template>
  <div>
    <b-container>
      <h1>Panelr</h1>
      <b-row>
        <b-col lg="6">
          <b-form @submit.prevent="calculate">
            <b-form-group
              label="Wall Width"
              label-for="wall-width"
              description="Use cms"
            >
              <b-form-input
                id="wall-width"
                v-model="inputs.width"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Wall Height"
              label-for="wall-height"
              description="Use cms"
            >
              <b-form-input
                id="wall-height"
                v-model="inputs.height"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Border Width"
              label-for="border-width"
              description="Use cms"
            >
              <b-form-input
                id="border-width"
                v-model="inputs.borderWidth"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Horizontal Panels"
              label-for="horizontal-panels"
              description="Use cms"
            >
              <b-form-input
                id="horizontal-panels"
                v-model="inputs.horizontal"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Vertical Panels"
              label-for="vertical-panels"
              description="Use cms"
            >
              <b-form-input
                id="vertical-panels"
                v-model="inputs.vertical"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Calculate</b-button>
          </b-form>
        </b-col>
        <b-col lg="6">
          <div v-if="calculated">
            <h2>Cuts</h2>
          </div>
          <canvas ref="canvas"></canvas>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        width: null,
        height: null,
        borderWidth: null,
        horizontal: null,
        vertical: null,
      },
      calculated: false,
      vueCanvas: null,
    }
  },
  computed: {
    totalHorizontalBorderWidth() {
      return (
        (parseInt(this.inputs.horizontal) + 1) *
        parseInt(this.inputs.borderWidth)
      )
    },
    totalVerticalBorderWidth() {
      return (
        (parseInt(this.inputs.vertical) + 1) * parseInt(this.inputs.borderWidth)
      )
    },
    horizontalPanelWidth() {
      return (
        (this.inputs.width - this.totalHorizontalBorderWidth) /
        this.inputs.horizontal
      )
    },
    verticalPanelWidth() {
      return (
        (this.inputs.height - this.totalVerticalBorderWidth) /
        this.inputs.vertical
      )
    },
  },
  watch: {
    inputs: {
      handler() {
        this.calculate()
      },
      deep: true,
    },
  },
  mounted() {
    // const c = this.$refs.canvas
    // const ctx = this.$refs.canvas.getContext('2d')
    this.vueCanvas = this.$refs.canvas.getContext('2d')
    this.inputs = {
      width: 1000,
      height: 800,
      borderWidth: 10,
      horizontal: 10,
      vertical: 8,
    }
    this.calculate()
  },
  methods: {
    calculate() {
      this.calculated = true

      this.$refs.canvas.width = this.inputs.width
      this.$refs.canvas.height = this.inputs.height

      for (let index = 0; index <= parseInt(this.inputs.horizontal); index++) {
        this.vueCanvas.beginPath()
        this.vueCanvas.rect(
          this.inputs.borderWidth * index + this.horizontalPanelWidth * index,
          0,
          this.inputs.borderWidth,
          this.inputs.height
        )
        this.vueCanvas.fill()
      }

      this.vueCanvas.beginPath()
      this.vueCanvas.rect(0, 0, this.inputs.width, this.inputs.borderWidth)
      this.vueCanvas.fill()

      for (let index = 0; index <= parseInt(this.inputs.vertical); index++) {
        this.vueCanvas.beginPath()
        this.vueCanvas.rect(
          0,
          this.inputs.borderWidth * index + this.verticalPanelWidth * index,
          this.inputs.width,
          this.inputs.borderWidth
        )
        this.vueCanvas.fill()
      }
    },
  },
}
</script>

<style>
canvas {
  width: 100%;
}
</style>
