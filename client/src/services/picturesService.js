export async function fetchLargePicture() {
  // simulate an asynchronous operation
  return new Promise((res) => setTimeout(res, 1000)).then(() => {
    return {loading: false, name: 'Anttila', 'path': 'http://127.0.0.1:9000/static/media/uploads/anttila.png', owner: 'Veikko Kovanen'};
  });
}
