<script lang="ts">
  import { link } from "svelte-routing";
</script>

<nav class="navbar__container">
  <div class="navbar__menu">
    <a href="/" use:link>Home</a>
    <a href="/info" use:link>Info</a>
    <a href="/about" use:link>About</a>
  </div>
</nav>

<style lang="scss">
  .navbar {
    &__container {
      position: absolute;
      width: 100%;
    }
    &__menu {
      display: flex;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;
      a {
        color: var(--white);
        font-weight: 700;
        text-decoration: none;
        transition: 1s;
        text-transform: uppercase;
        &:hover {
          color: var(--purple);
        }
      }
    }
  }
</style>
