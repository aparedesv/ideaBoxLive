<template>
      <section class="mb-6">
        <form @submit.prevent="addIdea" class="sm:flex">
          <input
            v-model="idea"
            class="w-full p-3 sm:flex-auto"
            type="text"
            required
            placeholder="add your idea"
          />
          <input
            class="w-full p-2 bg-gray-600 text-white sm:flex-1"
            type="submit"
            value="Add Idea"
          />
        </form>
        <p v-if="!user" class="user-actions">
          Please <a @click="doLogin" href="#">Login</a> first
        </p>
        <p v-else class="user-actions">
          Hi {{ user.displayName }}.<a @click="doLogout" href="#">Logout</a>
        </p>
      </section>
</template>

<script>
import { ref } from "vue";
export default {
    name: 'AddIdea',
    emits: ['do-login', 'do-logout', 'add-idea'],
    props: {
        user: {
            type: [Object, null]
        }    
    },
    setup(props, { emit }) {

        const idea = ref('');

        const doLogin = () => emit('do-login');
        const doLogout = () => emit('do-logout');

        const addIdea = () => {
            emit('add-idea', idea);
            idea.value = '';
        };

        return { doLogin, doLogout, idea, addIdea };
    }
}
</script>