<script>
    import { marked } from 'marked';
    import { collection, addDoc } from "firebase/firestore"; 
    import { db } from '../../scripts/firebase';
    let text = 'Start typing your note!';
    let username;
    let project;

    async function addToDb (text) {
        let note = text;
        let date = new Date().toDateString();
        const doc = await addDoc(collection(db, 'notes'), {
            createdAt: date,
            note: note,
            user: username,
            project: project
        });
        console.log(doc.data)
    }
</script>

<div class="editor">
    <label>User:<input bind:value={username} type="text" placeholder="Please enter your username"></label>
    <label>Project:<input bind:value={project} type="text" placeholder="Please enter your project name"></label>
    <textarea class="note-input" bind:value={text}></textarea>
    <div class="note-output">
        {@html marked(text)}
    </div>
    <button on:click|preventDefault={addToDb(text)} class="btn-submit">Add Note</button>
</div>

<style>
    .editor {
        display: grid;
        max-width: 750px;
        margin: auto;
        padding: 1rem;
        place-items: center;
        border: 1px solid #333;
        grid-template-columns: 1fr 1fr;
    }
    .note-output, .note-input {
        text-align: left;
        width: 300px;
        height: 300px;
        padding: .5rem;
    }
    .note-output {
        border: 1px solid #333;
    }
    .btn-submit {
        grid-column: span 2;
        display: grid;
    }
</style>