<script>
	import { Button, Link, Navbar, NavbarBackLink, Page } from "konsta/svelte";

    let size = 'Default';
    let isTransparent = false;
</script>
<Page>
    <Navbar
    title="Petminder"
    subtitle="Made with love by DCA"
    class="top-0 sticky"
    medium={size === 'Medium'}
    large={size === 'Large'}
    transparent={isTransparent}
  >
  <a slot="right" href="/login"> Log In</a>
</Navbar>

    <h1>Petminder</h1>
    <p>An app design to help families control who and when their pets where fed!</p>
    <img src="jangoenzo.jpg" alt="My family" />
    <Button>Register</Button>

</Page>