<template>
  <!-- main container -->
  <div class="container mx-auto p-4">
    <!-- main box -->
    <div class="w-full bg-gray-100 shadow-lg p-4 rounded-lg">
      <h1 class="mb-5 text-4xl text-center">
        IdeaBox
      </h1>

      <!-- add idea -->
      <section class="mb-6">
        <form class="sm:flex">
          <input
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
      <!-- end add idea -->

      <AppIdea v-for="(idea, index) in ideas" :key="index" :idea="idea" />
    </div>
    <!-- end main box -->
  </div>
  <!-- end main container -->
</template>

<script>
import AppIdea from "@/components/AppIdea.vue";
import seed from "@/seed.json";
import { ref } from "vue";
import { auth, firebase } from "@/firebase.js";

export default {
  name: "App",
  setup() {
    const ideas = ref(seed.ideas);
    let user = ref(null);
    auth.onAuthStateChanged(async auth => (user.value = auth ? auth : null));
    const doLogin = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.error(error);
      }
    };
    const doLogout = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error(error);
      }
    }
    return {
      ideas,
      user,
      doLogin,
      doLogout
    };
  },
  components: {
    AppIdea
  }
};
</script>

<style>
  .user-actions {
    @apply mt-2 text-center;
  }
  
  .user-actions a {
    font-weight: bold;
    text-decoration: underline;
  }

</style>
