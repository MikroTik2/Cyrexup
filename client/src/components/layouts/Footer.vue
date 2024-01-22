<template>
    <div class="w-full absolute bottom-0 justify-center m-2 flex max-lg:hidden">
        <div class="flex gap-3 mr-10">
            <router-link class="text-[#5E5E5E] text-sm" :to="element.path" v-for="(element, i) in footerLinks" :key="i">{{ element.name }}</router-link>
        </div>
        <P class="text-[#5E5E5E] text-sm">© 2024 CYREXUP. Все права защищены.</P>
    </div>
</template>

<script setup>
    import TermsOfUse from '@/views/Terms.vue';
    import Privacy from '@/views/Privacy.vue';
    import { ref } from 'vue';

    const footerLinks = ref([
        {path: "/privacy", name: "Политика конфиденциальности", component: Privacy},
        {path: "/terms", name: "Пользовательское соглашение ", component: TermsOfUse},

    ]);
</script>