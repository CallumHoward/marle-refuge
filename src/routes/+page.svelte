<script lang="ts">
  import { addDoc, collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase/app";
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
  let textAreaValue = "";
  let showCorruptedMessage = false;

  const handleUpload = () => {
    try {
      // Deserialise
      const refugee = JSON.parse(b64_to_utf8(textAreaValue)) as Refugee;

      // Upload to Firebase Firestore
      addDoc(refugeesCollection, refugee);
    } catch (e) {
      showCorruptedMessage = true;
    }
  };
</script>

<h1 class="text-4xl font-bold uppercase font-mono tracking-wide">Welcome</h1>

<form
  on:submit|preventDefault={handleUpload}
  class="flex justify-center flex-col m-4 w-96 h-32"
>
  <textarea
    id="paste-target"
    class="w-full h-full p-4 resize-none border border-slate-800"
    name="paste-target"
    placeholder="Please place Marle here"
    bind:value={textAreaValue}
  />
  <button type="submit">Upload</button>
</form>
{#if showCorruptedMessage}
  <p>corrupted</p>
{/if}

<style>
</style>
