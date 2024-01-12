import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import Profile from '@/views/Profile.vue';
import ProfileInventory from '@/components/ProfileInventory.vue';

const router = createRouter({
     history: createWebHistory(),

     routes: [
          { path: "/", name: "Index", component: Index },
          { path: "/profile", name: "Profile", component: Profile, children: [
               { path: 'inventory', name: "ProfileInventary", component: ProfileInventory },
          ]},
     ],
});

export default router;