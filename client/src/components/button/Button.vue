<template >
 <button
        v-if="type === 'button'"
        class="btn"
        :class="['btn', {
                'btn--green': color === 'green',
                'btn--blue': color === 'blue',
                'btn--logout' : logoutBtn,
                'btn--activate' : activateBtn,
                'btn--copyBtn' : copyBtn,
                'btn--participate' : runBtn,
        }]"
        >
        <slot />
        </button>

    <router-link 
        :to="to"
        v-else 
        class="btn"
        :class="[
            'btn', {
            'btn--green': color === 'green',
            'btn--blue': color === 'blue',
            'btn--logout' : logoutBtn,
            'btn--activate' : activateBtn,
            'btn--participate' : runBtn,
        }]"
    
    >    
        <slot />
    </router-link> 
</template>
<script setup>

    const props = defineProps ({

        to: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false
        },
        background: {
            type: String,
            required: false
        },
        logoutBtn: {
            type: Boolean,
            required: false
        },
        activateBtn: {
            type: Boolean,
            required: false
        },
        copyBtn: {
            type: Boolean,
            required: false
        },
        runBtn: {
            type: Boolean,
            required: false
        },
        type: {
            type: String,
            default: 'button'
        },
        
    })

</script>
<style lang="scss" scoped>
    .btn {
        height: 45px;
        width: 100%;
        color: var(--white);
        border: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        font-weight: 600;
        align-items: center;
        border-radius: 10px;
         
        &--green {
            background: var(--green);
            padding: 0 27px;
        }
        &--blue {
            background: var(--blue);
            height: 45px;
            width: 45px;
            font-size: 10px;
            font-weight: 600;
            border-radius: 5px;
            
        }
        &--logout {
            background: var(--blue);
            width: 45px;
            height: 45px;
            display: flex;
            padding: 8px;
            justify-content: center;
        }
        &--activate {
            background: var(--blue);
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            padding: 10px;

        }
        &--copyBtn {
            background: var(--blue-500);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;

            @media only screen and (max-width: 428px) {
                    width: 23px;
                    height: 23px;
                    border-radius: 5px;
                }
        }
        &--participate {
            background: var(--black-400);
            color: var(--blue-400);
            justify-content: center;
            display: flex;
            align-items: center;
            border-radius: 5px;
            width: 165px;
            height: 40px;
        }
    }
    
</style>