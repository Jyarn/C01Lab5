const SERVER_URL = "http://localhost:4000";

beforeEach(async () => {
    const delRes = await fetch(`${SERVER_URL}/deleteAllNotes`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    expect(delRes.status).toBe(200);
});

async function postnote (title, content) {
    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });

    const postNoteBody = await postNoteRes.json();

    expect(postNoteRes.status).toBe(200);
    expect(postNoteBody.response).toBe("Note added succesfully.");
    return postNoteBody.insertedId;
}

test("1+2=3, empty array is empty", () => {
  expect(1 + 2).toBe(3);
  expect([].length).toBe(0);
});



test("/postNote - Post a note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

  const postNoteBody = await postNoteRes.json();

  expect(postNoteRes.status).toBe(200);
  expect(postNoteBody.response).toBe("Note added succesfully.");
});

test("/getAllNotes - Return list of zero notes for getAllNotes", async () => {
  // Code here
    const getNoteRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const body = await getNoteRes.json();
    expect(getNoteRes.status).toBe(200);
    expect(body.response === undefined || body.response.length == 0).toBe(true);
});

test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
  // Code here
    await postnote ("title", "content");
    await postnote ("tasldkfjalskdfj", "casldkjflaskdjfl");

    const getNoteRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const body = await getNoteRes.json();
    expect(getNoteRes.status).toBe(200);
    expect(body.response.length).toBe(2);
});

test("/deleteNote - Delete a note", async () => {
  // Code here
    const noteid = await postnote ("title", "content");

    const delNoteRes = await fetch(`${SERVER_URL}/deleteNote/${noteid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const body = await delNoteRes.json();
    expect (delNoteRes.status).toBe(200);
    expect(body.response).toBe(`Document with ID ${noteid} deleted.`);
});

test("/patchNote - Patch with content and title", async () => {
  // Code here
  expect(false).toBe(true);
});

test("/patchNote - Patch with just title", async () => {
  // Code here
  expect(false).toBe(true);
});

test("/patchNote - Patch with just content", async () => {
  // Code here
  expect(false).toBe(true);
});

test("/deleteAllNotes - Delete one note", async () => {
  // Code here
  expect(false).toBe(true);
});

test("/deleteAllNotes - Delete three notes", async () => {
  // Code here
  expect(false).toBe(true);
});

test("/updateNoteColor - Update color of a note to red (#FF0000)", async () => {
  // Code here
  expect(false).toBe(true);
});
