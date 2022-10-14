<template>    
    <div class="select-box-mobile">
        <div class="options-container-mobile">          
            <div class="option-mobile">
                <input type="radio" class="radio" id="mobile-grade-a" name="category" />
                <label for="mobile-grade-a">
                    <div class="lang">EN</div>
                </label>
            </div>

            <div class="option-mobile">
                <input type="radio" class="radio" id="mobile-grade-b" name="category" />
                <label for="mobile-grade-b">
                    <div class="lang">CZ</div>
                </label>
            </div>

            <div class="option-mobile">
                <input type="radio" class="radio" id="mobile-grade-c" name="category" />
                <label for="mobile-grade-c">
                    <div class="lang">RU</div>
                </label>
            </div>
        </div>
        <div class="selected-mob">
            <div class="lang">EN</div>
        </div> 
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component } from 'vue-property-decorator'

    @Component
    export default  class LanguagesMobileComponent extends Vue {
        toggle: boolean = true

        mounted() {
            const selectedMob = document.querySelector(".selected-mob");
            const optionsContainerMobile = document.querySelector(".options-container-mobile");
            const optionsListMobile = document.querySelectorAll(".option-mobile");

            document.addEventListener('click', function(event: any) {
                if (!selectedMob.contains(event.target)) {
                    optionsContainerMobile.classList.remove("active");
                } else {
                    optionsContainerMobile.classList.add("active");
                }
            })
            selectedMob.addEventListener("click", () => {
                optionsContainerMobile.classList.toggle("active");
            });

            optionsListMobile.forEach(option => {
                option.addEventListener("click", () => {
                    selectedMob.innerHTML = option.querySelector("label").innerHTML;
                    optionsContainerMobile.classList.remove("active");
                });
            });
            
        }


    }
    
</script>

<style lang="css" scoped>

.select-box-mobile {
    margin-top: 15px;
    display: flex;
    width: 45px;
    height: 24px;
    align-items: center;
    position: relative;
}

.select-box-mobile {
    margin-right: 0;
}

.select-box-mobile .options-container-mobile {
    max-height: 0;
    opacity: 0;
    transition: all 0.4s;
    overflow: hidden;
    order: 1;
    position: absolute;
    top: 30px;
    z-index: 1;
}

.lang {
    color: white;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;
}
.select-box-mobile .lang {
    color: black;
}

.selected-mob {
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

.selected-mob::after {
    content: url("/assets/img/lang-dark-arrow.svg");	
    top: -18%;
    display: inline-block;
	text-rendering: auto;
	position: absolute;
	right: 0;
    transition: transform .5s;
}

.select-box-mobile .options-container-mobile.active {
  max-height: 240px;
  min-height: 85px;
  opacity: 1;
  overflow-y: auto;
  width: 50px;
}

.select-box-mobile .option-mobile,
.selected-mob {
  cursor: pointer;
}

.select-box-mobile .option-mobile {
    padding-left: 5px;
    height: 26px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
}

.select-box-mobile .option-mobile:hover .lang {
    color: #3772ce;
}

.select-box-mobile label {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.select-box-mobile .option-mobile .radio {
  display: none;
}


/* vue transition */


</style>
