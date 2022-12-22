export function idbPromise(projectName, method, object) {
  return new Promise((resolve, reject) => {
    // open('') needs to be our page name
    const request = window.indexedDB.open('', 1);
    let db, tx, store;
    request.onupgradeneeded = function(e) {
      const db = request.result;
      db.createObjectStore('projects', { keyPath: '_id' });
      db.createObjectStore('tasks', { keyPath: '_id' });
      db.createObjectStore('users', { keyPath: '_id' });
    };

    request.onerror = function(e) {
      db = request.result;
      tx = db.transaction(projectName, 'readwrite');
      store = tx.objectStore(projectName);

      db.onerror = function(err) {
        console.log('error', err)
      };

      switch (method) {
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result)
          };
          break;
        case 'put':
          store.put(object);
          resolve(object)
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default: 
          console.log('No valid method')
          break;
      }
    }
  })
}