<script>
    import Time from "svelte-time";
    import { getArticles,deleteArticle,getArticle, } from "../services/article";
    import { onMount } from "svelte";
    import Articlecard from "./components/article-card.svelte";

    $: articles = [];
    $: open = false;
    let title = "";
    let content = "";
    let author = "";
    let article;
    let operation;

    onMount(async () => {
        const res = await getArticles();
        articles = res;
    });

    async function deletearticle(id) {
        const res = await deleteArticle(id);
        articles = res;
    }

    function toggle() {
        open = !open;
    }
    
    async function editarticle(id) {
        open = true;
        const res = await getArticle(id);
        article = res;
        title = article.title;
        content = article.content;
        author = article.created_by;
        operation = false;
    }

    function toggleAdd() {
        toggle();
        operation = true;
        title = "";
        content = "";
        author = "";
    }
</script>

<div class="subroutes">
    <p class="hover-underline-animation">
        <a sveltekit:prefetch href="/pages/about">About</a>
    </p>
    <p class="hover-underline-animation">
        <a sveltekit:prefetch href="/pages/members">Members</a>
    </p>
</div>

<div class="index">
    {#if open}
        <Articlecard {title} {content} {author} {operation} />
        <button class="button-65" on:click={toggle}>Cancel</button>
    {:else}
        <h1>Notice Board</h1>
        <button type="button" class="button-65" on:click={toggleAdd}
            >Add new</button
        >

        {#each articles as article}
            <div class="article">
                <div class="title">
                    <h3 class="title-text">{article.title}</h3>
                    <div class="delete-flex">
                        <a href="/" ><img class="delete-icon icon" on:click={async () => deletearticle(article.id)} src="/delete.png" alt="" /></a >
                        <a href="/" ><img class="edit-icon icon" on:click={async () => editarticle(article.id)} src="/edit.png" alt="" /></a >
                    </div>
                </div>
                <h6 class="align-right">- {article.created_by}</h6>
                <h6 class="align-right">
                    <Time relative timestamp={article.created_at} />
                </h6>
                <hr />
                <p>{article.content}</p>
            </div>
        {/each}
    {/if}
</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
    .index h1 {
        font-size: 2em;
    }
    .subroutes {
        display: flex;
        justify-content: center;
    }
    p {
        margin-left: 20px;
    }
    a {
        text-decoration: none;

    }
    a:hover{
        color: #533E85;
    }

    .article {
        display: inline-block;
        margin: 25px;
        padding: 10px;
        border: 1px dotted rgba(150, 82, 82, 0.2);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        text-decoration: none;
        border-radius: 50px;
        width: 800px;
    }
    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #533e85;
    }

    .hover-underline-animation:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #533e85;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    hr {
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .align-right {
        text-align: right;
        margin-right: 45px;
        margin-right: 30px;
    }

    /* Add button */
    .button-65 {
        appearance: none;
        backface-visibility: hidden;
        background-color: #2f80ed;
        border-radius: 10px;
        border-style: none;
        box-shadow: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica,
            Arial, sans-serif;
        font-size: 15px;
        font-weight: 500;
        height: 50px;
        letter-spacing: normal;
        line-height: 1.5;
        outline: none;
        overflow: hidden;
        padding: 14px 30px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transform: translate3d(0, 0, 0);
        transition: all 0.3s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: top;
        white-space: nowrap;
    }

    .button-65:hover {
        background-color: #1366d6;
        box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px,
            rgba(0, 0, 0, 0.05) 0 1px 4px;
        opacity: 1;
        transform: translateY(0);
        transition-duration: 0.35s;
    }

    .button-65:hover:after {
        opacity: 0.5;
    }

    .button-65:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0,
            rgba(0, 0, 0, 0.1) 0 0 10px 0, rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
        transform: translateY(2px);
        transition-duration: 0.35s;
    }

    .button-65:active:after {
        opacity: 1;
    }

    .title {
        display: flex;
        max-width: 800px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    .icon {
        height: 20px;
    }
    .edit-icon {
        height: 22px;
    }
    .delete-flex {
        margin-left: auto;
        margin-right: 30px;
    }
    .title-text {
        margin-left: auto;
    }
    @media (min-width: 768px) {
        .button-65 {
            padding: 14px 22px;
            width: 176px;
        }
    }
</style>
