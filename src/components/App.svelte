<script>
  import { Router, Route } from "svelte-routing";
  import { link } from "svelte-routing";
  import { Navbar } from "@/ui";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import Info from "./Info.svelte";

  export let url = "/";
</script>

<Router {url}>
  <div class="app">
    <Navbar>
      <a href="/" use:link>Home</a>
      <a href="/info" use:link>Info</a>
      <a href="/about" use:link>About</a>
    </Navbar>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/info" component={Info} />
  </div>
</Router>

<style lang="scss">
  .app {
    width: 100%;
    height: 100%;
  }
</style>
