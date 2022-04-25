<script>
  import { getMembers, deleteMember, getMember } from "../../services/member";
  import { onMount } from "svelte";
  import MemberCard from "../../components/member-card.svelte";

  $: members = [];
  let member;
  let open = false;
  let operation;
  let name = "";
  let eid = "";
  let role = "";
  let joiningDate = "";

  onMount(async () => {
    const res = await getMembers();
    members = res;
  });
  async function deletemember(id) {
    const res = await deleteMember(id);
    members = res;
  }

  function togglec() {
    open = !open;
    operation = true;
    name = "";
    eid = "";
    role = "";
    joiningDate = "";
  }
  async function togglee(id) {
    open = !open;
    operation = false;
    const res = await getMember(id);
    member = res;
    name = member.name;
    eid = member.id;
    role = member.role;
    joiningDate = member.joining_date;
  }
</script>

{#if !open}
  <button class="button-65" on:click={togglec}>Add new member</button>
{/if}

<div class="members">
  {#if open}
    <MemberCard {name} {eid} {role} {joiningDate} {operation}  />
    <button
      class="button-65"
      on:click={() => {
        open = !open;
      }}>Cancel</button
    >
  {:else}
    {#each members as member}
      <div class="eachmember">
        <div class="cover">
          <img class="profile-pic" src="/profile-pic.jpeg" alt="" />
          <h3>{member.name}</h3>
          <h5>{member.id}</h5>
          <h5>{member.role}</h5>
          <h5>Employee since : {member.joining_date}</h5>
        </div>
        <div class="buttonflex">
          <button class="memberbutton" on:click={async () => togglee(member.id)}
            >Edit</button
          >
          <button
            class="memberbutton redbutton"
            on:click={async () => deletemember(member.id)}>Delete</button
          >
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .members {
    margin-top: 40px;
  }
  .members h3 {
    font-size: 1.2em;
    margin: 10px;
  }
  .members h5 {
    font-size: 1em;
    margin: 10px;
  }

  .eachmember {
    background-color: rgba(0, 0, 0, 0.05);
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(150, 82, 82, 0.2);
    text-decoration: none;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    margin: 20px 20px;
    width: 250px;
  }
  .profile-pic {
    border-radius: 100%;
    max-width: 150px;
  }
  .memberbutton {
    width: 100%;
    height: 30px;
    background-color: #2f80ed;
    color: white;
    border-radius: 0 0 10px 10px;
    border: 0;
    margin: 10px;
  }
  .memberbutton:hover {
    background-color: #85b2ee;
  }
  .redbutton {
    background-color: #ef4c4c;
  }
  .redbutton:hover {
    background-color: #f49f9f;
  }
  /* /* Add button  */
  .buttonflex {
    display: flex;
  }
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

  @media (min-width: 768px) {
    .button-65 {
      padding: 14px 22px;
      width: 176px;
    }
  }
</style>
