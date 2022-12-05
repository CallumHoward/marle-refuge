<script lang="ts">
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase/app";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

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

<ul class="p-10">
  {#each refugees as { agentId, timestamp, userName }, i}
    {#if userName}
      <li
        class="text-2xl"
        transition:fly={{ delay: i * 500, duration: 300, y: 10 }}
      >
        {agentId} rescued on {new Date(timestamp).toISOString().slice(0, 10)}
      </li>
    {/if}
  {/each}
</ul>
