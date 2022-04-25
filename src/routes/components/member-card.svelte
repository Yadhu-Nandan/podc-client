<script>
  import { addMember } from "../../services/member";

  export let operation;
  export let name;
  export let eid;
  export let role;
  export let joiningDate;

  async function addmember(name, eid, role, joiningDate) {
    const res = await addMember(name, role, eid, joiningDate);
  }
  async function editmember(name, eid, role, joiningDate) {
    const res = await addMember(name, role, eid, joiningDate);
  }
</script>

<div class="card">
  {#if operation}
    <h2>Add new member</h2>
  {:else}
    <h2>Edit Member</h2>
  {/if}
  <hr />
  <input type="text" bind:value={name} name="name" class="newmemberinput" id="" placeholder="Name" />
  <input bind:value={eid} class="newmemberinput" name="eid" placeholder="Employee ID" />
  <input type="text" class="newmemberinput" name="role" bind:value={role} placeholder="Role" />
  <input type="date" class="newmemberinput" name="joining-date" bind:value={joiningDate} placeholder="Joining Date" />
  {#if operation}
    <button class="button-65" on:click={async () => addmember(name, eid, role, joiningDate)}>Add</button >
  {:else}
    <button class="button-65" on:click={async () => editmember(name, eid, role, joiningDate)} >Edit</button >
  {/if}
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
  .newmemberinput {
    margin: 10px;
    width: 30%;
    border: 0.1;
    margin-left: 35%;
  }
  .button-65 {
    height: 30px;
    appearance: none;
    backface-visibility: hidden;
    background-color: #2f80ed;
    margin: 0 150px;
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
    padding: 1px 30px;
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
