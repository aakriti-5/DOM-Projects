var arr = [
  {
    dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
  },
];

var clutter = "";

arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", function (dets) {
  // console.log(arr[dets.target.id].story)
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage =
    `url(${arr[dets.target.id].story})`;
  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});


