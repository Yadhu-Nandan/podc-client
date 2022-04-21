<script>
  import { addArticle } from "../../services/article";

  export let title;
  export let content;
  export let author;
  export let operation;
  export const open = false;

  async function addarticle(title, content, author) {
    const res = await addArticle(title, content);
    console.log(res);
  }
</script>

<div class="card">
  {#if operation}
    <h2>Add new article</h2>
  {:else}
    <h2>Edit article</h2>
  {/if}
  <hr />
  <label for="title">Title</label>
  <input
    type="text"
    bind:value={title}
    name="title"
    class="newatricleinput"
    id=""
    placeholder="Title"
  />
  <label for="author">Author</label>
  <input
    type="text"
    bind:value={author}
    name="auhtor"
    class="newatricleinput"
    id=""
    placeholder="Author"
  />
  <label for="content">Content</label>
  <textarea
    bind:value={content}
    class="newatricleinput"
    name="content"
    placeholder="Content"
  />

  <button
    class="button-65"
    on:click={async () => addarticle(title, content, author)}>Add</button
  >
</div>

<style>
  .card {
    text-align: center;
    background-color: #effffa;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
    margin-bottom: 20px;
    margin-left: 25%;
  }
  .newatricleinput {
    margin: 10px;
  }
  .button-65 {
    appearance: none;
    backface-visibility: hidden;
    background-color: #2f80ed;
    margin: 0 100px;
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif;
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
    box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }

  .button-65:hover:after {
    opacity: 0.5;
  }

  .button-65:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
      rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  .button-65:active:after {
    opacity: 1;
  }
</style>
