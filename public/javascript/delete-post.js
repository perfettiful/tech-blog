async function deleteFormHandler(event) {
    event.preventDefault();
    //getting the id from url link
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
  document.getElementById('delete-post-btn').addEventListener('click', deleteFormHandler);