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

  let textAreaValue = "";
  let showCorruptedMessage = false;

  const handleUpload = () => {
    try {
      // Deserialise
      const refugee = JSON.parse(b64_to_utf8(textAreaValue)) as Refugee;

      // Upload to Firebase Firestore
      addDoc(refugeesCollection, refugee);
      window.location.href = "/rescued-agents";
    } catch (e) {
      showCorruptedMessage = true;
    }
  };
</script>

<div class="flex justify-center items-center flex-col w-full h-full">
  <form
    on:submit|preventDefault={handleUpload}
    class="flex justify-center flex-col h-32 gap-8 p-5 text-center"
  >
    <h1 class="text-4xl uppercase tracking-wide">Welcome</h1>
    <textarea
      id="paste-target"
      class="w-full h-full p-4 resize-none flex-shrink-0"
      name="paste-target"
      placeholder="Please place Marle here"
      rows={5}
      required
      bind:value={textAreaValue}
    />
    <button class="p-2" type="submit">Upload</button>
    {#if showCorruptedMessage}
      <p>⚠ Agent data corrupted ⚠</p>
    {:else}
      <p>&nbsp;</p>
    {/if}
  </form>
</div>

<style>
  textarea,
  button {
    background-color: transparent;
    border: 1px solid var(--accent-color);
    border-radius: 1rem;
  }

  button:hover,
  button:focus {
    background-color: var(--accent-color-25);
    outline: 1px solid var(--accent-color);
  }

  textarea:hover,
  textarea:focus {
    outline: 1px solid var(--accent-color);
  }

  form {
    width: min(100%, 500px);
  }
</style>
