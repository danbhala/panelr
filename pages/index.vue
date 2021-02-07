<template>
  <div>
    <b-container>
      <h1>Panelr</h1>
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
      {{ horizontalPanelWidth }}
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
      return this.inputs.vertical * this.inputs.borderWidth
    },
    horizontalPanelWidth() {
      return (
        (this.inputs.width - this.totalHorizontalBorderWidth) /
        this.inputs.horizontal
      )
    },
  },
  mounted() {
    this.inputs = {
      width: 293,
      height: 233,
      borderWidth: 7,
      horizontal: 5,
      vertical: 4,
    }
    this.calculate()
  },
  methods: {
    calculate() {
      // const totalBorderWidth = this.inputs.horizontal * this.inputs.borderWidth
    },
  },
}
</script>

<style></style>
