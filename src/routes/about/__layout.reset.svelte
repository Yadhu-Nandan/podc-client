<script>
    import Title from "$lib/title.svelte"
    import "../../styles/global.css";
</script>

<header>
    <nav>
        <Title title = "Pod C Gallery"/>
            <div class="links">
                <a class="hover-underline-animation" href="/">Home</a>
                <a class="hover-underline-animation" href="/about">About</a>
                <a class="hover-underline-animation" href="/members">Members</a>
            </div>
        </nav>
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
        text-align: center;
        background: rgba(0, 0, 0, 0.1);
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        text-align: center;
    }
    .links{
        margin-left : auto;
    }
    a {
        margin: 10px;
        text-decoration: none;
    }
    nav{
        display : flex;
        align-items : center;
        max-width : 960px;
        margin : 0 auto;
    }
    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #533E85;
    }

    .hover-underline-animation:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #533E85;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>