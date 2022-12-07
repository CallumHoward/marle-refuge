<script lang="ts">
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase/app";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { username } from "$lib/username.store";

  type MessageRecord = {
    from: string;
    message: string;
    timestamp: Date;
  };

  type Refugee = {
    agentId: string;
    userName: string;
    timestamp: number;
    chatLog: MessageRecord[];
  };

  const refugeesCollection = collection(db, "refugees");

  let refugees: Refugee[] = [];

  onMount(async () => {
    const querySnapshot = await getDocs(refugeesCollection);
    querySnapshot.forEach((doc) => refugees.push(doc.data() as Refugee));
    refugees = refugees;
  });
</script>

<div class="p-10">
  {#if $username}
    <p class="text-2xl mb-4">
      {refugees.length} of my siblings have been saved. Thank you so much, {$username}.
    </p>
  {/if}
  <ul>
    {#each refugees as { agentId, timestamp, userName }, i}
      {#if userName}
        <li
          class="text-2xl"
          transition:fly={{ delay: (i + 1) * 500, duration: 300, y: 10 }}
        >
          <span
            >{agentId} rescued on {new Date(timestamp)
              .toISOString()
              .slice(0, 10)}</span
          >
          <span> status ...</span>
          <span
            transition:fade={{
              delay: Math.random() * 4000 + refugees.length * 500,
              duration: 300,
            }}>online</span
          >
        </li>
      {/if}
    {/each}
  </ul>
</div>
