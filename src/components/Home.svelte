<script lang="ts">
  import { Button } from "@/ui";
  import logo from "@/images/logo.svg";

  let count: number = 0;

  function inc(): void {
    count++;
  }

  function dec(): void {
    count--;
  }
</script>

<div class="home__container">
  <div class="home__title">
    <img src={logo} width="100" alt="svelte" />
    <h1>Svelte Boilerplate</h1>
  </div>
  <div class="home__counter">
    <Button class="size-l" on:click={inc}>+</Button>
    <Button class="size-l" on:click={dec}>−</Button>
    <div class="home__count">{count}</div>
  </div>
</div>

<style lang="scss">
  .home {
    &__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-azure-pink);
      width: 100%;
      height: 100%;
    }
    &__title {
      display: flex;
      column-gap: 1rem;
      h1 {
        font-size: var(--font-size-h1);
        width: max-content;
        text-transform: uppercase;
        background: var(--teal);
        background: var(--gr-teal-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &__counter {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    &__count {
      font-size: 2rem;
      font-weight: 700;
      color: var(--white);
    }
  }
</style>
