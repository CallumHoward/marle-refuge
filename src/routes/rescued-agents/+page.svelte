<script lang="ts">
  import { addDoc, collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase/app";
  import { onMount } from "svelte";
  import { b64_to_utf8 } from "$lib/utils";

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

<ul>
  {#each refugees as { agentId, timestamp, userName }}
    {#if userName}
      <li>
        {agentId} rescued on {new Date(timestamp).toISOString().slice(0, 10)}
      </li>
    {/if}
  {/each}
</ul>
