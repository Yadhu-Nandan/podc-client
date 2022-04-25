<script>
    import Title from "$lib/title.svelte"
    import "../styles/global.css";
</script>

<header>
    <Title title = "Pod C Gallery"/>
</header>
<main>
    <!-- Page content -->
    <slot></slot>
</main>

<footer>
    <p>© Copyright 2022 Pod C Gallery</p>
</footer>

<style>
    header{
        display:flex;
        justify-content: center;
        margin-left: 0px;
        margin-top: 20px;
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        text-align: center;
    }
</style>