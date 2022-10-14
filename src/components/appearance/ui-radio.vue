<template>
    <div class="item">
        <input
            type="radio"
            :id="id"
            :name="name"
            :value="data"
            v-model="value"
            @click="change"
        >
        <label v-if="label" :for="id"><span>{{ label }}</span></label>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
import { Component, Prop, Watch  } from "vue-property-decorator"

@Component
export default class UiInputRadio extends Vue {
    @Prop({ type: String, default: '' }) label: string
    @Prop({ type: String, default: '' }) id: string
    @Prop({ type: String, default: '' }) name: string
    @Prop({ type: String, default: '' }) value: string
    @Prop({ type: String, default: '' }) data: boolean

    change() {
        this.$emit('input', this.data)
    }
}
</script>

<style lang="css" scoped>

.item {
    max-width: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
}

[type="radio"] + label {
    font-family: 'Graphik', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 34px;
    letter-spacing: 0.2px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: black;
}

[type="radio"]:checked + label {
    box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.13);
    background-color: #3772ce;
    color: white;
}

</style>