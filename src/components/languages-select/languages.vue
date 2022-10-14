<template>    
    <div class="select-box select-box-main">
        <div class="options-container">          
            <div class="option">
                <input type="radio" class="radio" id="grade-a" name="category" />
                <label for="grade-a">
                    <div class="lang">EN</div>
                </label>
            </div>

            <div class="option">
                <input type="radio" class="radio" id="grade-b" name="category" />
                <label for="grade-b">
                    <div class="lang">CZ</div>
                </label>
            </div>

            <div class="option">
                <input type="radio" class="radio" id="grade-c" name="category" />
                <label for="grade-c">
                    <div class="lang">RU</div>
                </label>
            </div>
        </div>
        <div class="selected">
            <div class="lang">EN</div>
        </div> 
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component } from 'vue-property-decorator'

    @Component
    export default  class LanguagesComponent extends Vue {
        toggle: boolean = true

        mounted() {
            const selected = document.querySelector(".selected");
            const optionsContainer = document.querySelector(".options-container");
            const optionsList = document.querySelectorAll(".option");

            console.log(optionsList);

            document.addEventListener('click', function(event: any) {
                if (!selected.contains(event.target)) {
                    optionsContainer.classList.remove("active");
                } else {
                    optionsContainer.classList.add("active");
                }
            })

            selected.addEventListener("click", () => {
                optionsContainer.classList.toggle("active");
            });

            optionsList.forEach(option => {
                option.addEventListener("click", () => {
                    selected.innerHTML = option.querySelector("label").innerHTML;
                    optionsContainer.classList.remove("active");
                });
            });
            
        }
    }
    
</script>

<style lang="css" scoped>

.select-box {
    margin-right: 35px;
    display: flex;
    width: 45px;
    height: 24px;
    align-items: center;
    position: relative;
}

.select-box .options-container {
    max-height: 0;
    opacity: 0;
    transition: all 0.4s;
    overflow: hidden;
    order: 1;
    position: absolute;
    top: 30px;
    background: transparent;
    z-index: 1;
}

.lang {
    color: white;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.selected {
    padding-left: 5px;
    position: relative;
    width: 45px;
    height: 16px;
    background-color: transparent;
    order: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.selected::after {
    content: url("/assets/img/lang-arrow.svg");	
    /* content: ''; */
	display: inline-block;
	text-rendering: auto;
	position: absolute;
	right: 0;
	top: -13%;
	transition: transform .5s;
}

.select-box .options-container.active {
  max-height: 240px;
  min-height: 85px;
  opacity: 1;
  overflow-y: auto;
  width: 50px;
}

/* .select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
} */

.select-box .option,
.selected {
  cursor: pointer;
}

.select-box .option {
    padding-left: 5px;
    height: 26px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
}

.select-box .option:hover .lang {
    color: #3772ce;
}

.select-box label {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.select-box .option .radio {
  display: none;
}

@media all and (max-width: 1200px) {
    .select-box { margin-right: 20px; }
}


@media all and (max-width: 1150px) {
  /* .select-box {
    display: none;
  } */

  .locale--burger {
      margin-bottom: 25px;
      display: flex;
      font-size: 17px;
      font-weight: 500;
  }
}


</style>
